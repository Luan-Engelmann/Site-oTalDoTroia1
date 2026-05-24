import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

// PÁGINAS
import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage'; 
import ConteudosPage from './pages/ConteudoPage';
import ParceirosPage from './pages/ParceirosPage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage'; // <-- IMPORTANTE CRIAR ESTE ARQUIVO

const MainContent = styled.main`
    min-height: 100vh;
`;

const STATIC_DATA_FALLBACK = {
    youtube: "https://www.youtube.com/@oTalDoTroia", 
    twitch: "https://www.twitch.tv/otaldotroia", 
    kick: "https://kick.com/otaldotroia", 
    social: { 
        instagram: "https://www.instagram.com/otaldotroiaoficial",  
        discord: "https://discord.com/invite/ZY9kn4TkXK", 
        tiktok: "https://www.tiktok.com/@otaldotroia" 
    }
};

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8002/api/v1/info')
      .then(res => res.json())
      .then(fetched => { setData(fetched); setLoading(false); })
      .catch(() => { setData(STATIC_DATA_FALLBACK); setLoading(false); });
  }, []);

  if (loading) return null;

  const channelLinks = data || STATIC_DATA_FALLBACK; 

  return (
    <>
      <GlobalStyles />
      <Header /> 
      <MainContent> 
        <Routes>
          <Route path="/" element={<HomePage channelLinks={channelLinks} />} /> 
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/conteudo" element={<ConteudosPage />} />
          <Route path="/parceiros" element={<ParceirosPage />} />
          
          {/* ROTAS DO BLOG */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} /> {/* <-- ROTA DINÂMICA */}
          
        </Routes>
      </MainContent>
      <Footer socialLinks={channelLinks.social} />
    </>
  );
}

export default App;