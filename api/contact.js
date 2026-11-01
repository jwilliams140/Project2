import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed.",
    });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: "Please complete all fields.",
    });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return res.status(400).json({
      message: "Invalid form submission.",
    });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanSubject = subject.trim();
  const cleanMessage = message.trim();

  if (
    !cleanName ||
    !cleanEmail ||
    !cleanSubject ||
    !cleanMessage
  ) {
    return res.status(400).json({
      message: "Please complete all fields.",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(cleanEmail)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
    });
  }

  if (
    cleanName.length > 100 ||
    cleanEmail.length > 254 ||
    cleanSubject.length > 150 ||
    cleanMessage.length > 5000
  ) {
    return res.status(400).json({
      message: "One or more fields are too long.",
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: cleanEmail,
      subject: `Portfolio Contact: ${cleanSubject}`,
      text: `
New message from your portfolio

Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Message:
${cleanMessage}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        message: "Unable to send message.",
      });
    }

    return res.status(200).json({
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      message: "Unable to send message.",
    });
  }
}