import { useState, useEffect } from 'react';

function App() {
  const [kelimeler, setKelimeler] = useState(() => {
    const kayitliKelimeler = localStorage.getItem('tarihselKelimeler');
    return kayitliKelimeler ? JSON.parse(kayitliKelimeler) : [];
  });
  const [yeniKelime, setYeniKelime] = useState('');

  useEffect(() => {
    localStorage.setItem('tarihselKelimeler', JSON.stringify(kelimeler));
  }, [kelimeler]);

  const kelimeEkle = () => {
    if (yeniKelime !== '') {
      setKelimeler([...kelimeler, yeniKelime]);
      setYeniKelime('');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      padding: '40px 20px', 
      fontFamily: '"Georgia", "Times New Roman", serif', 
      backgroundColor: '#f4ebd8', 
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/old-wall.png")', 
      color: '#3e2723' 
    }}>
      
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: 'rgba(255, 255, 255, 0.4)', 
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        
        <h1 style={{ borderBottom: '2px solid #8d6e63', paddingBottom: '10px', textAlign: 'center' }}>
          📜 Tarihsel Kelimeler Sözlüğü
        </h1>
        
        <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
          <input 
            type="text" 
            value={yeniKelime} 
            onChange={(e) => setYeniKelime(e.target.value)} 
            placeholder="Örn: İaşe, Tımar, İltizam..."
            style={{ 
              flex: 1, 
              padding: '12px', 
              fontSize: '16px', 
              border: '1px solid #4e342e',
              borderRadius: '4px',
              backgroundColor: '#1c1c1c', /* Arka planı siyah yaptık */
              color: '#ffffff', /* Yazı rengini beyaz yaptık */
              fontFamily: '"Georgia", serif'
            }}
          />
          <button onClick={kelimeEkle} style={{ 
            padding: '12px 20px', 
            backgroundColor: '#5d4037', 
            color: '#f4ebd8', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>
            Hafızaya Kazı
          </button>
        </div>

        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {kelimeler.map((kelime, index) => (
            <li key={index} style={{ 
              padding: '12px 15px', 
              margin: '8px 0', 
              backgroundColor: '#efebe3', 
              borderLeft: '4px solid #8d6e63',
              fontSize: '18px',
              borderRadius: '3px',
              color: '#3e2723' /* Eklenen kelimelerin rengini koyu kahvede sabitledik */
            }}>
              🖋️ {kelime}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;