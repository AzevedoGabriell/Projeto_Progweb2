import './style.css';
import Link from 'next/link';
import { FiCalendar, FiUser, FiClock, FiShare2 } from 'react-icons/fi';

// Dados de exemplo para as postagens do blog
const blogPosts = [
  {
    id: 1,
    title: "As Novas Fronteiras da Inteligência Artificial em 2024",
    excerpt: "Explore as tendências mais recentes em IA e como elas estão transformando a indústria de tecnologia.",
    author: "Dr. Carlos Silva",
    date: "15 de Maio, 2024",
    readTime: "8 min",
    category: "Tendências",
    image: "/images/ia.jpeg"
  },
  {
    id: 2,
    title: "Entrevista com Autora Best-Seller de Computação Quântica",
    excerpt: "Conversamos com a Dra. Ana Santos sobre seu novo livro e o futuro da computação quântica.",
    author: "Equipe Editorial",
    date: "2 de Maio, 2024",
    readTime: "12 min",
    category: "Entrevistas",
    image: "/images/entrevista.jpg"
  },
  {
    id: 3,
    title: "Lançamento: Nova Série de Livros sobre Desenvolvimento Web Moderno",
    excerpt: "Conheça nossa nova coleção que cobre desde os fundamentos até as técnicas mais avançadas.",
    author: "Editora Tech",
    date: "20 de Abril, 2024",
    readTime: "5 min",
    category: "Novidades",
    image: "/images/web.jpeg"
  },
  {
    id: 4,
    title: "Como Machine Learning está Revolucionando a Medicina",
    excerpt: "Estudo de caso sobre aplicações de ML no diagnóstico de doenças raras.",
    author: "Prof. Marcos Oliveira",
    date: "5 de Abril, 2024",
    readTime: "10 min",
    category: "Aplicações",
    image: "/images/med.jpeg"
  },
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="blog-hero-title">Blog da Editora</h1>
          <p className="blog-hero-subtitle">
            Artigos, entrevistas e novidades sobre as últimas tendências em computação e tecnologia
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        {/* Blog Posts Grid */}
        <section className="blog-posts">
          <div className="posts-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="post-card">
                <Link href={`/blog/${post.id}`} className="post-image-link">
                  <div className="post-image-container">
                    <img src={post.image} alt={post.title} className="post-image" />
                    <span className="post-category">{post.category}</span>
                  </div>
                </Link>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="meta-item"><FiCalendar /> {post.date}</span>
                    <span className="meta-item"><FiUser /> {post.author}</span>
                    <span className="meta-item"><FiClock /> {post.readTime}</span>
                  </div>
                  <h2 className="post-title">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <Link href={`/blog/${post.id}`} className="read-more">Ler mais</Link>
                    <div className="share-buttons">
                      <button className="share-button"><FiShare2 /></button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="blog-newsletter">
          <h2 className="newsletter-title">Assine nossa Newsletter</h2>
          <p className="newsletter-text">
            Receba as últimas postagens do blog, lançamentos de livros e eventos diretamente em seu email.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Seu melhor email" required />
            <button type="submit" className="btn btn-primary">Assinar</button>
          </form>
        </section>
      </div>
    </div>
  );
}