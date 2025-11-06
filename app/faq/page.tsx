'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const faqs = [
  {
    category: 'Orders & Payment',
    questions: [
      {
        question: 'How do I place an order?',
        answer: 'Browse our products, add items to your cart, and proceed to checkout. You\'ll need to provide your delivery address and payment information. Once confirmed, you\'ll receive an order confirmation email.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept bank transfers, card payments (Visa, Mastercard, Verve), and payment on delivery for select locations. All online payments are processed securely.'
      },
      {
        question: 'Is everything really ₦1,000?',
        answer: 'Yes! Every item on our website is priced at exactly ₦1,000. No hidden fees, no price increases. Quality fashion at one unbeatable price.'
      },
      {
        question: 'Can I cancel my order?',
        answer: 'Yes, you can cancel your order within 2 hours of placing it. Contact us immediately at contact@1kshopng.com or call +234 906 536 9681. After this time, the order may have been dispatched.'
      },
      {
        question: 'Do you offer discounts or promotions?',
        answer: 'Since all our items are already at the incredible price of ₦1,000, we don\'t offer additional discounts. However, we occasionally run special promotions - subscribe to our newsletter to stay updated!'
      }
    ]
  },
  {
    category: 'Shipping & Delivery',
    questions: [
      {
        question: 'How long does delivery take?',
        answer: 'Delivery takes 1-2 business days for Lagos, 2-3 days for major cities (Abuja, Port Harcourt, Kano, etc.), and 3-5 business days for other locations nationwide.'
      },
      {
        question: 'Do you ship nationwide?',
        answer: 'Yes! We deliver to all 36 states in Nigeria and the Federal Capital Territory (FCT). No location is too far.'
      },
      {
        question: 'How much is shipping?',
        answer: 'Shipping is completely FREE to all locations in Nigeria. We cover all delivery costs.'
      },
      {
        question: 'Can I track my order?',
        answer: 'Yes! Once your order is dispatched, you\'ll receive a tracking number via email. You can use this to track your package in real-time.'
      },
      {
        question: 'What if I\'m not home during delivery?',
        answer: 'Our courier will contact you before delivery. If you\'re not available, they\'ll make up to 3 delivery attempts. You can also coordinate an alternative delivery time or location.'
      }
    ]
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 14-day return policy from the date of delivery. Items must be unworn, unwashed, with original tags attached, and in original packaging.'
      },
      {
        question: 'How do I return an item?',
        answer: 'Contact us at contact@1kshopng.com with your order number and reason for return. We\'ll provide a Return Authorization (RA) number and arrange for pickup at no cost to you.'
      },
      {
        question: 'Can I exchange an item for a different size?',
        answer: 'Yes! Follow the return process and specify the size you need. We\'ll ship the new size once we receive your return, subject to availability.'
      },
      {
        question: 'How long does it take to get a refund?',
        answer: 'Once we receive and inspect your return, refunds are processed within 5-7 business days to your original payment method.'
      },
      {
        question: 'What items cannot be returned?',
        answer: 'For hygiene reasons, undergarments, swimwear, and intimate apparel cannot be returned. Also, worn, washed, or items without tags are not eligible for return.'
      }
    ]
  },
  {
    category: 'Products & Quality',
    questions: [
      {
        question: 'Are your products authentic?',
        answer: 'Absolutely! We source all our products from authorized distributors and guarantee 100% authenticity. Every item is genuine.'
      },
      {
        question: 'How can items be so affordable at ₦1,000?',
        answer: 'We work directly with manufacturers and brands, buying in bulk and eliminating middlemen. This allows us to pass massive savings to you while maintaining quality.'
      },
      {
        question: 'What brands do you carry?',
        answer: 'We carry premium brands including Nike, Adidas, Puma, Zara, H&M, Gucci, Louis Vuitton, Calvin Klein, Tommy Hilfiger, and many more.'
      },
      {
        question: 'Do you have sizing guides?',
        answer: 'Yes! Each product page includes size information. Generally, we offer sizes from XS to XXL. If you need specific measurements, contact our customer service team.'
      },
      {
        question: 'What if an item is out of stock?',
        answer: 'Out-of-stock items are clearly marked on our website. You can sign up for restock notifications, and we\'ll email you when the item is available again.'
      }
    ]
  },
  {
    category: 'Account & Security',
    questions: [
      {
        question: 'Do I need an account to shop?',
        answer: 'You can browse without an account, but creating one makes checkout faster and lets you track orders easily. It\'s free and takes less than a minute!'
      },
      {
        question: 'Is my payment information secure?',
        answer: 'Yes! We use industry-standard SSL encryption and secure payment gateways. Your payment information is never stored on our servers.'
      },
      {
        question: 'How do I reset my password?',
        answer: 'Click "Forgot Password" on the login page, enter your email, and we\'ll send you instructions to reset your password.'
      },
      {
        question: 'Can I update my delivery address?',
        answer: 'Yes, you can update your address in your account settings. For orders already placed, contact us within 2 hours to update the delivery address.'
      }
    ]
  },
  {
    category: 'Customer Service',
    questions: [
      {
        question: 'How can I contact customer service?',
        answer: 'Email us at contact@1kshopng.com, call +234 906 536 9681 or +234 802 819 7643, or visit our office at No. 28 Kodesoh Street, Ikeja, Lagos. We\'re available Monday-Saturday, 9 AM - 6 PM.'
      },
      {
        question: 'How quickly will I get a response?',
        answer: 'We aim to respond to all inquiries within 24 hours. For urgent matters, please call us directly during business hours.'
      },
      {
        question: 'Do you have a physical store?',
        answer: 'Currently, we operate online only. This helps us keep costs low and pass the savings to you! However, you can visit our office during business hours.'
      },
      {
        question: 'Can I request specific products?',
        answer: 'Yes! We love hearing from our customers. Email us your product requests at contact@1kshopng.com, and we\'ll do our best to source them.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about shopping at 1KShopNG
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-14 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-12">
                {filteredFaqs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                    <div className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <div
                          key={index}
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleQuestion(`${categoryIndex}-${index}`)}
                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-left text-gray-900">
                              {faq.question}
                            </span>
                            {openQuestion === `${categoryIndex}-${index}` ? (
                              <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          {openQuestion === `${categoryIndex}-${index}` && (
                            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No results found for "{searchTerm}". Try a different search term.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Can't find what you're looking for? Our customer service team is here to help!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="/contact"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-primary text-2xl mb-2">📧</div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="text-sm text-gray-600">contact@1kshopng.com</p>
              </a>
              <a
                href="tel:+2349065369681"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-primary text-2xl mb-2">📞</div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p className="text-sm text-gray-600">+234 906 536 9681</p>
              </a>
              <a
                href="/contact"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-primary text-2xl mb-2">💬</div>
                <h3 className="font-bold mb-1">Visit Us</h3>
                <p className="text-sm text-gray-600">Ikeja, Lagos</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
