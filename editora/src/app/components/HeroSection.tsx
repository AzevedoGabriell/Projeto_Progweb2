import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Conhecimento em Computação para Todos</h1>
        <p className="hero-subtitle">Mais de 200 livros publicados e reconhecidos pela comunidade acadêmica</p>
        <div className="hero-buttons">
          <Link 
            href="/publicacoes" 
            className="btn btn-primary"
          >
            Explore Nossos Livros
          </Link>
          <Link 
            href="/submissoes" 
            className="btn btn-secondary"
          >
            Envie Seu Manuscrito
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <Image
          src="/images/escolher-editora-de-livros-academicos.png"
          alt="Livros de computação"
          fill
          priority
        />
      </div>
    </section>
  );
}