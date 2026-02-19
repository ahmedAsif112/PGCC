import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Create mail transporter using empireoffshoreprojects@gmail.com (you already have this password)
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "empireoffshoreprojects@gmail.com",
                pass: process.env.MAIL_PASS, // Use your existing MAIL_PASS
            },
        });

        // 1. Send email to OFFICE (empireoffshoreoffice@gmail.com) with all details
        await transport.sendMail({
            from: "empireoffshoreprojects@gmail.com",
            to: "ahmedempireoffshore@gmail.com",
            subject: "🎯 New Free Strategy Call Request",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 10px;">
                    <div style="background: linear-gradient(135deg, #FFA529 0%, #FFB84D 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                        <h1 style="color: #00264D; margin: 0; font-size: 28px;">New Strategy Call Request</h1>
                        <p style="color: #00264D; margin: 10px 0 0 0; opacity: 0.9;">A potential client has requested a free strategy call</p>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
                        <h2 style="color: #00264D; border-bottom: 3px solid #FFA529; padding-bottom: 10px;">Contact Information</h2>
                        
                        <table style="width: 100%; margin: 20px 0;">
                            <tr>
                                <td style="padding: 10px 0; color: #6b7280; font-weight: bold; width: 180px;">Full Name:</td>
                                <td style="padding: 10px 0; color: #00264D;">${data.fullName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #6b7280; font-weight: bold;">Business Name:</td>
                                <td style="padding: 10px 0; color: #00264D;">${data.businessName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #6b7280; font-weight: bold;">Email:</td>
                                <td style="padding: 10px 0; color: #00264D;"><a href="mailto:${data.email}" style="color: #F97316;">${data.email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #6b7280; font-weight: bold;">Phone/WhatsApp:</td>
                                <td style="padding: 10px 0; color: #00264D;">${data.phone}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #6b7280; font-weight: bold;">Website/Instagram:</td>
                                <td style="padding: 10px 0; color: #00264D;">${data.website}</td>
                            </tr>
                        </table>

                        <h2 style="color: #00264D; border-bottom: 3px solid #FFA529; padding-bottom: 10px; margin-top: 30px;">Business Challenges & Goals</h2>
                        
                        <div style="background: #FFF7ED; padding: 15px; border-left: 4px solid #FFA529; margin: 15px 0; border-radius: 5px;">
                            <p style="color: #6b7280; font-weight: bold; margin: 0 0 8px 0;">Current Problem/Challenge:</p>
                            <p style="color: #00264D; margin: 0; line-height: 1.6;">${data.problem}</p>
                        </div>

                        <div style="background: #F0FDF4; padding: 15px; border-left: 4px solid #10B981; margin: 15px 0; border-radius: 5px;">
                            <p style="color: #6b7280; font-weight: bold; margin: 0 0 8px 0;">Business Goals:</p>
                            <p style="color: #00264D; margin: 0; line-height: 1.6;">${data.goals}</p>
                        </div>

                        <div style="margin-top: 30px; padding: 20px; background: #EFF6FF; border-radius: 8px; text-align: center;">
                            <p style="color: #00264D; margin: 0; font-size: 14px;">
                                ⏰ <strong>Response Time:</strong> Within 2 hours<br/>
                                📅 <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', {
                timeZone: 'America/New_York',
                dateStyle: 'full',
                timeStyle: 'short'
            })} EST
                            </p>
                        </div>
                    </div>
                </div>
            `,
        });

        // 2. Send confirmation email to USER from empireoffshoreoffice@gmail.com
        // We use reply-to to make it appear from empireoffshoreoffice@gmail.com
        await transport.sendMail({
            from: '"Empire Offshore" <empireoffshoreprojects@gmail.com>',
            replyTo: "empireoffshoreoffice@gmail.com", // User will reply to this address
            to: data.email,
            subject: "Your Free Strategy Call is Confirmed! 🎯",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 10px;">
                    <div style="background: linear-gradient(135deg, #FFA529 0%, #FFB84D 100%); padding: 40px 30px; border-radius: 10px 10px 0 0; text-align: center;">
                        <div style="background: white; width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 40px;">✅</span>
                        </div>
                        <h1 style="color: #00264D; margin: 0; font-size: 32px;">Request Received!</h1>
                        <p style="color: #00264D; margin: 15px 0 0 0; font-size: 16px; opacity: 0.9;">We're excited to help you grow your business</p>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
                        <p style="color: #00264D; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                            Hi <strong>${data.fullName}</strong>,
                        </p>
                        
                        <p style="color: #00264D; font-size: 15px; line-height: 1.8; margin: 0 0 20px 0;">
                            Thank you for requesting a <strong>Free 15-Minute Strategy Call</strong> with Empire Offshore! 🚀
                        </p>

                        <div style="background: #FFF7ED; padding: 20px; border-left: 4px solid #FFA529; margin: 25px 0; border-radius: 5px;">
                            <p style="color: #00264D; margin: 0 0 15px 0; font-size: 15px; line-height: 1.6;">
                                <strong>What happens next?</strong>
                            </p>
                            <ul style="color: #00264D; margin: 0; padding-left: 20px; line-height: 1.8;">
                                <li>One of our growth strategists will reach out within <strong>2 hours</strong></li>
                                <li>We'll discuss your challenges and goals in detail</li>
                                <li>You'll receive a customized action plan for your business</li>
                            </ul>
                        </div>

                        <div style="background: #F0FDF4; padding: 20px; border-left: 4px solid #10B981; margin: 25px 0; border-radius: 5px;">
                            <p style="color: #00264D; margin: 0 0 10px 0; font-weight: bold;">What you'll get on the call:</p>
                            <ul style="color: #00264D; margin: 0; padding-left: 20px; line-height: 1.8;">
                                <li>Free Social Media Audit</li>
                                <li>Website UX Breakdown</li>
                                <li>90-Day Marketing Roadmap</li>
                                <li>Opportunity Report</li>
                            </ul>
                        </div>

                        <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 25px 0 0 0;">
                            In the meantime, feel free to check out our portfolio and case studies at 
                            <a href="https://www.empireoffshore.com" style="color: #F97316; text-decoration: none; font-weight: bold;">www.empireoffshore.com</a>
                        </p>

                        <div style="margin-top: 30px; padding: 20px; background: #EFF6FF; border-radius: 8px; text-align: center;">
                            <p style="color: #00264D; margin: 0; font-size: 13px; line-height: 1.6;">
                                Questions? Reply directly to this email or contact us:<br/>
                                📧 <a href="mailto:empireoffshoreoffice@gmail.com" style="color: #F97316;">empireoffshoreoffice@gmail.com</a><br/>
                                📱 WhatsApp/Phone: Check our website for contact details
                            </p>
                        </div>

                        <div style="margin-top: 30px; text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                            <p style="color: #00264D; font-size: 16px; margin: 0 0 10px 0;">
                                <strong>Warm regards,</strong>
                            </p>
                            <p style="color: #00264D; font-size: 15px; margin: 0; font-weight: 600;">
                                Empire Offshore Team
                            </p>
                            <p style="color: #6b7280; font-size: 13px; margin: 5px 0 0 0;">
                                Growth Strategists & Digital Marketing Experts
                            </p>
                        </div>
                    </div>

                    <div style="text-align: center; padding: 20px 0; color: #9ca3af; font-size: 12px;">
                        <p style="margin: 0;">© ${new Date().getFullYear()} Empire Offshore. All rights reserved.</p>
                    </div>
                </div>
            `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.error("Email sending error:", error);
        return new Response(
            JSON.stringify({
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            }),
            { status: 500 }
        );
    }
}