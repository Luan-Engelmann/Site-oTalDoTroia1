import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
`;

const LiveContainer = styled.section`
    padding: 60px 5%;
    background-color: var(--color-medium-dark);
    text-align: center;
    border-top: 5px solid var(--color-purple);
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--color-text);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LiveDot = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    background-color: #FF0000;
    border-radius: 50%;
    margin-left: 10px;
    box-shadow: 0 0 10px #FF0000;
    animation: ${pulse} 1.5s infinite;
`;

const HighlightText = styled.p`
    font-size: 1.2rem;
    color: var(--color-purple);
    margin-bottom: 30px;
`;

const LiveEmbedContainer = styled.div`
    position: relative;
    padding-bottom: 50%;
    height: 0;
    overflow: hidden;
    max-width: 700px x 700px;
    margin: 0 auto;
    background: var(--color-dark);
    border: 3px solid var(--color-purple);
    box-shadow: 0 0 20px rgba(153, 0, 255, 0.6);

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }
`;

const LiveSection = ({ liveChannel = "Twitch" }) => {
    
    // Configurações de embed estáticas/padrão
    const channelMap = {
        "Twitch": { url: "https://player.twitch.tv/?channel=otaldotroia&parent=", name: "Twitch", channelName: "oTalDoTroia" },
        "YouTube": { url: "https://www.youtube.com/embed/LIVE_ID_YOUTUBE?autoplay=1", name: "YouTube", channelName: "oTalDoTroia" }, 
        "Kick": { url: "https://player.kick.com/?stream=oTalDoTroiaKick&autoplay=true", name: "Kick", channelName: "oTalDoTroiaKick" }
    };

    const activeChannel = channelMap[liveChannel] || channelMap["Twitch"];
    const parent = window.location.hostname || 'localhost';

    // Para Twitch, precisamos passar o parâmetro 'parent' para segurança
    const embedSrc = activeChannel.name === 'Twitch' 
        ? `${activeChannel.url}${parent}`
        : activeChannel.url;


    return (
        <LiveContainer>
            <SectionTitle>
                AO VIVO AGORA <LiveDot />
            </SectionTitle>
            <HighlightText>
                Assista à transmissão ativa no {activeChannel.name}!
            </HighlightText>
            <LiveEmbedContainer>
                <iframe
                    src={embedSrc}
                    title={`Live Stream do oTalDoTroia no ${activeChannel.name}`}
                    allowFullScreen={true}
                    allow="autoplay; encrypted-media"
                />
            </LiveEmbedContainer>
        </LiveContainer>
    );
};

export default LiveSection;