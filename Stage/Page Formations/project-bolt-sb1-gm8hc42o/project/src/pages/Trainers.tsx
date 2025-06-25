import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Calendar, MapPin, Star } from 'lucide-react';

const trainers = [
	{
		id: 'guy',
		name: 'Guy',
		title: 'Expert en Dynamiques Comportementales',
		specialties: [
			'Dynamiques comportementales',
			'Intelli7',
			'Ressources humaines',
		],
		experience: '?',
		description:
			"Riche de son expérience de Directeur des Ressources Humaines auprès d’un grand groupe, Guy se passionne pour les dynamiques comportementales individuelles et collectives.",
		image:
			'../components/nouveau_logo.jpg',
		rating: '?',
		formations: [
			"Présentation de l’analyse de dynamique comportementale à l’aide de l’outil Intelli7",
			"Visualisation du compte-rendu individuel fourni par l’Intelli7",
			"Les clés de lecture pour un bon fonctionnement entre associés",
			"Compléter le profil de mon associé idéal défini lors de la formation précédente, « Avec qui s’associer ? »",
		],
		disponibilite: '?',
		certifications: ['?'],
	},
	{
		id: 'thierry',
		name: 'Thierry',
		title: 'Expert en Marketing et Développement Commercial',
		specialties: [
			'Marketing',
			'Développement commercial',
			'Accompagnement de projet',
		],
		experience: '20+ ans d\'expérience',
		description:
			"Avec plus de 20 années d’expérience de marketing et développement commercial en France et à l’étranger, Thierry accompagne les personnes et les équipes professionnelles dans la réussite de leur projet.",
		image:
			'../components/nouveau_logo.jpg',
		rating: '?',
		formations: [
			"Présentations Power Point",
			"Fiche projet vierge à remplir par le participant",
		],
		disponibilite: '?',
		certifications: ['?'],
		materiel: [
			"Micro-ordinateur, projecteur, supports visuels, et paperboard",
			"Salle suffisamment grande pour permettre de former 3 à 4 sous-groupes, ou salle plénière et espaces adjacents",
		],
		contact: 'contact@tigcre.org',
	},
	{
		id: 'sophie-bernard',
		name: 'Sophie Bernard',
		title: 'Coach en Développement Entrepreneurial',
		specialties: ['Coaching individuel', 'Stratégie d\'entreprise', 'Communication'],
		experience: '10 ans d\'expérience',
		description: 'Coach certifiée, Sophie accompagne les entrepreneurs dans leur développement personnel et professionnel pour maximiser leur potentiel de réussite.',
		image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
		rating: 4.7,
		formations: ['Coaching Entrepreneurial', 'Coaching Relationnel'],
		disponibilite: 'Lundi, Mardi, Jeudi',
		certifications: ['Certification ICF', 'Master en Management']
	}
];

const Trainers = () => {
	return (
		<div className="min-h-screen py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Nos Formateurs & Coaches
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Découvrez notre équipe d'experts passionnés, dédiés à votre réussite
						entrepreneuriale et au développement de vos compétences relationnelles.
					</p>
				</div>

				{/* Trainers Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
					{trainers.map((trainer) => (
						<div
							key={trainer.id}
							className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
						>
							{/* Image */}
							<div className="relative h-64 overflow-hidden">
								<img
									src={trainer.image}
									alt={trainer.name}
									className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
								/>
								<div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
									<Star className="w-4 h-4 text-yellow-400 fill-current" />
									<span className="text-sm font-semibold">
										{trainer.rating}
									</span>
								</div>
							</div>

							{/* Content */}
							<div className="p-6">
								<div className="mb-4">
									<h3 className="text-xl font-bold text-gray-900 mb-1">
										{trainer.name}
									</h3>
									<p className="text-blue-600 font-semibold text-sm mb-2">
										{trainer.title}
									</p>
									<p className="text-gray-500 text-sm">
										{trainer.experience}
									</p>
								</div>

								<p className="text-gray-600 mb-4 leading-relaxed text-sm">
									{trainer.description}
								</p>

								{/* Specialties */}
								<div className="mb-4">
									<h4 className="font-semibold text-gray-900 mb-2 text-sm">
										Spécialités :
									</h4>
									<div className="flex flex-wrap gap-2">
										{trainer.specialties.map((specialty, index) => (
											<span
												key={index}
												className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
											>
												{specialty}
											</span>
										))}
									</div>
								</div>

								{/* Availability */}
								<div className="mb-4">
									<div className="flex items-center text-gray-600 text-sm">
										<Calendar className="w-4 h-4 mr-2 text-green-600" />
										<span>{trainer.disponibilite}</span>
									</div>
								</div>

								{/* Formations */}
								<div className="mb-6">
									<h4 className="font-semibold text-gray-900 mb-2 text-sm">
										Formations :
									</h4>
									<ul className="text-sm text-gray-600 space-y-1">
										{trainer.formations.map((formation, index) => (
											<li key={index} className="flex items-start">
												<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
												{formation}
											</li>
										))}
									</ul>
								</div>

								<Link
									to={`/formateur/${trainer.id}`}
									className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
								>
									Voir le profil
									<ArrowRight className="ml-2 w-4 h-4" />
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* Stats Section */}
				<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">
							L'Excellence de Notre Équipe
						</h2>
						<p className="text-gray-600">
							Des professionnels reconnus pour leur expertise et leur engagement
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
						<div>
							<div className="text-3xl font-bold text-blue-600 mb-2">?</div>
							<div className="text-gray-600">
								Années d'expérience moyenne
							</div>
						</div>

						<div>
							<div className="text-3xl font-bold text-green-600 mb-2">?</div>
							<div className="text-gray-600">Note moyenne</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-orange-600 mb-2">?</div>
							<div className="text-gray-600">
								Entrepreneurs accompagnés
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trainers;