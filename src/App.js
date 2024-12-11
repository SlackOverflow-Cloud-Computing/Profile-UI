import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="intro-container">
        <h1 className="main-title">Subwoofer - a Music Discovery Platform</h1>
        <div className="project-overview">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
              <div className="tech-item">
                <h4>Frontend</h4>
                <ul>
                  <li>React.js</li>
                  <li>React Router</li>
                  <li>CSS3</li>
                  <li>Spotify Web API</li>
                </ul>
              </div>

              <div className="tech-item">
                <h4>Backend</h4>
                <ul>
                  <li>Python</li>
                  <li>FastAPI</li>
                  <li>MySQL</li>
                  <li>JWT Authentication</li>
                </ul>
              </div>

              <div className="tech-item">
                <h4>DevOps</h4>
                <ul>
                  <li>Docker</li>
                  <li>GitHub Actions</li>
                  <li>AWS</li>
                  <li>Microservices Architecture</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="features-section">
            <h2>Key Features</h2>
            <div className="features-list">
              <div className="feature">
                <h4>🎵 Music Discovery</h4>
                <p>Intelligent song recommendations based on user preferences and listening history</p>
              </div>
              <div className="feature">
                <h4>📝 Playlist Management</h4>
                <p>Create, edit, and sync playlists between Subwoofer and Spotify</p>
              </div>
              <div className="feature">
                <h4>👤 User Profiles</h4>
                <p>Personalized user experiences with custom preferences and history</p>
              </div>
              <div className="feature">
                <h4>🔒 Secure Authentication</h4>
                <p>Safe and seamless login through Spotify OAuth integration</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>Development Team</h2>
            <div className="team-members">
              <div className="team-member">
                <h4>🤖 Chatbot Microservice</h4>
                <p>Yunqing Qiu (yq2374)</p>
              </div>
              <div className="team-member">
                <h4>🎵 Playlist Microservice</h4>
                <p>Yixuan Sun (ys3745)</p>
              </div>
              <div className="team-member">
                <h4>🎼 Songs & Integration</h4>
                <p>Xinyi Zhao (xz3274)</p>
              </div>
              <div className="team-member">
                <h4>🔐 Authentication & User Login</h4>
                <p>Alex Racapé (abr2184)</p>
              </div>
              <div className="team-member">
                <h4>💾 Database</h4>
                <p>Chenxin Shen (cs4349)</p>
              </div>
              <div className="team-member">
                <h4>🎯 Chatbot & Recommendation</h4>
                <p>Luke Tingley (lt2985)</p>
              </div>
              <div className="team-member">
                <h4>🎨 Frontend</h4>
                <p>Tsz Yat Wong (tw3047)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
