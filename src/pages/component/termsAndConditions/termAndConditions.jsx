import React, { useEffect } from 'react';
import { Footer } from '../footer/footer';
import { Nav } from '../nav/nav';
import { New_breadCrumbs } from '../newCrumbs/newcrumbs';

export const TermsAndConditions = () => {
  const effectiveDate = 'October 13, 2025'; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <Nav />

      <New_breadCrumbs />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F77F00] mb-2">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Effective Date: {effectiveDate}
          </p>
        </header>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            These Terms & Conditions govern your access to and use of the Trading Diary platform
            operated by Cogent Devs. By using the Platform, you agree to these terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">1. Nature of the Platform</h2>
          <p className="pl-4 list-disc">
            Trading Diary is a record-keeping and self-analysis tool. The Platform:
          </p>
          <ul className="list-disc pl-8 space-y-1">
            <li>Does not execute trades</li>
            <li>Does not provide investment advice</li>
            <li>Does not offer trading signals or recommendations</li>
          </ul>
          <p>All decisions remain solely the responsibility of the user.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">2. User Eligibility</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>Be at least 18 years old</li>
            <li>Provide accurate account information</li>
            <li>Use the Platform for lawful purposes only</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">3. User Responsibilities</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>Accuracy of data they enter</li>
            <li>Maintaining confidentiality of login credentials</li>
            <li>Ensuring compliance with applicable laws and broker rules</li>
          </ul>
          <p>Cogent Devs is not responsible for losses resulting from user decisions or incorrect data entry.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">4. No Financial Advice Disclaimer</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>Financial advice</li>
            <li>Investment recommendations</li>
            <li>Portfolio management services</li>
          </ul>
          <p>All content and tools provided are for informational and self-tracking purposes only. Users should consult licensed professionals for financial decisions.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">5. Intellectual Property</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>Copy or reverse-engineer the platform</li>
            <li>Redistribute or resell access</li>
            <li>Use content without written permission</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">6. Service Availability</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>Perform maintenance</li>
            <li>Update features</li>
            <li>Temporarily suspend services if required</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">7. Limitation of Liability</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>Financial losses</li>
            <li>Trading outcomes</li>
            <li>Data inaccuracies entered by users</li>
            <li>Indirect or consequential damages</li>
          </ul>
          <p>Use of the Platform is entirely at the user’s own risk.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">8. Account Suspension or Termination</h2>
          <ul className="list-disc pl-8 space-y-1">
            <li>Suspend or terminate accounts for misuse</li>
            <li>Enforce platform rules</li>
            <li>Protect system integrity and compliance</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">9. Modifications to Terms</h2>
          <p>We may revise these Terms & Conditions at any time. Continued use of the Platform constitutes acceptance of updated terms.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">10. Governing Law</h2>
          <p>These Terms shall be governed by and interpreted in accordance with the laws of Islamic Republic of Pakistan.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">11. Contact Information</h2>
          <p>
            For questions regarding these Terms: <br />
            Cogent Devs <br />
            Email: <a href="mailto:support@yourdomain.com" className="text-[#F77F00] hover:underline">support@yourdomain.com</a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};