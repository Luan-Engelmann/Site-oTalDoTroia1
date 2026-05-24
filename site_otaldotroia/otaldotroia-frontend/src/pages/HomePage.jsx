// src/pages/HomePage.jsx SIMPLIFICADO

import React from 'react';
// IMPORTAR OS COMPONENTES DE SEÇÃO
import HeroSection from '../components/HeroSection';
import LiveSection from '../components/LiveSection';

// Aceita o 'channelLinks' como prop
const HomePage = ({ channelLinks }) => {
    // Não precisa de useState, useEffect, ou lógica de loading aqui!

    if (!channelLinks) {
        // Fallback rápido caso a prop não tenha chegado (não deve acontecer)
        return null; 
    }

    return (
        <>
            <HeroSection channelLinks={channelLinks} />
            <LiveSection liveChannel={channelLinks.live_channel} />
            {/* Outras seções da Home */}
        </>
    );
};

export default HomePage;