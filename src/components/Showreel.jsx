import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';
import gsap from 'gsap';
import './Showreel.css';
import heroBg from '../assets/hero_bg.jpg';

const Showreel = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  const visualsRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const playShowreel = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
    
    // Simulate cinematic visual transitions
    const tl = gsap.timeline();
    tl.to('.showreel-play-overlay', { opacity: 0, duration: 0.5, display: 'none' })
      .fromTo('.showreel-visual-img', 
        { scale: 1.2, filter: 'blur(10px)' }, 
        { scale: 1, filter: 'blur(0px)', duration: 4, ease: 'power2.out' }
      );
  };

  // Parallax on scroll
  useEffect(() => {
    gsap.to(visualsRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <section id="showreel" className="showreel" ref={sectionRef}>
      <div className="container">
        <div className="showreel-wrapper glass-panel">
          <div className="showreel-visuals" ref={visualsRef}>
            {/* Placeholder for video file */}
            <img src={heroBg} alt="Showreel Scene" className="showreel-visual-img" />
            <div className="showreel-overlay"></div>
          </div>
          
          <div className="showreel-content">
            <h2 className="showreel-title">Digital Evolution <br/>in Motion.</h2>
            <p className="showreel-desc">Witness how we transform brands through high-end digital marketing architectures.</p>
            
            <div className="showreel-controls">
              <button className="btn-icon" onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>
          </div>

          {!isPlaying && (
            <div className="showreel-play-overlay">
              <button className="play-btn" onClick={playShowreel}>
                <Play size={40} fill="currentColor" />
              </button>
            </div>
          )}

          {/* ElevenLabs Audio Placeholder */}
          <audio ref={audioRef} muted={isMuted} loop>
            <source src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
