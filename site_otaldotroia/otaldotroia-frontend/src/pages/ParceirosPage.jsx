import React from 'react';
import styled from 'styled-components';
import { FaHandshake, FaExternalLinkAlt } from 'react-icons/fa';

const parceirosList = [
  {
    id: 1,
    name: "No Ping",
    role: "Parceiro/Afiliado",
    description: "Jogue com ate 80% menos LAG usando o NoPing! Teste gratis por 1 dia.",
    image: "/noping.png",
    link: "https://nopi.ng/otaldotroia",
    color: "#46ff65"
  },
  {
    id: 2,
    name: "Sixx Suporte Digital",
    role: "Parceiro",
    description: "IPTV's com preços justos",
    image: "/sixx.png",
    link: "https://wa.me/5551980489574",
    color: "#7e0909",
    specialZoom: true // Ativa o zoom manual para este card
  }
];

const ParceirosPage = () => {
  return (
    <Container>
      <HeaderSection>
        <FaHandshake className="icon-header" />
        <Title>Nossos <span>Parceiros</span></Title>
        <Subtitle>Quem fortalece o projeto e caminha junto com a gente na jornada gamer.</Subtitle>
      </HeaderSection>

      <GridParceiros>
        {parceirosList.map((parceiro) => (
          <CardParceiro key={parceiro.id} $glowColor={parceiro.color}>
            <div className="image-container">
              {/* Aplicando a classe condicionalmente */}
              <img 
                src={parceiro.image} 
                alt={parceiro.name} 
                className={parceiro.specialZoom ? 'special-img' : ''} 
              />
              <span className="badge">{parceiro.role}</span>
            </div>
            
            <div className="content">
              <h3>{parceiro.name}</h3>
              <p>{parceiro.description}</p>
              <a href={parceiro.link} target="_blank" rel="noopener noreferrer" className="btn-link">
                Conhecer Parceiro <FaExternalLinkAlt />
              </a>
            </div>
          </CardParceiro>
        ))}
      </GridParceiros>
    </Container>
  );
};

// --- ESTILOS ---
const Container = styled.div` background: #00050a; min-height: 100vh; padding: 120px 5% 80px; color: #fff; `;
const HeaderSection = styled.div` text-align: center; margin-bottom: 60px; .icon-header { font-size: 3.5rem; color: #00CCFF; margin-bottom: 20px; } `;
const Title = styled.h1` font-size: clamp(2.5rem, 8vw, 4rem); font-weight: 900; text-transform: uppercase; span { color: transparent; -webkit-text-stroke: 1px #fff; opacity: 0.7; } `;
const Subtitle = styled.p` color: #888; max-width: 600px; margin: 15px auto; line-height: 1.6; `;
const GridParceiros = styled.div` display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; max-width: 1200px; margin: 0 auto; `;

const CardParceiro = styled.div` 
  background: rgba(255, 255, 255, 0.03); 
  border: 1px solid rgba(255, 255, 255, 0.05); 
  border-radius: 20px; 
  overflow: hidden; 
  transition: 0.4s; 

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.$glowColor};
    box-shadow: 0 10px 30px -10px ${props => props.$glowColor}66;
  }

  .image-container { 
    height: 180px; 
    position: relative; 
    background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.4) 100%);
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding: 30px; 
    overflow: hidden;

    img { 
      width: auto; 
      height: auto; 
      max-width: 80%; 
      max-height: 70%; 
      object-fit: contain;
      transition: 0.5s;
      filter: drop-shadow(0 0 15px rgba(0,0,0,0.5));
      
      /* ESTILO FORÇADO PARA A SIXX */
      &.special-img {
        max-width: 150%; 
        max-height: 130%; 
        transform: scale(1.7); /* Aumenta o tamanho real do logo na tela */
        
        &:hover {
          transform: scale(1.9); /* Efeito de hover maior para ela */
        }
      }
    } 

    .badge { 
      position: absolute; 
      bottom: 15px; 
      left: 15px; 
      background: ${props => props.$glowColor || '#00CCFF'}; 
      color: #000; 
      padding: 4px 12px; 
      border-radius: 6px; 
      font-size: 0.7rem; 
      font-weight: 800; 
      z-index: 5;
    } 
  } 

  .content { 
    padding: 25px; 
    h3 { font-size: 1.5rem; margin-bottom: 12px; } 
    p { color: #888; font-size: 0.95rem; margin-bottom: 25px; min-height: 70px; } 
  } 

  .btn-link { 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 10px; 
    background: rgba(255, 255, 255, 0.05); 
    color: #fff; 
    text-decoration: none; 
    padding: 12px; 
    border-radius: 12px; 
    font-weight: 600; 
    border: 1px solid rgba(255, 255, 255, 0.1); 
    &:hover { background: #fff; color: #000; } 
  } 
`;

export default ParceirosPage;