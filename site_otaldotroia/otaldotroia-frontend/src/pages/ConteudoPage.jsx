import React, { useState } from 'react';
import styled from 'styled-components';
import { FaYoutube, FaPlayCircle, FaGamepad, FaVideo, FaBroadcastTower, FaLayerGroup, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { livesData, categoriesList } from './videosData';

// --- COMPONENTE DO VÍDEO (Lazy Loading Corrigido) ---
const VideoCard = ({ item }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Card>
      <div className="video-wrapper" onClick={() => setShowVideo(true)}>
        {!showVideo ? (
          <>
            {/* CORREÇÃO DA THUMBNAIL: Mudamos para hqdefault.jpg por padrão.
              Isso garante que vídeos que não são Full HD (como PUBG #3, Bedwars, 20XX e Red Dead) 
              carreguem a imagem instantaneamente sem falhar ou depender do evento onError.
            */}
            <img 
              src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} 
              alt={item.title}
              className="thumbnail"
              loading="lazy"
            />
            <div className="play-overlay"><FaPlayCircle /></div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0&showinfo=0`}
            title={item.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>
      <div className="info">
        <div className="meta">
          <span className="category-tag">{item.category}</span>
          {item.type && <span className="type-badge">{item.type}</span>}
        </div>
        <h3>{item.title}</h3>
      </div>
    </Card>
  );
};

const ConteudosPage = () => {
  const [filter, setFilter] = useState('Todos');
  const [typeFilter, setTypeFilter] = useState('Todos');
  const [sortOrder, setSortOrder] = useState('antigos'); 

  const handleTypeChange = (newType) => {
    setTypeFilter(newType);
    setFilter('Todos'); 
  };

  const dataByType = livesData.filter(item => {
    return typeFilter === 'Todos' || item.type === typeFilter;
  });

  const activeCategories = ['Todos', ...new Set(dataByType.map(item => item.category))];
  const categoriesToShow = categoriesList.filter(cat => activeCategories.includes(cat));

  const filteredData = dataByType.filter(item => {
    return filter === 'Todos' || item.category === filter;
  });

  const finalDataToRender = sortOrder === 'recentes' 
    ? [...filteredData].reverse() 
    : filteredData;

  return (
    <Container>
      <Title>Conteúdos</Title>
      <Subtitle>Explore lives, vídeos e campanhas completas em ordem cronológica 🎮.</Subtitle>

      <TypeSelector>
        <TypeBtn $active={typeFilter === 'Todos'} onClick={() => handleTypeChange('Todos')}>Todos</TypeBtn>
        <TypeBtn $active={typeFilter === 'Campanhas'} onClick={() => handleTypeChange('Campanhas')}><FaLayerGroup /> Campanhas</TypeBtn>
        <TypeBtn $active={typeFilter === 'Videos'} onClick={() => handleTypeChange('Videos')}><FaVideo /> Vídeos</TypeBtn>
        <TypeBtn $active={typeFilter === 'Lives'} onClick={() => handleTypeChange('Lives')}><FaBroadcastTower /> Lives</TypeBtn>
      </TypeSelector>

      <FilterBar>
        {categoriesToShow.map(cat => (
          <Tab 
            key={cat} 
            $active={filter === cat} 
            onClick={() => setFilter(cat)}
          >
            {cat === 'Todos' ? <FaYoutube /> : <FaGamepad />}
            {cat}
          </Tab>
        ))}
      </FilterBar>

      <SortContainer>
        <span className="results-count">{finalDataToRender.length} itens encontrados</span>
        <SortBtn onClick={() => setSortOrder(prev => prev === 'antigos' ? 'recentes' : 'antigos')}>
          {sortOrder === 'antigos' ? <FaSortAmountUp /> : <FaSortAmountDown />}
          {sortOrder === 'antigos' ? 'Antigos Primeiro' : 'Recentes Primeiro'}
        </SortBtn>
      </SortContainer>

      <Grid>
        {finalDataToRender.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </Grid>

      {filteredData.length === 0 && (
        <Empty>Nenhum conteúdo nesta categoria ainda.</Empty>
      )}
    </Container>
  );
};

// --- ESTILOS ---
const Container = styled.div`
  background: #00050a;
  min-height: 100vh;
  padding: 120px 5% 80px;
  color: #fff;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: clamp(2rem, 8vw, 4rem);
  color: #fff;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: #00CCFF;
  font-weight: 600;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TypeSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const TypeBtn = styled.button`
  background: transparent;
  color: ${props => props.$active ? '#00CCFF' : '#555'};
  border: none;
  border-bottom: 2px solid ${props => props.$active ? '#00CCFF' : 'transparent'};
  padding: 10px 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s;
  font-size: 0.9rem;
  &:hover { color: #00CCFF; }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
`;

const Tab = styled.button`
  background: ${props => props.$active ? '#9900FF' : 'rgba(255, 255, 255, 0.03)'};
  color: #fff;
  border: 1px solid ${props => props.$active ? '#9900FF' : '#222'};
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s;
  font-weight: 600;
  font-size: 0.8rem;
  &:hover { border-color: #9900FF; transform: translateY(-2px); }
`;

const SortContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .results-count { color: #888; font-size: 0.85rem; }
`;

const SortBtn = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  &:hover { border-color: #00CCFF; color: #00CCFF; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #050a0f;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #111;
  transition: 0.3s;
  &:hover { transform: translateY(-5px); border-color: #00CCFF; }
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    background: #000;
    cursor: pointer;
    .thumbnail { position: absolute; width: 100%; height: 100%; object-fit: cover; }
    iframe { position: absolute; width: 100%; height: 100%; border: 0; }
    .play-overlay { 
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      font-size: 3rem; color: #fff; opacity: 0; transition: 0.3s; z-index: 2;
    }
    &:hover .play-overlay { opacity: 1; color: #00CCFF; }
  }
  .info {
    padding: 20px;
    .meta { 
      display: flex; justify-content: space-between; margin-bottom: 8px;
      .category-tag { color: #00CCFF; font-size: 0.65rem; font-weight: 800; text-transform: uppercase; }
      .type-badge { 
        background: rgba(0, 204, 255, 0.1); color: #00CCFF; padding: 2px 8px; 
        border-radius: 4px; font-size: 0.6rem; font-weight: bold; 
      }
    }
    h3 { font-size: 1rem; color: #fff; font-weight: 500; }
  }
`;

const Empty = styled.div`text-align: center; padding: 100px; color: #444;`;

export default ConteudosPage;