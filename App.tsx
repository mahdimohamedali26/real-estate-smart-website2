
import React from 'react';
import { 
  Building2, 
  Home, 
  HardHat, 
  Phone, 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Users,
  Instagram,
  Facebook,
  Twitter,
  MapPin
} from 'lucide-react';
import PropertyCard from './components/PropertyCard';
import ChatBot from './components/ChatBot';
import { Property } from './types';

const App: React.FC = () => {
  const properties: Property[] = [
    {
      id: 1,
      title: "مجمع النخيل السكني",
      location: "بغداد - الجادرية",
      price: "$250,000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
      category: "تطوير",
      description: "مشروع سكني متكامل يجمع بين الحداثة والتراث، بتصاميم هندسية فريدة وخدمات ترفيهية متطورة."
    },
    {
      id: 2,
      title: "فيلا الواحة الملكية",
      location: "البصرة - حي الخليج",
      price: "$480,000",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
      category: "بيع",
      description: "فيلا فاخرة بمساحة 600 متر مربع، مزودة بمسبح خاص وحدائق غناء، مثالية للعوائل التي تبحث عن الرقي."
    },
    {
      id: 3,
      title: "برج الوكيل التجاري",
      location: "أربيل - شارع 60",
      price: "$1,200,000",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      category: "بناء",
      description: "صرح معماري تجاري يضم مكاتب ذكية ومراكز تسوق عالمية، قيد الإنشاء بأعلى المعايير الدولية."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-luxury p-2 rounded-lg text-white shadow-lg shadow-orange-500/30">
                <Building2 size={28} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-gray-900">
                الوكيل <span className="text-luxury">للعقارات</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
              <a href="#" className="hover:text-luxury transition-colors">الرئيسية</a>
              <a href="#services" className="hover:text-luxury transition-colors">خدماتنا</a>
              <a href="#projects" className="hover:text-luxury transition-colors">المشاريع</a>
              <a href="#about" className="hover:text-luxury transition-colors">من نحن</a>
              <button className="bg-luxury text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                اتصل بنا
              </button>
            </div>
            <div className="md:hidden">
              <Phone className="text-luxury" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50 -z-10 rounded-bl-[200px] hidden lg:block opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-luxury rounded-full text-xs font-bold mb-6">
                <ShieldCheck size={16} />
                <span>الاسم الأول في الاستثمار العقاري العراقي</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-gray-900">
                نبني <span className="text-luxury">المستقبل</span> <br />
                بلمسة من الفخامة العريقة
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                شركة الوكيل للاستثمارات العقارية.. رؤية هندسية رصينة، استشارات قانونية دقيقة، ومشاريع تغير واجهة العقار في العراق.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-luxury text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30">
                  اكتشف مشاريعنا
                </button>
                <button className="bg-white text-gray-800 border-2 border-gray-100 px-10 py-4 rounded-xl font-bold text-lg hover:border-luxury hover:text-luxury transition-all">
                  تواصل مع خبير
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Luxury Architecture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-luxury font-bold text-lg mb-2">خدماتنا المتميزة</h2>
          <h3 className="text-4xl font-black text-gray-900 mb-16">نحن لا نبني جدراناً، بل نصنع حياة</h3>
          <div className="grid md:grid-cols-3 gap-8 text-right">
            <div className="p-10 rounded-3xl bg-gray-50 border border-transparent hover:border-orange-200 transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-luxury shadow-lg mb-8 group-hover:bg-luxury group-hover:text-white transition-all">
                <HardHat size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">التطوير العقاري</h4>
              <p className="text-gray-600 leading-relaxed">دراسات جدوى معمقة وتطوير مشاريع سكنية وتجارية كبرى تلبي احتياجات السوق العراقي المتنامي.</p>
            </div>
            <div className="p-10 rounded-3xl bg-luxury text-white shadow-2xl shadow-orange-500/30 transform scale-105 z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white shadow-lg mb-8">
                <Home size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">بيع وشراء العقارات</h4>
              <p className="text-white/80 leading-relaxed">نقدم لك أفضل الفرص الاستثمارية في أرقى أحياء بغداد والمحافظات، مع ضمانات قانونية كاملة.</p>
            </div>
            <div className="p-10 rounded-3xl bg-gray-50 border border-transparent hover:border-orange-200 transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-luxury shadow-lg mb-8 group-hover:bg-luxury group-hover:text-white transition-all">
                <Building2 size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">بناء العقارات</h4>
              <p className="text-gray-600 leading-relaxed">تنفيذ مشاريع البناء بأحدث التقنيات الهندسية العالمية وبأيدي مهندسين مختصين.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-luxury font-bold text-lg mb-2">معرض الأعمال</h2>
            <h3 className="text-4xl font-black text-gray-900">مشاريعنا الحالية</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 border-t text-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-luxury p-2 rounded-lg text-white">
                  <Building2 size={24} />
                </div>
                <span className="text-2xl font-black text-gray-900">
                  الوكيل <span className="text-luxury">للعقارات</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                الشركة الرائدة في مجال التطوير والاستثمار العقاري في العراق.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-6 text-lg">روابط سريعة</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-luxury transition-colors">عن الشركة</a></li>
                <li><a href="#" className="hover:text-luxury transition-colors">المشاريع</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-gray-900 mb-6 text-lg">اتصل بنا</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-center gap-3"><MapPin size={18} className="text-luxury" /> بغداد، الجادرية</li>
                <li className="flex items-center gap-3"><Phone size={18} className="text-luxury" /> 6600</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
};

export default App;
