import React, { useState, useEffect } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Email:", email, "Password:", password);
    setIsSubmitting(false);
  };

  return (
    <div className={`login-container ${isLoaded ? 'loaded' : ''}`}>
      {/* Animated Background */}
      <div className="background-animation">
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`shape shape-${i + 1}`}
              style={{
                transform: `translate(${mousePosition.x * (10 + i * 2)}px, ${mousePosition.y * (10 + i * 2)}px)`
              }}
            />
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        {/* Particle System */}
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 16}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Login Box */}
      <div className="login-box animate-fade-in">
        <div className="login-header">
          <h2 className="animate-slide-down">
            <span className="welcome-text">Welcome to</span>
            <span className="brand-text">Upscale</span>
            <span className="magic-icon">✨</span>
          </h2>
          <p className="subtitle animate-slide-down-delay">Transform your images with AI magic</p>
        </div>

        <div className="login-form">
          {/* Email Input */}
          <div className="input-group animate-slide-left">
            <label htmlFor="email" className="input-label">
              <span className="label-text">Email Address</span>
              <span className="label-icon">📧</span>
            </label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
              <div className="input-underline"></div>
            </div>
          </div>

          {/* Password Input */}
          <div className="input-group animate-slide-right">
            <label htmlFor="password" className="input-label">
              <span className="label-text">Password</span>
              <span className="label-icon">🔒</span>
            </label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
              <div className="input-underline"></div>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="form-options animate-fade-in-up">
            <label className="checkbox-wrapper">
              <input type="checkbox" className="checkbox" />
              <span className="checkmark"></span>
              <span className="checkbox-label">Remember me</span>
            </label>
            <a href="#forgot" className="forgot-link">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className={`login-btn animate-scale-up ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            <span className="btn-text">
              {isSubmitting ? 'Logging in...' : 'Login'}
            </span>
            <span className="btn-icon">
              {isSubmitting ? '⏳' : '🚀'}
            </span>
            <div className="btn-ripple"></div>
            <div className="btn-glow"></div>
          </button>
        </div>

        {/* Social Login */}
        <div className="social-login animate-fade-in-delay">
          <div className="divider">
            <span>or continue with</span>
          </div>
          <div className="social-buttons">
            <button className="social-btn google-btn">
              <span className="social-icon">🌐</span>
              <span>Google</span>
            </button>
            <button className="social-btn github-btn">
              <span className="social-icon">👨‍💻</span>
              <span>GitHub</span>
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="signup-text animate-fade-in-delay">
          Don't have an account? 
          <a href="#signup" className="signup-link">
            <span>Create one</span>
            <span className="link-arrow">→</span>
          </a>
        </p>
      </div>

      
    </div>
  );
}

export default Login;