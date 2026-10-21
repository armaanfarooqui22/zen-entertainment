import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message, honeypot } = body;

    // 1. Honeypot check for spam bots
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
    }

    // 2. Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Phone, Message)." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Console log for server verification
    console.log("--- NEW PRODUCTION ENQUIRY ---");
    console.log(`From: ${name} (${email}, Phone: ${phone})`);
    console.log(`Service: ${service || "General Enquiry"} | Budget: ${budget || "Not Specified"}`);
    console.log(`Message: ${message}`);
    console.log("-------------------------------");

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! A Zen Entertainment production lead will contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
