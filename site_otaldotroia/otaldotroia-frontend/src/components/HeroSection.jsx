import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaYoutube, FaTwitch } from 'react-icons/fa';
import { FaKickstarterK } from 'react-icons/fa6'; 

const moveGradient = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const HeroContainer = styled.section`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5%;
    
    background: linear-gradient(-45deg, var(--color-purple), var(--color-dark), var(--color-blue));
    background-size: 400% 400%;
    animation: ${moveGradient} 15s ease infinite;
    position: relative;
    overflow: hidden;
`;

const fadeIn = keyframes`
    to { opacity: 1; transform: translateY(0); }
`;

const HeroContent = styled.div`
    max-width: 700px;
    z-index: 10;
    
    opacity: 0;
    animation: ${fadeIn} 1s ease forwards 0.5s;
    transform: translateY(20px);
`;

const BrandLogo = styled.img`
    width: clamp(100px, 15vw, 180px);
    height: auto;
    margin: 0 auto 20px; 
    border-radius: 50%;
    border: 5px solid var(--color-blue);
    box-shadow: 0 0 25px rgba(0, 204, 255, 0.9);
    object-fit: cover;
`;

const Title = styled.h1`
    font-size: clamp(2rem, 8vw, 5rem);
    color: var(--color-text);
    margin-bottom: 5px;
    letter-spacing: 2px;
`;

const Subtitle = styled.p`
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: var(--color-blue);
    font-weight: 600;
    margin-bottom: 20px;
`;

const IntroText = styled.p`
    font-size: 1.1rem;
    margin-bottom: 40px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`;

const ChannelLinks = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const ChannelButton = styled.a`
    display: flex;
    align-items: center;
    padding: 12px 25px;
    border-radius: 8px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.3s ease;
    border: 2px solid;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: black;
    text-decoration: none;

    i, svg {
        margin-right: 8px;
        font-size: 1.2rem;
    }
    
    &:hover {
        transform: scale(1.05) translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
    }

    &.youtube {
        background-color: #FF0000;
        border-color: #FF0000;
        &:hover {
            background-color: #e60000;
            box-shadow: 0 8px 20px rgba(255, 0, 0, 0.5);
        }
    }
    
    &.twitch {
        background-color: #9146FF;
        border-color: #9146FF;
        &:hover {
            background-color: #7934e6;
            box-shadow: 0 8px 20px rgba(145, 70, 255, 0.5);
        }
    }
    
    &.kick {
        background-color: #00FF00;
        border-color: #00FF00;
        color: var(--color-dark);
        &:hover {
            background-color: #00e600;
            box-shadow: 0 8px 20px rgba(0, 255, 0, 0.5);
        }
    }
`;

const HeroSection = () => (
    <HeroContainer id="canais">
        <HeroContent>
            <BrandLogo src="/logo_troia.jpeg" alt="LOGO PRINCIPAL OTALDOTROIA" />
            <Title>OTALDOTROIA</Title>
            <Subtitle>Onde o jogo nunca para</Subtitle>
            <IntroText>
                oTalDoTroia conecta você ao melhor do mundo gamer transmissões ao vivo, vídeos e momentos épicos em todas as plataformas.
            </IntroText>

            <ChannelLinks>
                {/* LINKS INSERIDOS AQUI! */}
                <ChannelButton href="https://www.youtube.com/@otaldotroia" className="youtube" target="_blank" rel="noopener noreferrer">
                    <FaYoutube /> YouTube
                </ChannelButton>
                <ChannelButton href="https://www.twitch.tv/otaldotroia" className="twitch" target="_blank" rel="noopener noreferrer">
                    <FaTwitch /> Twitch
                </ChannelButton>
                <ChannelButton href="https://kick.com/otaldotroia" className="kick" target="_blank" rel="noopener noreferrer">
                    <FaKickstarterK /> Kick
                </ChannelButton>
            </ChannelLinks>
        </HeroContent>
    </HeroContainer>
);

export default HeroSection;