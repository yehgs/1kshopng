import { RefreshCw, CheckCircle, XCircle, AlertTriangle, Package } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
            <p className="text-xl text-gray-600">
              Your satisfaction is our priority. Easy returns within 14 days.
            </p>
          </div>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <RefreshCw className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">14 Days</h3>
                <p className="text-gray-600">Return window from delivery</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <Package className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Free Returns</h3>
                <p className="text-gray-600">No return shipping fees</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Easy Process</h3>
                <p className="text-gray-600">Simple return procedure</p>
              </div>
            </div>

            {/* Return Eligibility */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Return Eligibility</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Items Eligible for Return:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Items in original condition with tags attached</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Unworn, unwashed, and undamaged items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Items in original packaging (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Returns initiated within 14 days of delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Items purchased at full price (₦1,000)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Items NOT Eligible for Return:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Worn, washed, or altered items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Items without original tags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Items damaged due to misuse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Undergarments, swimwear, and intimate apparel (for hygiene reasons)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Items returned after 14 days</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How to Return */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Return an Item</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                    <p className="text-gray-600 mb-2">
                      Email us at <a href="mailto:contact@1kshopng.com" className="text-primary hover:underline">contact@1kshopng.com</a> or call <span className="font-semibold">+234 906 536 9681</span>
                    </p>
                    <p className="text-gray-600">
                      Provide your order number and reason for return.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Get Return Authorization</h3>
                    <p className="text-gray-600">
                      Our team will review your request and provide a Return Authorization (RA) number within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Package the Item</h3>
                    <p className="text-gray-600">
                      Securely package the item with all original tags and packaging. Include your RA number in the package.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ship the Return</h3>
                    <p className="text-gray-600 mb-2">
                      We'll arrange for pickup at no cost to you, or you can ship to:
                    </p>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200 text-sm">
                      <p className="font-semibold mb-1">1KShopNG Returns Department</p>
                      <p>No. 28 Kodesoh Street</p>
                      <p>Ikeja, Lagos State</p>
                      <p>Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Receive Refund</h3>
                    <p className="text-gray-600">
                      Once we receive and inspect your return, we'll process your refund within 5-7 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exchanges */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exchanges</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  We're happy to exchange items for a different size or color, subject to availability.
                </p>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Follow the same return process above</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Specify the size/color you'd like to exchange for</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>We'll ship the new item once we receive your return</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>No additional shipping charges for exchanges</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Refund Process</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Refund Method:</strong> Refunds will be issued to your original payment method.
                  </p>
                  <p>
                    <strong>Processing Time:</strong> 5-7 business days after we receive and inspect your return.
                  </p>
                  <p>
                    <strong>Refund Amount:</strong> Full purchase price (₦1,000 per item).
                  </p>
                  <p>
                    <strong>Notification:</strong> You'll receive an email confirmation once your refund is processed.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Notes</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Inspection Required:</strong> All returns are subject to inspection. Items not meeting our return criteria may be sent back to you.
                    </p>
                    <p>
                      <strong>Defective Items:</strong> If you receive a defective item, please contact us immediately. We'll arrange a replacement or full refund.
                    </p>
                    <p>
                      <strong>Wrong Item:</strong> If you receive the wrong item, contact us within 48 hours and we'll arrange a free exchange.
                    </p>
                    <p>
                      <strong>Return Shipping:</strong> We cover return shipping costs for defective items or shipping errors. For other returns, we'll arrange pickup at no cost to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <RefreshCw className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Need Help with a Return?</h3>
              <p className="text-gray-600 mb-6">
                Our customer service team is here to assist you with the return process.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Contact Us:</p>
                <p className="text-gray-600">
                  Email: contact@1kshopng.com<br />
                  Phone: +234 906 536 9681 | +234 802 819 7643<br />
                  Monday - Saturday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
