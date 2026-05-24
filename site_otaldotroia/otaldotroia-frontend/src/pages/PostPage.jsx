import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { blogPosts } from './BlogData'; // Importamos os mesmos dados
import { FaArrowLeft } from 'react-icons/fa';

const PostPage = () => {
  const { slug } = useParams(); // Pega o final da URL (ex: minecraft-1-21)
  
  // Procura no nosso "Banco de Dados" qual post tem esse link
  const post = blogPosts.find(p => p.link.includes(slug));

  if (!post) return <div style={{paddingTop: '200px', color: '#fff', textAlign: 'center'}}>Matéria não encontrada!</div>;

  return (
    <Container>
      <Link to="/blog" className="back-link"><FaArrowLeft /> Voltar para o Blog</Link>
      
      <Hero style={{ backgroundImage: `linear-gradient(to bottom, transparent, #00050a), url(${post.image})` }}>
        <div className="info">
          <span className="tag" style={{ background: post.color }}>{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.date}</p>
        </div>
      </Hero>

      <Content>
        {/* Aqui entraria o texto completo da matéria */}
        <p>{post.excerpt}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p><strong>Em breve traremos a cobertura completa aqui no canal!</strong></p>
      </Content>
    </Container>
  );
};

// --- ESTILOS ---
const Container = styled.div`
  background: #00050a; min-height: 100vh; padding-bottom: 80px; color: #fff;
  .back-link { position: absolute; top: 120px; left: 5%; z-index: 10; color: #00CCFF; text-decoration: none; display: flex; align-items: center; gap: 10px; }
`;

const Hero = styled.div`
  height: 70vh; background-size: cover; background-position: center;
  display: flex; align-items: flex-end; padding: 0 5% 50px;
  .info { max-width: 800px; .tag { padding: 5px 15px; border-radius: 4px; font-weight: bold; } h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin: 20px 0; } }
`;

const Content = styled.article`
  max-width: 800px; margin: 40px auto; padding: 0 20px; line-height: 1.8; font-size: 1.2rem; color: #ccc;
  p { margin-bottom: 25px; }
`;

export default PostPage;