import User from "@/DB/Model/userModel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const hasedToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hasedToken,
          verifyTokenExpiry: Date.now() + 3600000
        }
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hasedToken,
          forgotPasswordExpiry: Date.now() + 3600000
        }
      });
    }
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: true,
      secureConnection: false, // TLS requires secureConnection to be false
      tls: {
        ciphers: "SSLv3"
      },
      requireTLS: true,
      port: 465,
      debug: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    const mailOptions = {
      from: "support@dataskillshub.com", // sender address
      to: email, // list of receivers
      subject: emailType === "VERIFY" ? "Email Verification" : "Password Reset",
      html:
        emailType === "VERIFY"
          ? ` <p>
      Click <a href=${
        process.env.DOMAIN
      }/verifyemail?token=${hasedToken}>here</a>
      to ${emailType === "VERIFY" ? "verify" : "reset"} your email
      <br />
      ${process.env.DOMAIN}/verifyemail?token=${hasedToken}
    </p>`
          : ` <p>
      Click <a href=${
        process.env.DOMAIN
      }/resetpassword?token=${hasedToken}>here</a>
      to ${emailType === "RESET" ? "reset" : "verify"} your password
      <br />
      ${process.env.DOMAIN}/resetpassword?token=${hasedToken}
    </p>`
    };
    const mailResponse = await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error(error.message);
  }
};
