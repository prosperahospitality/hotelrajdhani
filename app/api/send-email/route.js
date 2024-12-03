import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import db from "@/config/mongodbConfig";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error("SMTP connection error:", error);
  } else {
    console.log("SMTP connection successful");
  }
});

export async function POST(request) {
  const payload = await request.json();

  console.log("Payload:::::::>", payload);

  await db.connect();

  if (payload.operation === "sendenquirymail") {
    try {

      const {
        booking_id,
        name,
        email,
        number,
        city,
        zip,
        amt,
        adultcount,
        childrencount,
        roomdetails,
        checkindate,
        checkoutdate
      } = payload;

      const roomDetailsHTML = roomdetails
        .map(
          (room, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${room.name}</td>
            <td>${room.adultCount}</td>
            <td>${room.childCount}</td>
            <td>${room.amount}</td>
          </tr>
        `
        )
        .join("");

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "You Received a Booking Enquiry",
        html: `
          <h2>Booking Enquiry</h2>
          <p>Dear Team,</p>
          <p>You have received a new booking enquiry. Please find the details below:</p>
          <hr />
          <p><strong>Booking ID:</strong> ${booking_id}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${number}</p>
          <p><strong>Checkin Date:</strong> ${checkindate}</p>
          <p><strong>Checkout Date:</strong> ${checkoutdate}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>ZIP Code:</strong> ${zip}</p>
          <p><strong>Total Amount:</strong> ₹${amt}</p>
          <p><strong>Number of Adults:</strong> ${adultcount}</p>
          <p><strong>Number of Children:</strong> ${childrencount}</p>
          <h3>Room Details:</h3>
          <table border="1" cellspacing="0" cellpadding="5">
            <thead>
              <tr>
                <th>#</th>
                <th>Room Name</th>
                <th>Adult Count</th>
                <th>Child Count</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${roomDetailsHTML}
            </tbody>
          </table>
          <hr />
          <p>Thank you,</p>
          <p>Your Booking System</p>
        `,
      });

      return NextResponse.json({
        status: 200,
        message: "Email sent and enquiry saved successfully",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Error sending email or saving enquiry",
        },
        { status: 500 }
      );
    }
  } else if (payload.operation === "sendcontactmail") {

    try {

      const {
        operation,
        fullName,
        phoneNumber,
        email,
        message
      } = payload;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "You Received a Contact Enquiry",
        html: `
          <h2>Contact Enquiry</h2>
          <p>Dear Team,</p>
          <p>You have received a new booking enquiry. Please find the details below:</p>
          <hr />
          <p><strong>Fullname:</strong> ${fullName}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          
          <hr />
          <p>Thank you,</p>
          <p>Your Support System</p>
        `,
      });

      return NextResponse.json({
        status: 200,
        message: "Email sent and enquiry saved successfully",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Error sending email or saving enquiry",
        },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({
    status: 400,
    message: "Invalid operation",
  });
}
