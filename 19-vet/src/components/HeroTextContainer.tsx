const HeroTextContainer = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Kuşlarınızın Sağlığı
        <span className="block text-orange-600">Bizim Onceliğimiz</span>
      </h1>
      <p className="text-gray-600 mb-8 text-xl leading-relaxed">
        Ankara'da kuş sağlığında uzmanlaşmış veteriner kliniği. Sevimli
        dostlarınızın sağlık ihtiyaçları için profesyonel ve güvenilir hizmet.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center"
          href="/iletişim"
        >
          Randevu Al
        </a>
        <a
          className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center"
          href="tel:+90512323112"
        >
          Hemen Ara
        </a>
      </div>
    </div>
  );
};

export default HeroTextContainer;
