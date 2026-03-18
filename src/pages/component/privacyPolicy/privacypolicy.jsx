// File: PrivacyPolicy.jsx
import React, { useEffect } from 'react';
import { Nav } from '../nav/nav';
import { New_breadCrumbs } from '../newCrumbs/newcrumbs';
import { Footer } from '../footer/footer';

export const PrivacyPolicy = () => {
    const effectiveDate = 'October 13, 2025'; // demo date

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
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        Effective Date: {effectiveDate}
                    </p>
                </header>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        Cogent Devs (“we”, “our”, “us”) is committed to protecting the privacy of users (“you”, “your”) who access and use the Trading Diary platform (“the Platform”). This Privacy Policy explains how we collect, use, store, and protect your information.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6">1. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <ul className="list-disc pl-8 space-y-1">
                        <li><strong>Personal Information:</strong> Name, Email, Contact details, Account login credentials</li>
                        <li><strong>Trading & Usage Data:</strong> Trade entries, Portfolio data, Notes, Tags, Activity logs</li>
                        <li><strong>Technical Information:</strong> IP address, Device info, OS, Log files, Analytics</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-8 space-y-1">
                        <li>Provide and operate the Platform</li>
                        <li>Maintain user accounts and authentication</li>
                        <li>Improve platform performance and features</li>
                        <li>Analyze usage patterns for product improvement</li>
                        <li>Communicate service-related updates</li>
                        <li>Ensure security, fraud prevention, and compliance</li>
                    </ul>
                    <p>We do not use your data to provide investment advice or trading signals.</p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6">3. Data Storage and Security</h2>
                    <ul className="list-disc pl-8 space-y-1">
                        <li>User data stored using industry-standard security practices</li>
                        <li>Access restricted and role-based</li>
                        <li>Technical and organizational safeguards to protect data</li>
                    </ul>
                    <p>Despite best efforts, no system can guarantee 100% security.</p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6">4. Data Sharing and Disclosure</h2>
                    <ul className="list-disc pl-8 space-y-1">
                        <li>We do not sell, rent, or trade user data</li>
                        <li>May share only with trusted service providers or as required by law</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6">5. Cookies and Tracking</h2>
                    <ul className="list-disc pl-8 space-y-1">
                        <li>Improve user experience</li>
                        <li>Maintain sessions</li>
                        <li>Analyze platform usage</li>
                    </ul>
                    <p>You may disable cookies, but some features may not function properly.</p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6">6. User Rights and Control</h2>
                    <ul className="list-disc pl-8 space-y-1">
                        <li>Access and update personal info</li>
                        <li>Request account deletion (subject to rules)</li>
                        <li>Control optional notifications and preferences</li>
                    </ul>
                    <p>Requests via: <a href="mailto:support@yourdomain.com" className="text-[#F77F00] hover:underline">support@yourdomain.com</a></p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6">7. Third-Party Links</h2>
                    <p>Platform may contain third-party links. We are not responsible for external sites' privacy practices.</p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6">8. Children’s Privacy</h2>
                    <p>Platform is not for individuals under 18. We do not knowingly collect data from minors.</p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6">9. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy periodically. Continued use indicates acceptance of revisions.</p>

                    <h2 className="text-xl font-semibold text-gray-900 mt-6">10. Contact Information</h2>
                    <p>
                        For questions regarding this Privacy Policy: <br />
                        Cogent Devs <br />
                        Email: <a href="mailto:support@yourdomain.com" className="text-[#F77F00] hover:underline">support@yourdomain.com</a>
                    </p>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};