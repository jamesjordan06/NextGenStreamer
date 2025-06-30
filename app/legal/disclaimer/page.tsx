import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Affiliate Disclaimer - NextGenStreamer',
  description: 'Our affiliate disclaimer explains our relationship with Amazon and other retailers mentioned on our site.',
  alternates: {
    canonical: 'https://nextgenstreamer.com/legal/disclaimer'
  }
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Affiliate Disclaimer</h1>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>
            
            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Amazon Associates Program</h2>
              <p className="text-gray-600 mb-6">
                NextGenStreamer is a participant in the Amazon Services LLC Associates Program, an affiliate 
                advertising program designed to provide a means for sites to earn advertising fees by advertising 
                and linking to Amazon.com and affiliated sites.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Relationships</h2>
              <p className="text-gray-600 mb-6">
                This website contains affiliate links, which means we may receive a small commission if you make 
                a purchase through these links at no additional cost to you. This commission helps support our 
                website and allows us to continue providing valuable content and recommendations.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Recommendations</h2>
              <p className="text-gray-600 mb-6">
                We only recommend products and services that we genuinely believe will add value to our readers. 
                Our affiliate relationships do not influence our editorial content or product recommendations. 
                All opinions expressed on this site are our own.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Price and Availability</h2>
              <p className="text-gray-600 mb-6">
                Prices and availability of products mentioned on this site are subject to change without notice. 
                We do not display current prices on our site as they change frequently. Please check the retailer's 
                website for current pricing and availability.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Reviews and Testing</h2>
              <p className="text-gray-600 mb-6">
                While we strive to provide accurate and helpful information about the products we recommend, 
                individual experiences may vary. We encourage you to do your own research and read multiple 
                reviews before making any purchase decisions.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Guarantee</h2>
              <p className="text-gray-600 mb-6">
                We make no guarantees about the products or services mentioned on this site. Use of this 
                information is at your own risk. We are not responsible for any damages or losses that may 
                result from the use of products purchased through our affiliate links.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Advice</h2>
              <p className="text-gray-600 mb-6">
                The content on this website is for informational purposes only and should not be considered 
                professional advice. Always consult with qualified professionals for specific recommendations 
                related to your particular needs and circumstances.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about our affiliate relationships or this disclaimer, please contact 
                us through our website or social media channels. We are committed to transparency and will be 
                happy to answer any questions you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 