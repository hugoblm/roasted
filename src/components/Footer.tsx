import React from 'react';
import { Instagram, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ROASTED</h3>
            <p className="text-amber-200">
              Spécialiste du poulet rôti à la française
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Horaires</h4>
            <div className="flex items-start space-x-2">
              <Clock className="mt-1 flex-shrink-0" size={18} />
              <p>
                Ouvert tous les jours<br />
                8h30 - 20h30
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Adresse</h4>
            <div className="flex items-start space-x-2">
              <MapPin className="mt-1 flex-shrink-0" size={18} />
              <p>39 rue de Bretagne<br />75003 Paris</p>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-amber-200 hover:text-white"
              >
                <Instagram size={20} />
                <span>Suivez-nous sur Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-amber-800 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} Roasted. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}