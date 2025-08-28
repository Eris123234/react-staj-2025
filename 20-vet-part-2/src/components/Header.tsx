import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    {
      name: "Anasayfa",
      href: "/",
    },
    {
      name: "Hakkımızda",
      href: "/about",
    },
    {
      name: "Hizmetler",
      href: "/services",
    },
    {
      name: "Iletişim",
      href: "/contact",
    },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-10">
      {/* max-w-7xl: Max tablet boyutunda(1280px) olsun */}
      {/* mx-auto: x ekseninde ortalar */}
      {/* 
        px-4    : Telefonlar için 
        sm:px-6 : Küçük tabletler için
        lg:px-8 : Desktoplar için
      */}
      {/* Max width ve diğer ilgili padding ayarları */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo, Desktop menüsü ve Burger button */}
        {/* justify-between: sebebi logo ve metin solda duracak. Diğer linkler sağda. Mobil ise burger butonu sağda */}
        <div className="flex justify-between items-center py-4">
          {/* Logo: Icon and Text */}
          <a href="#" className="flex items-center gap-3">
            <div className="bg-orange-500 p-3 rounded-full">
              <Heart color="white" />
            </div>
            <span className="text-2xl">Vet</span>
          </a>

          {/* Desktop Navigation */}
          {/* 
            hidden  : Telefon ve iPad Mini gibi küçük ekranlarda gizler
            md:flex : Büyük tabletler ve diğer büyük cihazlarda gözükmesini sağlar
          */}
          <nav className="space-x-8 hidden md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                // Butonların stillendirilmesi
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Burger button */}
          {/* 
            md:hidden : Büyük tabletler ve diğer büyük cihazlarda gizlenmesini sağlar
          */}
          {/* Button'a tıklama */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 cursor-pointer"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* TODO: Gizle */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  // Butonların stillendirilmesi
                  className="block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
