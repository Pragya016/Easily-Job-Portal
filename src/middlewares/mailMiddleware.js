<<<<<<< HEAD
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

// to resolve this issue - Error: Missing credentials for "PLAIN", put email and password directly
=======
import nodemailer from 'nodemailer';
>>>>>>> af0fa2b72e37a6ed24da6e2d1227b4e65e102b9f

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL,
<<<<<<< HEAD
        pass: process.env.EMAIL_PASSWORD
    },
    debug: true 
});

export function sendMail(req, res, next) {
    const userMailId = req.body.email;

    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: userMailId,
        subject: "Account created successfully.",
        text: 'Welcome to Easily! \nYour registration is successful. Start exploring job opportunities and take the next step in your career journey!🚀🚀 \n \n Warm Regards, \n Team Easily',
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error("Error sending email:", err);
            return res.render('errorPage') 
        }

        console.log("Email sent successfully:", info.response);
        next();
    });
}
=======
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function sendEmailToUser(req, res, next) {
    const userMailId = req.body.email;
    const mailOptions = {
        from: 'pragyasaxena8279@gmail.com',
        to: userMailId,
        subject: "Congratulations!!!🎉🎉",
        text: 'Welcome to Easily! 🎉 Your registration is successful. Start exploring job opportunities and take the next step in your career journey! \n \n Warm Regards, \n Team Easily',
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
            next();
        }

    });
    next();
}
>>>>>>> af0fa2b72e37a6ed24da6e2d1227b4e65e102b9f
