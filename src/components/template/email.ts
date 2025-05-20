export const emailTemplate = (
  name: string,
  email: string,
  message: string,
  phone: string
) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; color: #333333; line-height: 1.6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0; background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; border: 0; border-spacing: 0; background-color: #ffffff; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden;">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 30px 30px 20px 30px; background-color: #ffffff; text-align: center; border-bottom: 1px solid #eeeeee;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 600; color: #333333;">Portfolio</h1>
                        </td>
                    </tr>
                    
                    <!-- Title Section -->
                    <tr>
                        <td style="padding: 35px 30px 20px 30px; background-color: #ffffff; text-align: center;">
                            <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #333333;">New Contact Form Submission</h1>
                            <p style="margin: 10px 0 0 0; font-size: 16px; color: #666666;">You've received a new message from your website.</p>
                        </td>
                    </tr>
                    
                    <!-- Contact Information -->
                    <tr>
                        <td style="padding: 0 30px 20px 30px; background-color: #ffffff;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; border: 1px solid #eeeeee; border-radius: 6px; overflow: hidden;">
                                <!-- Name -->
                                <tr>
                                    <td style="width: 30%; padding: 15px; background-color: #f9f9f9; font-weight: 600; color: #555555; border-bottom: 1px solid #eeeeee;">Name:</td>
                                    <td style="width: 70%; padding: 15px; border-bottom: 1px solid #eeeeee;">${name}</td>
                                </tr>
                                
                                <!-- Email -->
                                <tr>
                                    <td style="width: 30%; padding: 15px; background-color: #f9f9f9; font-weight: 600; color: #555555; border-bottom: 1px solid #eeeeee;">Email:</td>
                                    <td style="width: 70%; padding: 15px; border-bottom: 1px solid #eeeeee;"><a href="mailto:${email}" style="color: #5c6ac4; text-decoration: none;">${email}</a></td>
                                </tr>
                                
                                <!-- Phone -->
                                <tr>
                                    <td style="width: 30%; padding: 15px; background-color: #f9f9f9; font-weight: 600; color: #555555; border-bottom: 1px solid #eeeeee;">Phone:</td>
                                    <td style="width: 70%; padding: 15px; border-bottom: 1px solid #eeeeee;"><a href="tel:${phone}" style="color: #5c6ac4; text-decoration: none;">${phone}</a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Message Section -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px; background-color: #ffffff;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; border: 1px solid #eeeeee; border-radius: 6px; overflow: hidden;">
                                <tr>
                                    <td style="padding: 15px; background-color: #f9f9f9; font-weight: 600; color: #555555; border-bottom: 1px solid #eeeeee;">Message:</td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px; line-height: 1.6; color: #333333;">
                                        <p style="margin: 0; font-size: 16px;">${message}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #f9f9f9; text-align: center; border-top: 1px solid #eeeeee;">
                            <p style="margin: 0; font-size: 14px; color: #777777;">© 2025 Your Portfolio. All rights reserved.</p>
                            <p style="margin: 10px 0 0 0; font-size: 13px; color: #999999;">
                                This is an automated email sent from your website contact form.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
};
