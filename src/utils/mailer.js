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
      port: 465,
      secure: true,
      secureConnection: false,
      auth: {
        user: "support@dataskillshub.com",
        pass: "WelcomePP@78"
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
