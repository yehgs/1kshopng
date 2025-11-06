import { Truck, Package, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Shipping Information</h1>
            <p className="text-xl text-gray-600">
              Fast, reliable delivery to your doorstep nationwide
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <Truck className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
                <p className="text-gray-600">On all orders nationwide</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">3-5 Business Days</h3>
                <p className="text-gray-600">Standard delivery time</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Nationwide</h3>
                <p className="text-gray-600">We deliver everywhere in Nigeria</p>
              </div>
            </div>

            {/* Delivery Locations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivery Locations</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  We deliver to all 36 states in Nigeria and the Federal Capital Territory (FCT).
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">South West</h4>
                    <ul className="space-y-1">
                      <li>Lagos</li>
                      <li>Ogun</li>
                      <li>Oyo</li>
                      <li>Osun</li>
                      <li>Ondo</li>
                      <li>Ekiti</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">South South</h4>
                    <ul className="space-y-1">
                      <li>Rivers</li>
                      <li>Delta</li>
                      <li>Edo</li>
                      <li>Bayelsa</li>
                      <li>Cross River</li>
                      <li>Akwa Ibom</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">South East</h4>
                    <ul className="space-y-1">
                      <li>Anambra</li>
                      <li>Enugu</li>
                      <li>Imo</li>
                      <li>Abia</li>
                      <li>Ebonyi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">North Central</h4>
                    <ul className="space-y-1">
                      <li>Abuja (FCT)</li>
                      <li>Niger</li>
                      <li>Kwara</li>
                      <li>Kogi</li>
                      <li>Benue</li>
                      <li>Plateau</li>
                      <li>Nasarawa</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  + All other states in North East and North West regions
                </p>
              </div>
            </div>

            {/* Delivery Timeline */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivery Timeline</h2>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Lagos & Environs</h3>
                      <p className="text-gray-600">1-2 business days</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Major Cities</h3>
                      <p className="text-gray-600 mb-2">2-3 business days</p>
                      <p className="text-sm text-gray-500">
                        Abuja, Port Harcourt, Kano, Ibadan, Kaduna, Benin City, Enugu
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Other Locations</h3>
                      <p className="text-gray-600">3-5 business days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Order Confirmation</h3>
                    <p className="text-gray-600">
                      Once you place your order, you'll receive an immediate confirmation email with your order details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Processing</h3>
                    <p className="text-gray-600">
                      Your order is carefully prepared and packaged within 24 hours of confirmation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Dispatch</h3>
                    <p className="text-gray-600">
                      Your package is dispatched via our trusted courier partners. You'll receive a tracking number.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Delivery</h3>
                    <p className="text-gray-600">
                      Your package arrives at your doorstep. Our courier will contact you before delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Information</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Order Tracking:</strong> You can track your order using the tracking number sent to your email.
                    </p>
                    <p>
                      <strong>Delivery Attempts:</strong> Our courier will make up to 3 delivery attempts. Please ensure someone is available to receive the package.
                    </p>
                    <p>
                      <strong>Address Accuracy:</strong> Please ensure your delivery address is correct and complete to avoid delays.
                    </p>
                    <p>
                      <strong>Contact Information:</strong> Provide a valid phone number for delivery coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Shipping */}
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <Package className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Need Help with Shipping?</h3>
              <p className="text-gray-600 mb-6">
                Our customer service team is here to help with any shipping questions.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Contact Us:</p>
                <p className="text-gray-600">
                  Email: contact@1kshopng.com<br />
                  Phone: +234 906 536 9681 | +234 802 819 7643
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
