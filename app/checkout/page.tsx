'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MapPin, CreditCard, Truck, Lock } from 'lucide-react';

// Nigerian Geozones with shipping fees
const NIGERIAN_GEOZONES = {
  'Lagos & Environs': {
    fee: 0,
    deliveryDays: '1-2',
    states: ['Lagos']
  },
  'South West': {
    fee: 1500,
    deliveryDays: '2-3',
    states: ['Ogun', 'Oyo', 'Osun', 'Ondo', 'Ekiti']
  },
  'South South': {
    fee: 2000,
    deliveryDays: '2-3',
    states: ['Rivers', 'Delta', 'Edo', 'Bayelsa', 'Cross River', 'Akwa Ibom']
  },
  'South East': {
    fee: 2000,
    deliveryDays: '2-3',
    states: ['Anambra', 'Enugu', 'Imo', 'Abia', 'Ebonyi']
  },
  'North Central': {
    fee: 2500,
    deliveryDays: '3-4',
    states: ['Abuja (FCT)', 'Niger', 'Kwara', 'Kogi', 'Benue', 'Plateau', 'Nasarawa']
  },
  'North West': {
    fee: 3000,
    deliveryDays: '3-5',
    states: ['Kaduna', 'Kano', 'Katsina', 'Sokoto', 'Zamfara', 'Kebbi', 'Jigawa']
  },
  'North East': {
    fee: 3000,
    deliveryDays: '3-5',
    states: ['Borno', 'Yobe', 'Bauchi', 'Gombe', 'Adamawa', 'Taraba']
  }
};

const ALL_STATES = Object.values(NIGERIAN_GEOZONES).flatMap(zone => zone.states).sort();

function getShippingInfo(state: string) {
  for (const [zoneName, zoneData] of Object.entries(NIGERIAN_GEOZONES)) {
    if (zoneData.states.includes(state)) {
      return {
        zone: zoneName,
        fee: zoneData.fee,
        deliveryDays: zoneData.deliveryDays
      };
    }
  }
  return { zone: 'Unknown', fee: 0, deliveryDays: 'N/A' };
}

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    paymentMethod: 'card'
  });

  const shippingInfo = formData.state ? getShippingInfo(formData.state) : null;
  const subtotal = getCartTotal();
  const shippingFee = shippingInfo?.fee || 0;
  const total = subtotal + shippingFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo - just clear cart and redirect
    alert('Order placed successfully! (Demo Mode)');
    clearCart();
    router.push('/');
  };

  if (cart.length === 0) {
    router.push('/cart');
    return null;
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Delivery Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold">Delivery Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="House number and street name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., Ikeja"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select State</option>
                      {ALL_STATES.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {shippingInfo && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <div className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-semibold text-blue-900">
                          {shippingInfo.zone}
                        </p>
                        <p className="text-sm text-blue-700">
                          Delivery: {shippingInfo.deliveryDays} business days
                        </p>
                        <p className="text-sm text-blue-700">
                          Shipping Fee: {shippingInfo.fee === 0 ? 'FREE' : `₦${shippingInfo.fee.toLocaleString()}`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold">Payment Method</h2>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-md cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-primary"
                    />
                    <span className="ml-3 font-medium">Card Payment (Visa, Mastercard, Verve)</span>
                  </label>

                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-md cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={formData.paymentMethod === 'transfer'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-primary"
                    />
                    <span className="ml-3 font-medium">Bank Transfer</span>
                  </label>

                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-md cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="pod"
                      checked={formData.paymentMethod === 'pod'}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-primary"
                    />
                    <span className="ml-3 font-medium">Pay on Delivery (Lagos only)</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <Lock className="w-5 h-5" />
                Place Order - ₦{total.toLocaleString()}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-4 mb-4">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      {item.selectedSize && (
                        <p className="text-xs text-gray-600">Size: {item.selectedSize}</p>
                      )}
                    </div>
                    <p className="font-semibold text-sm">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={shippingFee === 0 ? 'text-green-600 font-semibold' : ''}>
                    {shippingFee === 0 ? 'FREE' : `₦${shippingFee.toLocaleString()}`}
                  </span>
                </div>
              </div>

              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">₦{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-md p-3">
                <p className="text-xs text-green-800">
                  <strong>✓ Secure Checkout</strong><br />
                  Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
