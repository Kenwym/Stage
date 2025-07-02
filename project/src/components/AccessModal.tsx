import React, { useState } from 'react';
import { X, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mapping des codes sous la forme MoisAnnee vers les eventId
const codeToEventId: Record<string, string> = {
  'Juillet2025': '2025-07',
  'Fevrier2025': '2025-02',
  'Septembre2025': '2025-09',
  'Octobre2025': '2025-10',
  'Novembre2024': '2024-11'
  // Ajoute ici tous les codes nécessaires
};

export default function AccessModal({ isOpen, onClose }: AccessModalProps) {
  const [accessCode, setAccessCode] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setError('');

    await new Promise(resolve => setTimeout(resolve, 800));

    // On normalise la casse pour éviter les erreurs de saisie
    const code = accessCode.trim().replace(/[\s-]/g, '').toLowerCase();
    // On cherche une correspondance insensible à la casse
    const foundKey = Object.keys(codeToEventId).find(
      k => k.toLowerCase() === code
    );

    if (foundKey) {
      // On stocke le code validé en localStorage
      localStorage.setItem('tigcre_access', foundKey);
      navigate(`/dashboard/${codeToEventId[foundKey]}`);
      onClose();
      return;
    }

    // Code de démo
    if (accessCode.trim().toUpperCase() === 'DEMO2025') {
      navigate(`/dashboard/2025-02/DEMO2025`);
      onClose();
      return;
    }

    setError('Code d\'accès invalide. Vérifiez votre email de confirmation.');
    setIsVerifying(false);
  };

  const resetModal = () => {
    setAccessCode('');
    setShowCode(false);
    setIsVerifying(false);
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Accès Inscrit</h2>
          <button
            onClick={resetModal}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-orange-600" />
          </div>
          <p className="text-gray-600">
            Entrez le code d'accès unique que vous avez reçu par email après votre inscription.<br />
            <span className="text-xs text-gray-500">Format attendu : <b>MoisAnnée</b> (ex : <b>Juillet2025</b>)</span>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700 mb-2">
              Code d'accès
            </label>
            <div className="relative">
              <input
                type={showCode ? 'text' : 'password'}
                id="accessCode"
                value={accessCode}
                onChange={(e) => {
                  setAccessCode(e.target.value);
                  setError('');
                }}
                className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-orange-500 transition-colors ${
                  error ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-orange-500'
                }`}
                placeholder="ex: Juillet2025"
                maxLength={20}
                required
              />
              <button
                type="button"
                onClick={() => setShowCode(!showCode)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showCode ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isVerifying || accessCode.length < 3}
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isVerifying ? 'Vérification...' : 'Accéder à mon espace'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Code perdu ? 
            <button className="text-orange-600 hover:text-orange-700 ml-1 font-medium">
              Renvoyer par email
            </button>
          </p>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600">
            <strong>Démo :</strong> Utilisez le code "DEMO2025" pour tester la fonctionnalité
          </p>
        </div>
      </div>
    </div>
  );
}