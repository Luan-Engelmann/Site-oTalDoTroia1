# ⚔️ oTalDoTroia - Site Oficial

O site do oTalDoTroia é uma plataforma web completa criada para centralizar o conteúdo do canal, permitir a publicação de posts no blog e exibir vídeos e lives organizados por categoria. O projeto foi desenvolvido com foco em performance, visual moderno e fácil manutenção.

## 🚀 Informações do Projeto

| Domínio | Status | Versão | Deploy |
| :--- | :--- | :--- | :--- |
| otaldotroia.com.br | Online — produção | 1.0.1 | Automático (GitHub Push) |

## 💻 Stack Tecnológica

### Frontend
* **Framework e Build:** React 18 com Vite 7.
* **Roteamento:** React Router DOM v7.
* **Estilização e Ícones:** Styled Components v6 e React Icons v5.
* **Hospedagem:** Render (Static Site).

### Backend & Banco de Dados
* **API:** Python 3.12 utilizando FastAPI e Uvicorn.
* **Banco de Dados:** Supabase (PostgreSQL) integrado via Supabase JS v2 no frontend.
* **Hospedagem:** Render (Web Service — Python).

## 📂 Estrutura do Repositório

O repositório está organizado em duas pastas principais dentro de `site_otaldotroia/`:
* `otaldotroia-frontend/`: Código React/Vite do site.
* `backend/`: API FastAPI em Python.

## 🗺️ Páginas e Funcionalidades

* **Início (`/`):** Página principal com a *hero section*, apresentação do canal e links para as redes sociais.
* **Sobre (`/sobre`):** Apresenta a história, missão, visão e valores do oTalDoTroia, além dos botões de acesso ao YouTube, Twitch e Kick.
* **Conteúdo (`/conteudo`):** Galeria dinâmica de vídeos e lives organizados por jogo (ex: Ghost of Tsushima, RDR2, God of War). Os dados são carregados do arquivo `videosData.jsx` e exibidos via iframe do YouTube.
* **Parceiros (`/parceiros`):** Página dedicada aos parceiros e apoiadores do canal.
* **Blog — Troia News (`/blog`):** Sistema de blog completo para notícias e curiosidades, com filtros por categoria e modal de visualização. Os posts são salvos permanentemente no Supabase.

## 🗄️ Banco de Dados (Supabase)

O blog utiliza a tabela `posts` no Supabase para gerenciar o conteúdo:

| Coluna | Tipo SQL | Descrição |
| :--- | :--- | :--- |
| `id` | `SERIAL PRIMARY KEY` | ID automático |
| `title` | `TEXT NOT NULL` | Título do post |
| `main_category` | `TEXT` | Categoria principal (Notícias / Curiosidades) |
| `sub_category` | `TEXT` | Subcategoria (Games / Séries / Filmes) |
| `image_url` | `TEXT` | URL da imagem de capa |
| `content` | `TEXT` | Conteúdo completo do post |
| `created_at` | `TIMESTAMP DEFAULT NOW()` | Data de criação automática |

## ⚙️ Fluxo de Deploy e Atualização

O deploy é 100% automático. O processo ocorre da seguinte forma:
1. O desenvolvedor realiza a alteração no código localmente e faz o `git push` para a branch `Master`.
2. O Render detecta o novo commit automaticamente.
3. O Render executa `npm install && npm run build` no frontend.
4. O site é atualizado em produção em poucos minutos.

### Como adicionar novos vídeos no site:
1. Edite o arquivo `src/pages/videosData.jsx`.
2. Adicione o novo objeto preenchendo as chaves `id`, `title`, `category` e `type`.
3. Faça o commit e o push no GitHub para disparar o deploy automático (~2 minutos).

## 📈 SEO e Monetização

* O domínio está registrado e configurado no **Registro.br** com as devidas chaves DNS.
* **Google Search Console:** Verificado via registro TXT, com sitemap (`sitemap.xml`) enviado e páginas indexadas.
* **Google AdSense:** Site verificado e arquivo `ads.txt` configurado na pasta `/public/`.

## 🔮 Próximos Passos (Roadmap)

* Adicionar senha de administrador para proteger o botão "Nova Postagem" no blog.
* Criar uma página de Política de Privacidade (necessário para melhorias no AdSense).
* Implementar um sistema de busca interno no blog.
* Adicionar página de erro 404 personalizada.
* Configurar o Google Analytics para métricas de visitação.
