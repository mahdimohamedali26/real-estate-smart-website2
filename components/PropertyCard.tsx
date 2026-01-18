
import React from 'react';
import { MapPin, ArrowLeft } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-luxury text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
          {property.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center text-gray-500 text-xs mb-2 gap-1">
          <MapPin size={14} className="text-luxury" />
          <span>{property.location}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
          <span className="text-luxury font-bold text-lg">{property.price}</span>
          <button className="text-gray-400 group-hover:text-luxury transition-colors flex items-center gap-1 text-sm font-semibold">
            التفاصيل <ArrowLeft size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
