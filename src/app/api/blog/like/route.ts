import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { postId } = await request.json();

    if (!postId) {
      return NextResponse.json({ error: "Missing postId" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("portfolio");
    const postsCollection = db.collection("posts");

    const result = await postsCollection.findOneAndUpdate(
      { id: postId },
      { $inc: { likes: 1 } },
      { returnDocument: "after" }
    );

    const newLikes = result?.likes || 1;
    return NextResponse.json({ success: true, likes: newLikes });
  } catch (error) {
    console.error("MongoDB Like error:", error);
    return NextResponse.json({ success: false, error: "Failed to record endorsement" }, { status: 500 });
  }
}
