import React from 'react';

export default function NotreHistoire() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-12 text-center">
          Notre Histoire
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                Florian, mon histoire
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Né dans une famille où la cuisine était au cœur de chaque moment important, j'ai grandi avec les odeurs de rôtisserie qui émanaient de la cuisine de ma grand-mère. Chaque dimanche était marqué par le rituel du poulet rôti, un moment qui rassemblait toute la famille autour de la table. Cette passion pour la cuisine authentique et le partage m'a naturellement conduit vers une carrière dans la restauration. Après des années d'apprentissage auprès des meilleurs rôtisseurs de France et un passage dans des établissements étoilés, j'ai décidé de revenir à mes premières amours : le poulet rôti traditionnel.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                Le marché des enfants rouges
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le choix du marché des enfants rouges pour établir Roasted n'est pas un hasard. Ce lieu historique, le plus ancien marché couvert de Paris, incarne parfaitement les valeurs qui me sont chères : l'authenticité, la tradition et le partage. Dans ce quartier vivant du Marais, où se mêlent histoire et modernité, j'ai trouvé l'endroit idéal pour faire revivre les saveurs de mon enfance. Le marché, avec son atmosphère unique et sa clientèle cosmopolite, représente l'essence même de la gastronomie française : le plaisir de bien manger dans un cadre convivial.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                Roasted
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Roasted est né d'une volonté simple : proposer le meilleur poulet rôti de Paris, en respectant les techniques traditionnelles tout en y apportant une touche de modernité. Chaque matin, nous sélectionnons avec soin des volailles fermières de qualité, élevées en plein air. Notre méthode de cuisson, perfectionnée au fil des années, permet d'obtenir une peau croustillante tout en gardant une chair tendre et juteuse. Les pommes de terre qui cuisent dans le jus de cuisson, nos marinades aux herbes fraîches et nos assaisonnements secrets font partie intégrante de l'expérience Roasted.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
              {/* Placeholder for founder's image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Image du fondateur à venir
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}