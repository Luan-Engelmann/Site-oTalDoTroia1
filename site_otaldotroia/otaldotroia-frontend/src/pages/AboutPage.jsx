import React from 'react';
import styled, { keyframes } from 'styled-components'; 
import { FaYoutube, FaTwitch, FaDiscord } from 'react-icons/fa';
import { FaKickstarterK } from 'react-icons/fa6';

// =================================================================
// 1. ANIMAÇÕES
// =================================================================

const subtleShine = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 204, 255, 0.3); }
  50% { box-shadow: 0 0 15px rgba(153, 0, 255, 0.5); }
  100% { box-shadow: 0 0 10px rgba(0, 204, 255, 0.3); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// =================================================================
// 2. COMPONENTES ESTILIZADOS
// =================================================================

/* CONTAINER PRINCIPAL */
const AboutContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-top: 0;
  animation: ${fadeIn} 0.8s ease-out;
  background: linear-gradient(160deg, var(--color-blue-dark, #000) 0%, var(--color-purple-dark, #0b3668) 100%);
`;

/* HEADER DA PÁGINA */
const PageHeader = styled.section`
  padding: 120px 5% 60px;
  text-align: center;
  border-bottom: 3px solid var(--color-purple);
  
  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    color: var(--color-text);
    margin-bottom: 10px;
  }
  
  p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: var(--color-blue);
    font-weight: 600;
  }
`;

/* INTRODUÇÃO / APRESENTAÇÃO */
const IntroSection = styled.section`
  padding: 80px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IntroLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid var(--color-blue);
  margin-bottom: 30px;
  animation: ${subtleShine} 4s infinite;
`;

const IntroText = styled.p`
  max-width: 800px;
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--color-text);
  opacity: 0.9;

  strong {
    color: var(--color-blue);
    font-weight: 600;
  }
`;

/* MISSÃO | VISÃO | VALORES */
const MVVSection = styled.section`
  padding: 80px 5%;
  text-align: center;
  
  h2 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    margin-bottom: 50px;
    color: var(--color-text);
    font-family: var(--font-display);
  }
`;

const MVVGrid = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const MVVCard = styled.div`
  background: var(--color-dark);
  padding: 30px;
  border-radius: 10px;
  border: 2px solid var(--color-medium-dark);
  transition: 0.3s ease;
  
  h3 {
    font-size: 1.8rem;
    color: var(--color-blue);
    margin-bottom: 15px;
    font-family: var(--font-display);
  }
  
  p {
    font-size: 1.1rem;
    color: var(--color-text);
  }

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px var(--color-purple);
    border-color: var(--color-purple);
  }
`;

/* LINKS PARA AS REDES / PLATAFORMAS */
const CTASection = styled.section`
  padding: 100px 5%;
  text-align: center;
  border-top: 3px solid var(--color-blue);

  h2 {
    font-size: clamp(1.6rem, 4vw, 2.5rem);
    color: var(--color-text);
    margin-bottom: 40px;
    font-weight: 600;
  }
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
  border: 2px solid;
  font-size: 1rem;
  transition: 0.3s ease;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  color: white;

  svg {
    margin-right: 8px;
    font-size: 1.2rem;
  }
  
  &:hover {
    transform: scale(1.05) translateY(-3px);
  }

  &.youtube { background: #FF0000; border-color: #FF0000; }
  &.twitch { background: #9146FF; border-color: #9146FF; }
  &.kick { background: #00FF00; border-color: #00FF00; color: var(--color-dark); }
  &.discord { background: #5865F2; border-color: #5865F2; }
`;

// =================================================================
// 3. COMPONENTE PRINCIPAL
// =================================================================

const AboutPage = () => {
  const links = {
    youtube: "https://www.youtube.com/@oTalDoTroia",
    twitch: "https://www.twitch.tv/otaldotroia",
    kick: "https://kick.com/otaldotroia",
    discord: "https://discord.com/invite/ZY9kn4TkXK"
  };

  return (
    <AboutContainer>

      <PageHeader>
        <h1>SOBRE OTALDOTROIA</h1>
        <p>Conheça a história, a missão e o universo do oTalDoTroia.</p>
      </PageHeader>

      <IntroSection>
        <IntroLogo src="/public/logo_troia.jpeg" alt="oTalDoTroia Logo" />
        
        <IntroText>
          <strong>O oTalDoTroia é mais do que um canal — é um ponto de encontro.</strong>
          <br /><br />
          Nascido da paixão por games e da vontade de criar uma comunidade autêntica, este espaço é para quem vive o jogo de verdade.
          <br /><br />
          Aqui a zoeira é natural, o papo é leve e a energia é sempre real.
          <br /><br />
          Se você quer fazer parte de uma comunidade onde todo mundo joga junto,
          sente-se em casa. Bem-vindo.
        </IntroText>
      </IntroSection>

      <MVVSection>
        <h2>NOSSA FILOSOFIA</h2>

        <MVVGrid>
          <MVVCard>
            <h3>🎯 Missão</h3>
            <p>Criar conteúdo gamer com autenticidade, humor e proximidade.</p>
          </MVVCard>

          <MVVCard>
            <h3>🌎 Visão</h3>
            <p>Ser referência em entretenimento gamer independente no Brasil.</p>
          </MVVCard>

          <MVVCard>
            <h3>💥 Valores</h3>
            <p>Respeito, diversão, originalidade e comunidade.</p>
          </MVVCard>
        </MVVGrid>
      </MVVSection>

      <CTASection>
        <h2>Faça parte da comunidade — onde o jogo nunca para!</h2>

        <ChannelLinks>
          <ChannelButton href={links.twitch} target="_blank" className="twitch">
            <FaTwitch /> Twitch
          </ChannelButton>

          <ChannelButton href={links.youtube} target="_blank" className="youtube">
            <FaYoutube /> YouTube
          </ChannelButton>

          <ChannelButton href={links.kick} target="_blank" className="kick">
            <FaKickstarterK /> Kick
          </ChannelButton>

          <ChannelButton href={links.discord} target="_blank" className="discord">
            <FaDiscord /> Discord
          </ChannelButton>
        </ChannelLinks>
      </CTASection>

    </AboutContainer>
  );
};

export default AboutPage;
