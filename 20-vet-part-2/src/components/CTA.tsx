import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <div className="bg-orange-600 py-16">
      <div className="space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">
          Kuşunuzun Sağlığı İçin Hemen İletişime Geçin
        </h2>
        <p className="text-xl text-orange-100">
          Deneyimli veteriner hekimimizden randevu alın
        </p>
        {/* Button Container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+905312345678"
            className="flex items-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold justify-center gap-4 hover:bg-orange-50 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>+90 (531) 234 56 78</span>
          </a>
          <a
            href="/iletisim"
            className=" bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold  hover:bg-orange-800 transition-colors"
          >
            <span>Iletişim bilgileri</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
