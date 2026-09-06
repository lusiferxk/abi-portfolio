import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { postId, pollId, optionId } = await request.json();

    if (!pollId || !optionId) {
      return NextResponse.json({ error: "Missing pollId or optionId" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("portfolio");
    const postsCollection = db.collection("posts");

    // Increment specific option votes and totalVotes for the matching post's poll
    const result = await postsCollection.findOneAndUpdate(
      { "poll.id": pollId, "poll.options.id": optionId },
      {
        $inc: {
          "poll.totalVotes": 1,
          "poll.options.$.votes": 1,
        },
      },
      { returnDocument: "after" }
    );

    if (result) {
      return NextResponse.json({ success: true, poll: result.poll });
    }

    return NextResponse.json({ success: true, pollId, optionId });
  } catch (error) {
    console.error("MongoDB Vote error:", error);
    return NextResponse.json({ success: false, error: "Failed to record vote" }, { status: 500 });
  }
}
