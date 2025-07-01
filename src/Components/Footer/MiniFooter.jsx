import { Truck, RotateCcw, CreditCard, Gift, Headphones } from 'lucide-react';

export default function MiniFooter() {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description: "For all Orders Over $100"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "30 Days Returns",
      description: "For an Exchange Product"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secured Payment",
      description: "Payment Cards Accepted"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Special Gifts",
      description: "Our First Product Order"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support 24/7",
      description: "Contact us Anytime"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-gray-600">
                {service.icon}
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}