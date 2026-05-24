import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// =================================================================
// 1. ANIMAÇÕES (IGUAIS À PÁGINA SOBRE)
// =================================================================

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// =================================================================
// 2. COMPONENTES ESTILIZADOS DO BLOG (COM O VISUAL DO SOBRE)
// =================================================================

/* CONTAINER PRINCIPAL (Usa o gradiente escuro e fluido do Sobre) */
const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-top: 0;
  min-height: 100vh;
  animation: ${fadeIn} 0.8s ease-out;
  background: linear-gradient(160deg, var(--color-blue-dark, #000) 0%, var(--color-purple-dark, #0b3668) 100%);
  color: white;
  text-align: center;
`;

/* HEADER DO BLOG (Estilo idêntico ao cabeçalho do Sobre) */
const PageHeader = styled.section`
  padding: 120px 5% 40px;
  text-align: center;
  border-bottom: 3px solid var(--color-purple, #9900FF);
  
  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    color: var(--color-text, #fff);
    margin-bottom: 10px;
  }
  
  p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: var(--color-blue, #00CCFF);
    font-weight: 600;
  }
`;

/* ÁREA DE INTERAÇÃO (Centraliza filtros e botão de novo post) */
const ActionSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 5% 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FilterSection = styled.div`
  display: flex; 
  justify-content: center; 
  gap: 15px; 
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'var(--color-blue, #00CCFF)' : 'var(--color-dark, #0a0e14)'};
  color: ${props => props.active ? 'black' : 'white'};
  border: 2px solid var(--color-blue, #00CCFF); 
  padding: 8px 25px; 
  border-radius: 20px; 
  cursor: pointer; 
  font-weight: bold; 
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px var(--color-blue, #00CCFF);
  }
`;

const CreateButton = styled.button`
  background: var(--color-purple, #9900FF);
  color: white;
  border: 2px solid var(--color-purple, #9900FF);
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

  &:hover {
    transform: scale(1.05) translateY(-3px);
    box-shadow: 0 0 20px var(--color-purple, #9900FF);
  }
`;

/* GRID DE POSTAGENS */
const GridSection = styled.section`
  padding: 30px 5% 80px;
`;

const PostGrid = styled.div`
  display: grid; 
  max-width: 1200px; 
  margin: 0 auto; 
  gap: 30px; 
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  text-align: left;
`;

/* CARDS DAS NOTÍCIAS (Comportamento de hover idêntico ao MVVCard do Sobre) */
const PostCard = styled.div`
  background: var(--color-dark, #0a0e14);
  border-radius: 10px; 
  overflow: hidden; 
  border: 2px solid var(--color-medium-dark, #161b22); 
  cursor: pointer;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  
  .img-box { 
    height: 180px; 
    overflow: hidden; 
    border-bottom: 2px solid var(--color-medium-dark, #161b22);
  }
  
  img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    transition: 0.5s ease;
  }
  
  .info { 
    padding: 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .category { 
    color: var(--color-blue, #00CCFF); 
    font-size: 0.75rem; 
    font-weight: bold; 
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 1.4rem;
    color: var(--color-text, #fff);
    margin: 10px 0;
    line-height: 1.3;
  }

  p {
    font-size: 1rem;
    color: var(--color-text, #fff);
    opacity: 0.8;
    line-height: 1.5;
  }

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px var(--color-purple, #9900FF);
    border-color: var(--color-purple, #9900FF);
    
    img {
      transform: scale(1.05);
    }
  }
`;

/* OVERLAYS E MODAIS INTEGRADOS */
const ModalOverlay = styled.div`
  position: fixed; 
  inset: 0; 
  background: rgba(0, 0, 0, 0.85); 
  backdrop-filter: blur(8px);
  display: flex; 
  align-items: center; 
  justify-content: center; 
  z-index: 9999; 
  padding: 20px;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: var(--color-dark, #0a0e14); 
  width: 100%; 
  max-width: ${props => props.$large ? '750px' : '500px'}; 
  border-radius: 12px; 
  border: 2px solid var(--color-blue, #00CCFF); 
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 204, 255, 0.3);
  text-align: left;
`;

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
  
  label { 
    font-size: 0.9rem; 
    color: var(--color-blue, #00CCFF); 
    font-weight: 600; 
  }
  
  input, select, textarea {
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid var(--color-medium-dark, #161b22);
    color: white;
    padding: 10px;
    border-radius: 6px;
    font-family: inherit;
    font-size: 1rem;
    transition: 0.2s;
    
    &:focus {
      outline: none;
      border-color: var(--color-purple, #9900FF);
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid var(--color-medium-dark, #161b22);
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    border-color: #ff3b30;
    background: #ff3b30;
  }
`;

// =================================================================
// 3. COMPONENTE PRINCIPAL (COM TODAS AS SUAS REGRAS DE NEGÓCIO)
// =================================================================

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [activeFolder, setActiveFolder] = useState('Todas');
    
    const [newPost, setNewPost] = useState({
        title: '', main_category: 'Notícias', sub_category: 'Games', image: '', description: '', content: ''
    });

    useEffect(() => {
        fetch('http://localhost:8002/api/v1/posts')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setPosts(data);
                    setFilteredPosts(data);
                } else {
                    console.error("Backend não retornou uma lista:", data);
                    setPosts([]); setFilteredPosts([]);
                }
            })
            .catch(err => console.error("Erro na API:", err));
    }, []);

    useEffect(() => {
        if (!Array.isArray(posts)) return;

        if (activeFolder === 'Todas') {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter(p => {
                const normalize = (text) => 
                    (text || "").toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

                return normalize(p.main_category) === normalize(activeFolder);
            });
            setFilteredPosts(filtered);
        }
    }, [activeFolder, posts]);

    const handlePublish = async () => {
        const postData = { ...newPost, date: new Date().toLocaleDateString('pt-BR') };
        try {
            const response = await fetch('http://localhost:8002/api/v1/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });
            if (response.ok) {
                const result = await response.json();
                setPosts([result, ...(Array.isArray(posts) ? posts : [])]);
                setIsCreating(false);
                setNewPost({ title: '', main_category: 'Notícias', sub_category: 'Games', image: '', description: '', content: '' });
            }
        } catch (error) { alert("Erro ao conectar ao servidor."); }
    };

    return (
        <PageContainer>
            <PageHeader>
                <h1>TROIA NEWS</h1>
                <p>Notícias e Curiosidades</p>
            </PageHeader>

            <ActionSection>
                <FilterSection>
                    <FilterButton active={activeFolder === 'Todas'} onClick={() => setActiveFolder('Todas')}>Tudo</FilterButton>
                    <FilterButton active={activeFolder === 'Notícias'} onClick={() => setActiveFolder('Notícias')}>Notícias</FilterButton>
                    <FilterButton active={activeFolder === 'Curiosidades'} onClick={() => setActiveFolder('Curiosidades')}>Curiosidades</FilterButton>
                </FilterSection>

                <CreateButton onClick={() => setIsCreating(true)}>
                    + Nova Postagem
                </CreateButton>
            </ActionSection>

            <GridSection>
                <PostGrid>
                    {Array.isArray(filteredPosts) && filteredPosts.map((post, idx) => (
                        <PostCard key={idx} onClick={() => setSelectedPost(post)}>
                            <div className="img-box">
                                <img src={post.image || 'https://via.placeholder.com/400x200'} alt="post" />
                            </div>
                            <div className="info">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <span className="category">{post.main_category} / {post.sub_category}</span>
                                    <span style={{ fontSize: '0.7rem', color: '#666' }}>{post.date}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                            </div>
                        </PostCard>
                    ))}
                </PostGrid>
            </GridSection>

            {/* Modal de Criação */}
            {isCreating && (
                <ModalOverlay onClick={() => setIsCreating(false)}>
                    <ModalContent onClick={e => e.stopPropagation()} style={{padding: '30px'}}>
                        <h2 style={{color: 'var(--color-blue, #00CCFF)', marginBottom: '20px', fontSize: '1.8rem'}}>Nova Postagem</h2>
                        
                        <StyledFormGroup>
                            <label>Pasta Principal:</label>
                            <select value={newPost.main_category} onChange={e => setNewPost({...newPost, main_category: e.target.value})}>
                                <option value="Notícias">Notícias</option>
                                <option value="Curiosidades">Curiosidades</option>
                            </select>
                        </StyledFormGroup>

                        <StyledFormGroup>
                            <label>Subcategoria:</label>
                            <select value={newPost.sub_category} onChange={e => setNewPost({...newPost, sub_category: e.target.value})}>
                                <option value="Games">Games</option>
                                <option value="Séries">Séries</option>
                                <option value="Filmes">Filmes</option>
                            </select>
                        </StyledFormGroup>

                        <StyledFormGroup>
                            <label>Título</label>
                            <input placeholder="Título" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} />
                        </StyledFormGroup>

                        <StyledFormGroup>
                            <label>URL da Imagem</label>
                            <input placeholder="URL da Imagem" value={newPost.image} onChange={e => setNewPost({...newPost, image: e.target.value})} />
                        </StyledFormGroup>

                        <StyledFormGroup>
                            <label>Resumo</label>
                            <textarea placeholder="Resumo" rows="2" value={newPost.description} onChange={e => setNewPost({...newPost, description: e.target.value})} />
                        </StyledFormGroup>

                        <StyledFormGroup>
                            <label>Matéria Completa</label>
                            <textarea placeholder="Matéria Completa" rows="5" value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} />
                        </StyledFormGroup>

                        <div style={{display:'flex', justifyContent:'flex-end', gap:'10px', marginTop:'20px'}}>
                            <CloseButton type="button" onClick={() => setIsCreating(false)}>Cancelar</CloseButton>
                            <button style={{background:'var(--color-blue, #00CCFF)', color:'black', border: 'none', fontWeight:'bold', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer'}} onClick={handlePublish}>Publicar</button>
                        </div>
                    </ModalContent>
                </ModalOverlay>
            )}

            {/* VISUALIZAÇÃO DA NOTÍCIA */}
            {selectedPost && (
                <ModalOverlay onClick={() => setSelectedPost(null)}>
                    <ModalContent $large onClick={e => e.stopPropagation()}>
                        <img src={selectedPost.image} style={{width:'100%', maxHeight:'320px', objectFit:'cover', borderBottom: '2px solid var(--color-medium-dark, #161b22)'}} alt="banner" />
                        <div style={{padding:'30px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.8rem', marginBottom: '10px'}}>
                                <span style={{color: 'var(--color-blue, #00CCFF)', fontWeight: 'bold', textTransform: 'uppercase'}}>{selectedPost.main_category} / {selectedPost.sub_category}</span>
                                <span>{selectedPost.date}</span>
                            </div>
                            <h2 style={{fontSize: '2rem', color: '#fff', lineHeight: '1.3'}}>{selectedPost.title}</h2>
                            <p style={{marginTop: '20px', color: '#c9d1d9', fontSize: '1.05rem', lineHeight: '1.6', whiteSpace: 'pre-wrap'}}>{selectedPost.content || selectedPost.description}</p>
                            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '25px'}}>
                                <CloseButton onClick={() => setSelectedPost(null)}>Fechar</CloseButton>
                            </div>
                        </div>
                    </ModalContent>
                </ModalOverlay>
            )}
        </PageContainer>
    );
};

export default BlogPage;