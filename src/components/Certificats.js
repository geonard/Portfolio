import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Certifications() {
  const [certifData, setcertifData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fonction pour récupérer les données de la certif
    const fetchcertifData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/faq'); //https://mspr1-back-kse4.onrender.com/faq
        setcertifData(response.data); // Enregistrer les données de la certif
        setLoading(false); // Changer l'état de chargement à faux
      } catch (err) {
        setError('Erreur lors du chargement des données certif');
        setLoading(false);
      }
    };

    fetchcertifData();
  }, []);

  if (loading) {
    return <div>Chargement des certif...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>certif du Festival Live Events</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {certifData.map((item, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#2c3e50' }}>{item.name}</h2>
            {/* Lien cliquable */}
            <p style={{ fontSize: '1rem', color: '#34495e' }}>
              <a 
                href={`./certifications/files/${item.link}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#3498db', textDecoration: 'none' }}
              >
                {item.link}
              </a>
            </p>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;
