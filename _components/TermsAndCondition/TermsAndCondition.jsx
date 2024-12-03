import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>

      <p className="text-lg mb-4"><strong>Effective Date:</strong> [Insert Date]</p>

      <p className="mb-4">
        Welcome to <strong>Hotel Rajdhani</strong>, located in Halol, Gujarat. By making a booking request, using our services, or visiting our website, you agree to abide by the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Booking Request</h2>
      <p className="mb-4">
        When you make a booking request at Hotel Rajdhani, you agree to provide accurate and complete information. All booking requests are subject to availability and confirmation. 
      </p>
      <p className="mb-4">
        Bookings are confirmed once you receive an email from us confirming the details of your reservation. If you do not receive confirmation within [Insert Response Time], please contact us to follow up on your request.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Cancellation Policy</h2>
      <p className="mb-4">
        If you need to cancel or modify your booking, please notify us at least [Insert Cancellation Period] before your scheduled check-in date via email. Failure to do so may result in cancellation fees as specified in the booking confirmation email.
      </p>
      <p className="mb-4">
        All cancellations or changes should be sent to [Insert Hotel Email]. We will do our best to accommodate changes based on availability.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Check-In and Check-Out</h2>
      <p className="mb-4">
        Our standard check-in time is [Insert Check-In Time], and check-out time is [Insert Check-Out Time]. Early check-in or late check-out may be available upon request, subject to availability.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Liability</h2>
      <p className="mb-4">
        Hotel Rajdhani is not liable for any loss, damage, or injury that occurs during your stay, except as required by law. We recommend that you take precautions to safeguard your belongings and health during your stay.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Use of Services</h2>
      <p className="mb-4">
        You agree to use Hotel Rajdhani&apos;s services for lawful purposes only. Any illegal activity or behavior that disrupts the safety, security, or enjoyment of other guests will result in the termination of services without a refund.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Privacy Policy</h2>
      <p className="mb-4">
        Your privacy is important to us. For information on how we collect, use, and protect your personal data, please refer to our <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Changes to the Terms and Conditions</h2>
      <p className="mb-4">
        We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated effective date. We recommend reviewing this page periodically.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Governing Law</h2>
      <p className="mb-4">
        These Terms and Conditions are governed by the laws of [Insert Jurisdiction], and any disputes will be subject to the exclusive jurisdiction of the courts in [Insert Location].
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
      </p>
      <p><strong>Hotel Rajdhani</strong></p>
      <p>[Hotel Address]</p>
      <p>Halol, Gujarat</p>
      <p>Email: [Insert Email Address]</p>
      <p>Phone: [Insert Phone Number]</p>
    </div>
  );
};

export default TermsAndConditions;
