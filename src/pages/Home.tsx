import React from 'react';
import { ArrowRight, Star, Quote, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const testimonials = [
    {
      id: 1,
      name: "Marie L.",
      content: "Le meilleur poulet rôti que j'ai mangé à Paris ! La peau est croustillante à souhait et la viande reste tendre et juteuse. Les pommes de terre qui cuisent dans le jus sont un délice absolu.",
      rating: 5
    },
    {
      id: 2,
      name: "Thomas B.",
      content: "Une véritable institution dans le quartier. Je viens chaque dimanche chercher mon poulet, comme le faisait ma grand-mère. L'odeur qui se dégage de la boutique me rappelle mon enfance.",
      rating: 5
    },
    {
      id: 3,
      name: "Sophie M.",
      content: "Enfin un vrai poulet fermier rôti comme il se doit ! Les herbes fraîches et l'assaisonnement sont parfaits. Le service est chaleureux et authentique.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">ROASTED</h1>
          <p className="text-xl md:text-2xl mb-8">L'art du poulet rôti à la française</p>
          <Link
            to="/menu"
            className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
          >
            Découvrir notre menu
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>

      {/* Emotional Section */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Des souvenirs d'enfance à partager
            </h2>
            <p className="text-xl text-amber-700">
              Le bonheur du poulet rôti du dimanche en famille
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-8">
                <Heart className="w-12 h-12 text-amber-500 mb-6" />
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                  Tradition Familiale
                </h3>
                <p className="text-gray-700">
                  Retrouvez le goût authentique du poulet rôti qui rassemblait toute la famille autour de la table le dimanche midi.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-8">
                <Heart className="w-12 h-12 text-amber-500 mb-6" />
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                  Saveurs d'Antan
                </h3>
                <p className="text-gray-700">
                  Une cuisson lente et maîtrisée, des herbes fraîches et un assaisonnement parfait pour retrouver le goût de votre enfance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-8">
                <Heart className="w-12 h-12 text-amber-500 mb-6" />
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                  Moments Partagés
                </h3>
                <p className="text-gray-700">
                  Créez de nouveaux souvenirs en partageant un repas convivial avec ceux que vous aimez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-amber-50 via-amber-100/50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              La parole à nos clients
            </h2>
            <p className="text-xl text-amber-700">Des moments de bonheur partagés</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transform hover:-translate-y-2 transition-transform duration-300 ${
                  index % 2 === 0 ? 'md:translate-y-4' : ''
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                  <Quote 
                    size={48} 
                    className="absolute -top-4 -left-4 text-amber-400 opacity-20"
                  />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className="text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 relative z-10 text-lg">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-700 font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="text-amber-900 font-bold">{testimonial.name}</p>
                      <p className="text-amber-600 text-sm">Client fidèle</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}