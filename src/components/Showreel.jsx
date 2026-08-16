import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Showreel.css';
import showreelVideo from '../assets/Data_streams_moving_upwards_1080p_202608161024.mp4';

gsap.registerPlugin(ScrollTrigger);
const Showreel = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const visualsRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const playShowreel = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
    
    const tl = gsap.timeline();
    tl.to('.showreel-play-overlay', { opacity: 0, duration: 0.5, display: 'none' });
  };

  // Parallax on scroll
  useEffect(() => {
    const videoEl = videoRef.current;

    const ctx = gsap.context(() => {
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
    }, sectionRef);

    // Recalculate trigger positions once the video is ready
    const handleReady = () => ScrollTrigger.refresh();
    if (videoEl) {
      videoEl.addEventListener('loadedmetadata', handleReady);
      videoEl.addEventListener('loadeddata', handleReady);
    }

    return () => {
      if (videoEl) {
        videoEl.removeEventListener('loadedmetadata', handleReady);
        videoEl.removeEventListener('loadeddata', handleReady);
      }
      ctx.revert();
    };
  }, []);

  return (
    <section id="showreel" className="showreel" ref={sectionRef}>
      <div className="container">
        <div className="showreel-wrapper glass-panel">
          <div className="showreel-visuals" ref={visualsRef}>
            <video 
              ref={videoRef} 
              className="showreel-visual-img" 
              src={showreelVideo} 
              muted={isMuted} 
              loop 
              playsInline 
            />
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
        </div>
      </div>
    </section>
  );
};

export default Showreel;
