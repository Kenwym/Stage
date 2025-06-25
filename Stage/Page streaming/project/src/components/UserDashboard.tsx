import React, { useState } from 'react';
import { 
  Video, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  FileText, 
  MessageCircle, 
  Phone, 
  Mail,
  Download,
  ExternalLink,
  ChefHat,
  Lightbulb,
  User,
  X
} from 'lucide-react';
import VideoConference from './VideoConference';

interface UserDashboardProps {
  userData: {
    name: string;
    email: string;
    participationType: string;
    eventDetails: {
      title: string;
      date: string;
      time: string;
      theme: string;
      location: string;
      address: string;
    };
  };
  onClose: () => void;
}

export default function UserDashboard({ userData, onClose }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [userName, setUserName] = useState('');
  const [isInVideoCall, setIsInVideoCall] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const handleJoinCall = () => {
    if (!userName.trim()) {
      alert('Veuillez entrer votre nom pour rejoindre la visioconférence');
      return;
    }
    setIsInVideoCall(true);
  };

  const handleLeaveCall = () => {
    setIsInVideoCall(false);
  };

  // If user is in video call, show the video conference component
  if (isInVideoCall) {
    return (
      <VideoConference 
        userName={userName || userData.name}
        onLeave={handleLeaveCall}
      />
    );
  }

  const tabs = [
    { id: 'overview', label: 'Accueil', icon: User },
    { id: 'resources', label: 'Ressources', icon: FileText },
    { id: 'community', label: 'Communauté', icon: MessageCircle },
    { id: 'support', label: 'Support', icon: Phone }
  ];

  const resources = [
    {
      title: 'Guide de préparation',
      description: 'Comment bien préparer votre participation à l\'événement',
      type: 'PDF',
      icon: FileText,
      downloadUrl: '#'
    },
    {
      title: 'Recettes apéritives',
      description: 'Sélection de recettes pour accompagner votre soirée',
      type: 'PDF',
      icon: ChefHat,
      downloadUrl: '#'
    },
    {
      title: 'Template de présentation',
      description: 'Modèle PowerPoint pour présenter votre projet',
      type: 'PPTX',
      icon: Lightbulb,
      downloadUrl: '#'
    },
    {
      title: 'Liste d\'ingrédients',
      description: 'Ingrédients recommandés pour l\'apéritif',
      type: 'PDF',
      icon: ChefHat,
      downloadUrl: '#'
    }
  ];

  // Empty community messages - replace with real data
  const communityMessages: Array<{
    id: number;
    author: string;
    message: string;
    time: string;
    avatar: string;
  }> = [];

  const getParticipationTypeInfo = () => {
    switch (userData.participationType) {
      case 'presentiel':
        return {
          title: 'Participation en présentiel',
          icon: MapPin,
          color: 'blue',
          description: 'Vous participez directement à l\'événement parisien'
        };
      case 'centre':
        return {
          title: 'Centre Strasbourg + Visio',
          icon: Users,
          color: 'purple',
          description: 'Vous rejoignez le centre strasbourgeois avec connexion aux présentations'
        };
      case 'visio':
        return {
          title: 'Présentation en visio',
          icon: Video,
          color: 'green',
          description: 'Vous présentez votre projet uniquement en ligne'
        };
      default:
        return {
          title: 'Participation',
          icon: User,
          color: 'gray',
          description: 'Mode de participation'
        };
    }
  };

  const participationInfo = getParticipationTypeInfo();

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 overflow-y-auto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AT</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Apéri-tigcre Dashboard</h1>
                <p className="text-sm text-gray-600">Bienvenue, {userData.name}</p>
              </div>
            </div>
            
            {/* Join Call Button */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Votre nom pour la visio"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <button
                  onClick={handleJoinCall}
                  className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <Video className="w-4 h-4" />
                  <span>Rejoindre la visio</span>
                </button>
              </div>
              
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
              <div className="space-y-2">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === id
                        ? 'bg-orange-100 text-orange-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Bienvenue à l'Apéri-tigcre, {userData.name} ! 🎉
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Nous sommes ravis de vous compter parmi nous pour cette soirée networking exceptionnelle. 
                    Voici toutes les informations importantes pour votre participation.
                  </p>
                  
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium bg-${participationInfo.color}-100 text-${participationInfo.color}-700`}>
                    <participationInfo.icon className="w-4 h-4" />
                    <span>{participationInfo.title}</span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                    <Calendar className="w-6 h-6 text-orange-600" />
                    <span>Détails de votre événement</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">{userData.eventDetails.title}</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{userData.eventDetails.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{userData.eventDetails.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{userData.eventDetails.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h5 className="font-medium text-gray-800 mb-2">Thème de la soirée</h5>
                      <p className="text-sm text-gray-600 mb-4">{userData.eventDetails.theme}</p>
                      
                      <h5 className="font-medium text-gray-800 mb-2">Adresse complète</h5>
                      <p className="text-sm text-gray-600">{userData.eventDetails.address}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <Video className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Rejoindre la visio</h4>
                    <p className="text-sm text-gray-600 mb-4">Accédez à la visioconférence intégrée</p>
                    <button 
                      onClick={() => {
                        setUserName(userData.name);
                        handleJoinCall();
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Rejoindre maintenant →
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <FileText className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Ressources</h4>
                    <p className="text-sm text-gray-600 mb-4">Guides, recettes et templates</p>
                    <button 
                      onClick={() => setActiveTab('resources')}
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      Accéder →
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">Communauté</h4>
                    <p className="text-sm text-gray-600 mb-4">Échangez avec les autres participants</p>
                    <button 
                      onClick={() => setActiveTab('community')}
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      Participer →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                    <FileText className="w-6 h-6 text-orange-600" />
                    <span>Ressources et informations</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.map((resource, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <resource.icon className="w-6 h-6 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-2">{resource.title}</h4>
                            <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {resource.type}
                              </span>
                              <button className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 font-medium text-sm">
                                <Download className="w-4 h-4" />
                                <span>Télécharger</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Tips */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">💡 Conseils pour une participation réussie</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Avant l'événement</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Testez votre connexion internet</li>
                        <li>• Préparez votre présentation (si applicable)</li>
                        <li>• Lisez le guide de préparation</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Pendant l'événement</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Activez votre caméra pour plus d'interaction</li>
                        <li>• Utilisez le chat pour poser des questions</li>
                        <li>• Profitez des pauses pour networker</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6 text-orange-600" />
                    <span>Espace communauté</span>
                  </h3>
                  
                  {/* Message Input */}
                  <div className="mb-8">
                    <div className="flex space-x-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-medium text-sm">
                          {userData.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <textarea
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Partagez vos idées, posez vos questions..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                          rows={3}
                        />
                        <div className="flex justify-end mt-2">
                          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                            Publier
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="space-y-6">
                    {communityMessages.length === 0 ? (
                      <div className="text-center py-12">
                        <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h4 className="text-lg font-medium text-gray-500 mb-2">Aucun message pour le moment</h4>
                        <p className="text-gray-400">Soyez le premier à partager vos idées avec la communauté !</p>
                      </div>
                    ) : (
                      communityMessages.map((message) => (
                        <div key={message.id} className="flex space-x-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-gray-600 font-medium text-sm">{message.avatar}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-gray-800">{message.author}</span>
                              <span className="text-xs text-gray-500">{message.time}</span>
                            </div>
                            <p className="text-gray-700">{message.message}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                    <Phone className="w-6 h-6 text-orange-600" />
                    <span>Support et assistance</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4">Contacts d'urgence</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium text-gray-800">Support technique</p>
                            <p className="text-sm text-gray-600">+33 6 12 34 56 78</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-gray-800">Email support</p>
                            <p className="text-sm text-gray-600">support@aperi-tigcre.fr</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4">FAQ Rapide</h4>
                      <div className="space-y-3">
                        <details className="group">
                          <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-orange-600">
                            Comment rejoindre la visioconférence ?
                          </summary>
                          <p className="mt-2 text-sm text-gray-600 pl-4">
                            Cliquez sur le bouton "Rejoindre la visio" en haut de page et entrez votre nom.
                          </p>
                        </details>
                        <details className="group">
                          <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-orange-600">
                            Problème de connexion ?
                          </summary>
                          <p className="mt-2 text-sm text-gray-600 pl-4">
                            Vérifiez votre connexion internet et contactez le support technique.
                          </p>
                        </details>
                        <details className="group">
                          <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-orange-600">
                            Comment présenter mon projet ?
                          </summary>
                          <p className="mt-2 text-sm text-gray-600 pl-4">
                            Consultez le template de présentation dans la section Ressources.
                          </p>
                        </details>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}