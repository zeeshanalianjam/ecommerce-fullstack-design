import { Resend } from 'resend';

const resend = new Resend(process.env.VERIFY_EMAIL_API_KEY);

const verifyEmail = async ({ sendTo, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Ecommerce-fullStack-design <no-reply@dostlogics.com>',
      to: sendTo,
      subject: subject,
      html: html,
    });

    if (error) {
      return console.error({ error });
    }

    return data;
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error('Failed to send verification email');
  }
};

export { verifyEmail };
