import { Clock, Heart, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Kuş Sağlığı Uzmanı",
      description:
        "Kuşların sağlığı ve bakımında uzmanlaşmış veteriner hekimlik",
    },
    {
      icon: Shield,
      title: "Güvenilir Tedavi",
      description:
        "Modern ekipman ve güncel tedavi yöntemleri ile güvenli hizmet",
    },
    {
      icon: Clock,
      title: "Acil Durumlar",
      description: "7/24 acil durumlarda ulaşılabilir ve hızlı müdahale",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {/* Text Container */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
            Kuş sağlığında uzmanlaşmış ekibimiz ve modern kliniğimiz ile sevimli
            dostlarınıza en iyi bakımı sunuyoruz.
          </p>
        </div>
        {/* 3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              // Card container
              <div
                key={index}
                className="space-y-4 text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
