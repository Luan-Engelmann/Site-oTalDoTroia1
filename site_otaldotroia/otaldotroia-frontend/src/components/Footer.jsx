import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaDiscord, FaTiktok } from 'react-icons/fa';

const FooterDark = styled.footer`
    background-color: var(--color-dark);
    padding: 40px 5%;
    text-align: center;
    border-top: 1px solid var(--color-medium-dark);
`;

const SocialIcons = styled.div`
    margin-bottom: 20px;

    a {
        color: var(--color-text);
        font-size: 1.8rem;
        margin: 0 15px;
        transition: color 0.3s ease, transform 0.3s ease;

        &:hover {
            color: var(--color-blue);
            transform: scale(1.1) translateY(-2px);
            filter: drop-shadow(0 0 8px var(--color-blue));
        }
    }
`;

const Copyright = styled.p`
    font-size: 0.9rem;
    color: #888;
`;

const Footer = () => (
    <FooterDark>
        <SocialIcons>
            {/* O Instagram que você pediu já está aqui */}
            <a 
                href="https://www.instagram.com/otaldotroiaoficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>

            {/* Ajuste o link do convite do seu Discord aqui */}
            <a 
                href="https://discord.gg/ZY9kn4TkXK" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Discord"
            >
                <FaDiscord />
            </a>

            {/* Ajuste o @ do seu TikTok aqui */}
            <a 
                href="https://www.tiktok.com/@otaldotroia" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok"
            >
                <FaTiktok />
            </a>
        </SocialIcons>

        <Copyright>
            &copy; {new Date().getFullYear()} oTalDoTroia. Todos os direitos reservados.
        </Copyright>
    </FooterDark>
);

export default Footer;