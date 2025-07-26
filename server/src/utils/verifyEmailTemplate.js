const verifyEmailTemplate = ({ name, url, id }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="text-align: center; padding: 20px;">
        <h1>Welcome to Ecommerce-fullStack-design, ${name}!</h1>
        <p>Thank you for registering with us. To complete your registration, please verify your email address by clicking the button below:</p>
        <a href="${url}/verify-email?code=${id}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Verify Email</a>
        <p>If the button above does not work, you can copy and paste the following link into your browser:</p>
        <p><a href="${url}">${url}/verify-email?code=${id}</a></p>
        <p>Thank you for choosing Ecommerce-fullStack-design!</p>
        <p>Best regards,<br>The Ecommerce-fullStack-design Team</p>
        <p style="font-size: 12px; color: #888;">If you did not create an account, please ignore this email.</p>
        <p style="font-size: 12px; color: #888;">This is an automated message, please do not reply.</p>
        <h2>Developed by Zeeshan Ali Anjam</h2>
        
    </div>
</body>
</html>
    `;
};

export { verifyEmailTemplate };
