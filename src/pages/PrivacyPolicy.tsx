
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      <ParallaxBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-center text-gray-600 mb-12">Last updated: December 14, 2024</p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At SkillSync ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Information</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, participate in activities on the website, or otherwise contact us.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Usage Data</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We automatically collect certain information when you visit, use, or navigate the website. This information does not reveal your specific identity but may include device and usage information.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use personal information collected via our website for a variety of business purposes described below:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>To facilitate account creation and logon process</li>
                  <li>To send you marketing and promotional communications</li>
                  <li>To send administrative information to you</li>
                  <li>To fulfill and manage your orders</li>
                  <li>To post testimonials with your consent</li>
                  <li>To request feedback and contact you about your use of our website</li>
                  <li>To enable user-to-user communications</li>
                  <li>To manage user accounts</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Sharing Your Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may process or share data based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations, or Vital Interests. We only share information with your consent, to comply with laws, or to protect your rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Your Privacy Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>The right to access – You have the right to request copies of your personal data</li>
                  <li>The right to rectification – You have the right to request correction of inaccurate data</li>
                  <li>The right to erasure – You have the right to request deletion of your data</li>
                  <li>The right to restrict processing – You have the right to request restriction of processing</li>
                  <li>The right to object to processing – You have the right to object to our processing</li>
                  <li>The right to data portability – You have the right to request transfer of your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use cookies and similar tracking technologies to access or store information. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Third-Party Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use third-party service providers to help us operate our business and the website or administer activities on our behalf. We may share your information with these third parties for those limited purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. International Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Updates to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions or comments about this privacy policy, you may contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>SkillSync Inc.</strong><br />
                    Email: privacy@skillsync.com<br />
                    Address: 123 Market Street, Suite 400, San Francisco, CA 94105<br />
                    Phone: +1 (555) 123-4567
                  </p>
                </div>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
