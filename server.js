const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
        user: "arsen_avetisyan_2005@mail.ru", // Replace with your Mail.ru email
        pass: "rY9ZDyhRVkx6zsN1Jy4Z" // Replace with your Mail.ru password
    }
});

app.post("/send-email", async (req, res) => {
    const { name, email } = req.body;

    const mailOptions = {
        from: "arsen_avetisyan_2005@mail.ru", // Replace with your Mail.ru email
        to: "arsen_avetisyan_2005@mail.ru", // Replace with your Mail.ru email
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email.");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});