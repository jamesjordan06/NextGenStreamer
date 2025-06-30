import { Metadata } from 'next/types'
import CookiePreferences from '@/components/CookiePreferences'

export const metadata: Metadata = {
  title: 'Privacy Policy - NextGenStreamer',
  description: 'Our privacy policy explains how we collect, use, and protect your information when you visit NextGenStreamer.',
  alternates: {
    canonical: 'https://nextgenstreamer.com/legal/privacy'
  }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>
            
            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you subscribe to our newsletter, 
                contact us, or interact with our website. This may include your name and email address.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>• Provide and improve our services</li>
                <li>• Send you updates about creator gear and recommendations</li>
                <li>• Respond to your inquiries and provide customer support</li>
                <li>• Analyze website usage to improve user experience</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without 
                your consent, except as described in this policy. We may share information with service providers 
                who assist us in operating our website and conducting our business.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
                and understand where our visitors are coming from. We respect your privacy and will only use 
                non-essential cookies with your explicit consent.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be disabled.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors interact with our site. 
                This helps us improve our content and user experience. These cookies are only set with your consent.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Links</h2>
              <p className="text-gray-600 mb-6">
                Our website contains affiliate links to Amazon and other retailers. When you click these links and 
                make a purchase, we may earn a commission at no additional cost to you. This helps support our site 
                and allows us to continue providing valuable content.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                is 100% secure.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-6">
                You have the right to access, update, or delete your personal information. You may also opt out of 
                receiving promotional communications from us by following the unsubscribe instructions in our emails.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our service is not intended for children under 13. We do not knowingly collect personal information 
                from children under 13. If you become aware that a child has provided us with personal information, 
                please contact us.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes by posting 
                the new privacy policy on this page and updating the "Last updated" date.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this privacy policy, please contact us through our website or 
                social media channels.
              </p>
            </div>
          </div>
          
          {/* Cookie Preferences Section */}
          <div className="max-w-4xl mx-auto mt-8">
            <CookiePreferences />
          </div>
        </div>
      </div>
    </div>
  )
} 