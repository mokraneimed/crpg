import { useState } from 'react';
import './App.css';

// 1. IMPORT YOUR LOCAL IMAGES HERE
import shockedImg from './assets/wrong.jpeg'; 
import happyImg from './assets/correct.jpeg';

function App() {
  // Track which question we are on (0, 1, or 2)
  const [currentStep, setCurrentStep] = useState(0);
  
  // Track if she just clicked the wrong answer (to show the angry image)
  const [isWrong, setIsWrong] = useState(false);

  // Array of questions so it's easy to edit or add more later!
  const questions = [
    {
      question: "chkon li ychtiha imedha bzaaaaaaaaaaaaaaaaaaaaaf ?",
      wrongText: "MKANCH WHDOKHRA !!!!",
      correctBtn: "Hananou ❤️", // "Of course"
      wrongBtn: "W7dokhra"
    },
    {
      question: "chkon li tw7chha imedha ?",
      wrongText: "hhh matkdbich! 🤨",
      correctBtn: "3aynih ❤️", // "Of course"
      wrongBtn: "messi"
    },
    {
      question: "chkon ajmal w afdal w arwa3 whda f dnya ?",
      wrongText: "Kifaah?! 3awdi khammi mli7! 😡",
      correctBtn: "nti ❤️", // "You"
      wrongBtn: "mch nti" // "Someone else"
    }
  ];

  // If the current step is equal to the length of our questions, she won!
  const isFinished = currentStep >= questions.length;

  // When she clicks the correct answer
  const handleCorrect = () => {
    setIsWrong(false); // Reset wrong state
    setCurrentStep(prev => prev + 1); // Move to the next question
  };

  // When she clicks the wrong answer
  const handleWrong = () => {
    setIsWrong(true); // Trigger the angry face and wrong text
  };

  return (
    <div className={`container ${isFinished ? 'pink-bg' : ''}`}>
      
      {/* Animation elements for the Final 'Yes' state */}
      {isFinished && (
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
          {/* Show normal question if not finished and not wrong */}
          {!isFinished && !isWrong && questions[currentStep].question}
          
          {/* Show angry text if she clicked wrong */}
          {!isFinished && isWrong && questions[currentStep].wrongText}
          
          {/* Show final text if she finished all questions */}
          {isFinished && "Gelbi lghali ❤️"}
        </h1>

        {/* 2. USE THE IMPORTED VARIABLES IN THE SRC */}
        {!isFinished && isWrong && (
          <img src={shockedImg} alt="Shocked" className="main-image" />
        )}
        
        {isFinished && (
          <img src={happyImg} alt="Happy" className="main-image" />
        )}

        {/* Buttons (hide them if the game is finished) */}
        {!isFinished && (
          <div className="buttons">
            <button 
              className="yes-btn" 
              onClick={handleCorrect}
            >
              {questions[currentStep].correctBtn}
            </button>
            <button 
              className="no-btn" 
              onClick={handleWrong}
            >
              {questions[currentStep].wrongBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;