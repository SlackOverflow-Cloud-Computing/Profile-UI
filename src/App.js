import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Header */}
        <h1 className="main-title">
          Subwoofer - a Music Discovery Platform
        </h1>
        <div className="section-container">
          <h2 className="section-title">What is Subwoofer?</h2>
          <p className="text-content">
            Subwoofer is an innovative music platform that enhances your Spotify experience
            by providing personalized song recommendations and playlist management.
            We combine the power of Spotify's vast music library with advanced algorithms
            to help you discover music you'll love.
          </p>
        </div>
        {/* Technology Stack */}
        <div className="section-container">
          <h2 className="section-title">Technology Stack</h2>
          <div className="grid-container grid-3-cols">
            {/* Frontend */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Frontend</h3>
              </div>
              <ul className="tech-list">
                {['React.js', 'React Router', 'CSS3', 'Spotify Web API'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Backend</h3>
              </div>
              <ul className="tech-list">
                {['Python', 'FastAPI', 'MySQL', 'JWT Authentication'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* DevOps */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">DevOps</h3>
              </div>
              <ul className="tech-list">
                {['Docker', 'GitHub Actions', 'AWS', 'Microservices Architecture'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="section-container">
          <h2 className="section-title">Key Features</h2>
          <div className="grid-container grid-2-cols">
            {[
              {
                icon: "🎵",
                title: "Music Discovery",
                description: "Explore new artists and genres with our intelligent recommendation engine"
              },
              {
                icon: "📝",
                title: "Playlist Management",
                description: "Create, edit, and sync playlists between Subwoofer and Spotify"
              },
              {
                icon: "🔍",
                title: "Personalized Recommendations",
                description: "Intelligent song recommendations based on user preferences and listening history"
              },
              {
                icon: "🔒",
                title: "Spotify Authentication",
                description: "Seamlessly connect with your Spotify account to access all your favorite music."
              }
            ].map((feature) => (
              <div key={feature.title} className="card">
                <div className="card-header">
                  <span className="card-icon">{feature.icon}</span>
                  <h3 className="card-title">{feature.title}</h3>
                </div>
                <p className="text-content">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Team */}
        <div className="section-container">
          <h2 className="section-title centered">Development Team</h2>
          <div className="grid-container grid-3-cols">
            {[
              { icon: "🤖", role: "Chatbot Microservice", name: "Yunqing Qiu", id: "yq2374" },
              { icon: "🎵", role: "Playlist Microservice", name: "Yixuan Sun", id: "ys3745" },
              { icon: "🎼", role: "Songs & Integration", name: "Xinyi Zhao", id: "xz3274" },
              { icon: "🔐", role: "Authentication & User Login", name: "Alex Racapé", id: "abr2184" },
              { icon: "💾", role: "Database", name: "Chenxin Shen", id: "cs4349" },
              { icon: "🎯", role: "Chatbot & Recommendation", name: "Luke Tingley", id: "lt2985" },
              { icon: "🎨", role: "Frontend", name: "Tsz Yat Wong", id: "tw3047" }
            ].map((member) => (
              <div key={member.id} className="card">
                <div className="card-header">
                  <span className="card-icon">{member.icon}</span>
                  <h3 className="card-title">{member.role}</h3>
                </div>
                <p className="text-content">{member.name}</p>
                <p className="member-id">{member.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;