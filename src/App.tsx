import { useState } from 'react';
import './App.css';

// 1. IMPORT YOUR LOCAL IMAGES HERE
// Make sure the file extensions (.png, .jpg, .gif) match your actual files!
import shockedImg from './assets/angry.jpeg'; 
import happyImg from './assets/happy.jpeg';

type LoveStatus = 'initial' | 'no' | 'yes';

function App() {
  const [status, setStatus] = useState<LoveStatus>('initial');

  return (
    <div className={`container ${status === 'yes' ? 'pink-bg' : ''}`}>
      {/* Animation elements for 'Yes' state */}
      {status === 'yes' && (
        <div className="animations">
          {[...Array(20)].map((_, i) => (
            <div 
              key={`heart-${i}`} 
              className="heart" 
              style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}
            >
              ❤️
            </div>
          ))}
          {[...Array(15)].map((_, i) => (
            <div 
              key={`flower-${i}`} 
              className="flower" 
              style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}
            >
              🌸
            </div>
          ))}
        </div>
      )}

      <div className="content">
        <h1>
          {status === 'initial' && "t7bini ?"}
          {status === 'no' && "kifaaaah?! Gtlk t7bini ?"}
          {status === 'yes' && "ana thani n7bk 3aynya ❤️"}
        </h1>

        {/* 2. USE THE IMPORTED VARIABLES IN THE SRC */}
        {status === 'no' && (
          <img src={shockedImg} alt="Shocked" className="main-image" />
        )}
        
        {status === 'yes' && (
          <img src={happyImg} alt="Happy" className="main-image" />
        )}

        {status !== 'yes' && (
          <div className="buttons">
            <button 
              className="yes-btn" 
              onClick={() => setStatus('yes')}
            >
              Yes
            </button>
            <button 
              className="no-btn" 
              onClick={() => setStatus('no')}
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;