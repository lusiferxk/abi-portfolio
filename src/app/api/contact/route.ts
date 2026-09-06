import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("portfolio");
    const contactsCollection = db.collection("contacts");

    const newContact = {
      name,
      email,
      subject: subject || "General Inquiry",
      message,
      createdAt: new Date(),
    };

    await contactsCollection.insertOne(newContact);

    return NextResponse.json({ success: true, message: "Message received successfully!" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: false, error: "Failed to submit message" }, { status: 500 });
  }
}
