"use client";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Home() {
  const [confetti, setConfetti] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Handle window size for confetti
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Create confetti particles
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'][Math.floor(Math.random() * 6)],
        delay: Math.random() * 3
      });
    }
    setConfetti(particles);
    
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center relative overflow-hidden">
      {/* React Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
          colors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#FFD700', '#FF1493']}
        />
      )}
      
      {/* Your existing confetti particles */}
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full animate-bounce"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: '2s',
            animationIterationCount: 'infinite'
          }}
        />
      ))}

      {/* Main Content */}
      <div className="text-center z-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-12 shadow-2xl">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
            🎉 Happy Birthday ji! 🎉
          </h1>
          <h2 className="text-4xl font-semibold text-yellow-200 mb-6">
            harkirat singh
          </h2>
        </div>

        <div className="space-y-4 text-white text-xl">
          <p className="animate-bounce">🎂 Wishing you a fantastic day! 🎂</p>
          <p className="animate-pulse">🎈 May all your dreams come true! 🎈</p>
          <p className="animate-bounce">🎁 Hope your special day is wonderful! 🎁</p>
        </div>

        <div className="mt-8 text-6xl animate-spin">
          🎊
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <span className="text-4xl animate-bounce">🎵</span>
          <span className="text-4xl animate-pulse">🎶</span>
          <span className="text-4xl animate-bounce">🎵</span>
        </div>
      </div>

      {/* Floating balloons */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce">🎈</div>
      <div className="absolute top-20 right-20 text-6xl animate-pulse">🎈</div>
      <div className="absolute bottom-20 left-20 text-6xl animate-bounce">🎈</div>
      <div className="absolute bottom-10 right-10 text-6xl animate-pulse">🎈</div>

      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
