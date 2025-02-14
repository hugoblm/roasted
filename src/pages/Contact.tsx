import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-12 text-center">
          Nous Trouver
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="text-amber-700" size={24} />
                  <h2 className="text-2xl font-semibold text-gray-900">Adresse</h2>
                </div>
                <p className="text-gray-600 text-lg">
                  39 rue de Bretagne<br />
                  75003 Paris
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-amber-700" size={24} />
                  <h2 className="text-2xl font-semibold text-gray-900">Horaires</h2>
                </div>
                <p className="text-gray-600 text-lg">
                  Ouvert tous les jours<br />
                  8h30 - 20h30
                </p>
              </div>
            </div>
          </div>

          <div className="h-[400px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7758475667163!2d2.3604!3d48.8636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e03cdce4a3f%3A0x38f99c0b4cc7a5c7!2s39%20Rue%20de%20Bretagne%2C%2075003%20Paris!5e0!3m2!1sen!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}