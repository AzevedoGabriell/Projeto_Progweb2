import Link from 'next/link';
import { FiCalendar, FiUser, FiClock, FiShare2, FiArrowLeft } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Dados de exemplo para uma postagem específica
const blogPost = {
  id: 1,
  title: "As Novas Fronteiras da Inteligência Artificial em 2024",
  content: `
    <p>O ano de 2024 está trazendo avanços significativos no campo da Inteligência Artificial, com novas técnicas e aplicações que prometem revolucionar diversos setores. Neste artigo, exploramos as principais tendências que estão moldando o futuro da IA.</p>
    
    <h2>1. Modelos Multimodais</h2>
    <p>Os modelos de IA estão se tornando cada vez mais capazes de processar e entender múltiplos tipos de dados simultaneamente - texto, imagens, áudio e vídeo. Essa capacidade multimodal permite aplicações mais ricas e integradas.</p>
    
    <h2>2. IA Generativa Avançada</h2>
    <p>Além dos já conhecidos modelos de geração de texto e imagens, estamos vendo o surgimento de ferramentas que podem gerar código complexo, modelos 3D e até mesmo moléculas para descoberta de medicamentos.</p>
    
    <h2>3. Edge AI</h2>
    <p>A execução de modelos de IA diretamente em dispositivos locais (edge computing) está ganhando força, reduzindo a dependência de conexões com a nuvem e melhorando a privacidade dos dados.</p>
    
    <h2>4. IA Responsável e Ética</h2>
    <p>Com o crescimento da IA, aumenta também a preocupação com seu uso responsável. Novas ferramentas de explicabilidade, justiça e governança estão sendo desenvolvidas para garantir que os sistemas de IA sejam transparentes e justos.</p>
    
    <p>Essas tendências representam apenas um vislumbre do que está por vir. À medida que a tecnologia avança, é crucial que profissionais e pesquisadores se mantenham atualizados para aproveitar ao máximo essas inovações.</p>
  `,
  author: "Dr. Carlos Silva",
  authorBio: "Professor de Ciência da Computação com 15 anos de experiência em IA, pesquisador do Laboratório de Tecnologias Emergentes.",
  date: "15 de Maio, 2024",
  readTime: "8 min",
  category: "Tendências",
  image: "/images/blog/ai-trends.jpg",
  relatedPosts: [
    {
      id: 4,
      title: "Como Machine Learning está Revolucionando a Medicina",
      excerpt: "Estudo de caso sobre aplicações de ML no diagnóstico de doenças raras.",
      date: "5 de Abril, 2024"
    },
    {
      id: 2,
      title: "Entrevista com Autora Best-Seller de Computação Quântica",
      excerpt: "Conversamos com a Dra. Ana Santos sobre seu novo livro e o futuro da computação quântica.",
      date: "2 de Maio, 2024"
    }
  ]
};

export default function BlogPostPage() {
  return (
    <div className="blog-post-page">
      {/* Hero Section */}
      <section className="post-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/blog" className="breadcrumb-link">
              <FiArrowLeft /> Voltar ao Blog
            </Link>
          </div>
          <h1 className="post-title">{blogPost.title}</h1>
          <div className="post-meta">
            <span className="meta-item"><FiCalendar /> {blogPost.date}</span>
            <span className="meta-item"><FiUser /> {blogPost.author}</span>
            <span className="meta-item"><FiClock /> {blogPost.readTime} de leitura</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="post-content-container">
          {/* Post Content */}
          <article className="post-content">
            <div className="featured-image">
              <img src={blogPost.image} alt={blogPost.title} />
            </div>
            
            <div className="post-text" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            
            {/* Author Bio */}
            <div className="author-bio">
              <h3>Sobre o Autor</h3>
              <p>{blogPost.authorBio}</p>
            </div>
            
            {/* Share Buttons */}
            <div className="share-section">
              <h3>Compartilhe este artigo</h3>
              <div className="share-buttons">
                <button className="share-button facebook"><FaFacebook /> Facebook</button>
                <button className="share-button twitter"><FaTwitter /> Twitter</button>
                <button className="share-button linkedin"><FaLinkedin /> LinkedIn</button>
              </div>
            </div>
            
            {/* Comments Section */}
            <div className="comments-section">
              <h3>Comentários</h3>
              <div className="comment-form">
                <textarea placeholder="Adicione seu comentário..." rows={4}></textarea>
                <button type="submit" className="btn btn-primary">Enviar Comentário</button>
              </div>
              
              {/* Sample Comments */}
              <div className="comment-list">
                <div className="comment">
                  <div className="comment-author">Maria Oliveira</div>
                  <div className="comment-date">20 de Maio, 2024</div>
                  <div className="comment-text">Excelente artigo! Gostaria de saber mais sobre as aplicações de Edge AI na indústria 4.0.</div>
                </div>
                
                <div className="comment">
                  <div className="comment-author">João Santos</div>
                  <div className="comment-date">18 de Maio, 2024</div>
                  <div className="comment-text">Ótima visão geral das tendências. A parte sobre IA ética é especialmente relevante nos dias de hoje.</div>
                </div>
              </div>
            </div>
          </article>
          
          {/* Sidebar with Related Posts */}
          <aside className="post-sidebar">
            <div className="sidebar-section">
              <h3>Posts Relacionados</h3>
              <div className="related-posts">
                {blogPost.relatedPosts.map(post => (
                  <div key={post.id} className="related-post">
                    <Link href={`/blog/${post.id}`} className="related-post-title">{post.title}</Link>
                    <div className="related-post-date">{post.date}</div>
                    <p className="related-post-excerpt">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="sidebar-section newsletter-sidebar">
              <h3>Assine nossa Newsletter</h3>
              <p>Receba as últimas postagens diretamente em seu email.</p>
              <form className="sidebar-newsletter-form">
                <input type="email" placeholder="Seu email" required />
                <button type="submit" className="btn btn-secondary">Assinar</button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}