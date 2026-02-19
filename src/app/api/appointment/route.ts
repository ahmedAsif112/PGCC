import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // 1. Create mail transporter
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // 2. Send email to ADMIN with all details
        await transport.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: "New Appointment Request",
            html: `
        <h2>New Appointment Details</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Company:</b> ${data.company}</p>
        <p><b>Website:</b> ${data.website}</p>
        <p><b>Phone:</b> ${data.phone}</p>

        <p><b>Comment:</b> ${data.comment}</p>
        <p><b>Need:</b> ${data.need}</p>

        <p><b>Date:</b> ${data.date}</p>
        <p><b>Time:</b> ${data.time}</p>
        <p><b>Timezone:</b> ${data.timezone}</p>
      `,
        });

        // 3. Confirmation email to USER
        await transport.sendMail({
            from: process.env.MAIL_USER,
            to: data.email,  // ← user email here
            subject: "We received your appointment request",
            html: `
        <p>Hi ${data.name},</p>
        <p>Thank you for contacting Empire Offshore. We have received your request and our team is now reviewing the details.</p>
        <p>A representative will reach out shortly to confirm the next steps and provide any additional information required. If you scheduled a meeting, you will receive a calendar invitation or confirmation by email soon.</p>
        <p>At Empire Offshore, we value clarity, communication, and timely support. You can expect a response within our standard business hours.</p>
        <p>If you have any immediate questions, feel free to reply directly to this email.</p>

<p><strong>Warm regards,</strong><br/>Empire Offshore <br/> www.empireoffshore.com</p>      `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
}
