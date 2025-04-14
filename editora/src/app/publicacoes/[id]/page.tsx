// app/publicacoes/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "../style.css";

// Tipos para publicações e capítulos
interface Author {
  name: string;
  bio: string;
  institution: string;
  photo?: string;
}

interface Chapter {
  title: string;
  pages: string;
  description: string;
}

interface PublicationDetail {
  id: string;
  title: string;
  authors: Author[];
  coverImage: string;
  price: string;
  type: "livro" | "periodico" | "artigo" | "ebook";
  category: string;
  year: number;
  rating: number;
  description: string;
  isbn?: string;
  publisher?: string;
  pages?: number;
  language?: string;
  availability?: string;
  formats?: string[];
  tableOfContents?: Chapter[];
  tags?: string[];
}

// Dados de exemplo para publicação detalhada
const SAMPLE_PUBLICATION: PublicationDetail = {
  id: "1",
  title: "Computação e Sociedade na Era Digital",
  authors: [
    {
      name: "Ana Silva",
      bio: "Professora de Ciência da Computação com foco em tecnologia e sociedade. Possui doutorado em Computação pela USP e diversos artigos publicados sobre o impacto social da tecnologia.",
      institution: "Universidade de São Paulo",
    },
    {
      name: "João Costa",
      bio: "Pesquisador em Ética em Inteligência Artificial e professor associado. Tem experiência em políticas públicas para tecnologia e é membro do comitê de ética digital.",
      institution: "Universidade Federal do Rio de Janeiro",
    },
  ],
  coverImage: "/images/publications/computacao-sociedade.jpg",
  price: "R$ 79,90",
  type: "livro",
  category: "Tecnologia",
  year: 2023,
  rating: 4.5,
  description:
    "Uma análise profunda sobre o impacto da tecnologia na sociedade contemporânea. Esta obra examina as transformações sociais, políticas e econômicas trazidas pela revolução digital, discutindo questões éticas, privacidade, inclusão digital e o futuro do trabalho no contexto da automação crescente. Os autores apresentam estudos de caso e oferecem perspectivas para a construção de uma sociedade tecnologicamente avançada, mas centrada no ser humano.",
  isbn: "978-85-7975-325-8",
  publisher: "Editora CompSelects",
  pages: 320,
  language: "Português",
  availability: "Em estoque",
  formats: ["Impresso", "E-book (PDF)", "E-book (ePub)"],
  tableOfContents: [
    {
      title: "Capítulo 1: Revolução Digital e Transformação Social",
      pages: "1-28",
      description:
        "Introdução aos conceitos fundamentais e panorama histórico da evolução tecnológica.",
    },
    {
      title: "Capítulo 2: Inclusão e Exclusão Digital",
      pages: "29-64",
      description:
        "Análise dos fatores que contribuem para a desigualdade digital e estratégias para promover a inclusão.",
    },
    {
      title: "Capítulo 3: Privacidade e Vigilância na Era dos Dados",
      pages: "65-102",
      description:
        "Discussão sobre os desafios da privacidade individual face à coleta massiva de dados.",
    },
    {
      title: "Capítulo 4: Ética na Inteligência Artificial",
      pages: "103-156",
      description:
        "Reflexões sobre os dilemas éticos no desenvolvimento e implementação de sistemas de IA.",
    },
    {
      title: "Capítulo 5: Trabalho e Automação",
      pages: "157-198",
      description:
        "Impactos da automação no mercado de trabalho e perspectivas para o futuro das profissões.",
    },
    {
      title: "Capítulo 6: Democracia Digital e Participação Cidadã",
      pages: "199-248",
      description:
        "Como as tecnologias digitais podem transformar processos democráticos e a participação civil.",
    },
    {
      title: "Capítulo 7: Sustentabilidade e Tecnologia",
      pages: "249-286",
      description:
        "Relação entre desenvolvimento tecnológico e desafios ambientais contemporâneos.",
    },
    {
      title: "Capítulo 8: Rumo a uma Sociedade Digital Humanizada",
      pages: "287-320",
      description:
        "Conclusões e propostas para um desenvolvimento tecnológico centrado no bem-estar humano.",
    },
  ],
  tags: [
    "Tecnologia",
    "Sociedade",
    "Ética Digital",
    "Inclusão Digital",
    "Privacidade",
    "Inteligência Artificial",
  ],
};

export default function PublicationDetails() {
  const router = useRouter();
  const params = useParams();
  const [publication, setPublication] = useState<PublicationDetail | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    // Simulação de busca da publicação por ID
    // Em uma aplicação real, você faria uma chamada à API aqui
    const publicationId = params.id;
    if (publicationId === "1") {
      setPublication(SAMPLE_PUBLICATION);
    } else {
      // Simulando publicação não encontrada
      // Em uma aplicação real, você redirecionaria para uma página 404
      console.error("Publicação não encontrada");
    }
    setLoading(false);
  }, [params.id]);

  // Renderizar estrelas para avaliação
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="publication-details-page">
        <main className="container">
          <div className="loading-spinner">Carregando...</div>
        </main>
      </div>
    );
  }

  if (!publication) {
    return (
      <div className="publication-details-page">
        <main className="container">
          <div className="publication-not-found">
            <h2>Publicação não encontrada</h2>
            <p>A publicação que você está procurando não está disponível.</p>
            <Link href="/publicacoes" className="btn btn-primary">
              Voltar para Publicações
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="publication-details-page">      <main>
        <div className="container">
          <div className="publication-navigation">
            <Link href="/publicacoes" className="back-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Voltar para Publicações
            </Link>
          </div>

          <div className="publication-header">
            <div className="publication-cover">
              <Image
                src={publication.coverImage || "/images/placeholder-cover.jpg"}
                alt={publication.title}
                width={300}
                height={420}
                className="cover-image"
              />
              <div className="publication-type">{publication.type}</div>
            </div>

            <div className="publication-info">
              <h1 className="publication-title">{publication.title}</h1>

              <div className="publication-authors">
                por{" "}
                {publication.authors.map((author) => author.name).join(", ")}
              </div>

              <div className="publication-meta">
                <div className="meta-item">
                  <strong>Categoria:</strong> {publication.category}
                </div>
                <div className="meta-item">
                  <strong>Ano:</strong> {publication.year}
                </div>
                <div className="meta-item">
                  <strong>Editora:</strong> {publication.publisher}
                </div>
                {publication.isbn && (
                  <div className="meta-item">
                    <strong>ISBN:</strong> {publication.isbn}
                  </div>
                )}
                {publication.pages && (
                  <div className="meta-item">
                    <strong>Páginas:</strong> {publication.pages}
                  </div>
                )}
                {publication.language && (
                  <div className="meta-item">
                    <strong>Idioma:</strong> {publication.language}
                  </div>
                )}
              </div>

              <div className="publication-rating">
                <div className="rating-stars">
                  {renderStars(publication.rating)}
                  <span className="rating-value">({publication.rating})</span>
                </div>
              </div>

              <div className="publication-price-container">
                <div className="publication-price">{publication.price}</div>
                <div className="publication-availability">
                  {publication.availability}
                </div>
              </div>

              <div className="publication-formats">
                <strong>Formatos disponíveis:</strong>
                <div className="formats-list">
                  {publication.formats?.map((format, index) => (
                    <span key={index} className="format-badge">
                      {format}
                    </span>
                  ))}
                </div>
              </div>

              <div className="publication-actions">
                <button className="btn btn-primary">Comprar</button>
                <button className="btn btn-outline">
                  Adicionar à Lista de Desejos
                </button>
              </div>
            </div>
          </div>

          <div className="publication-content">
            <div className="content-tabs">
              <button
                className={`tab-button ${
                  activeTab === "description" ? "active" : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Descrição
              </button>
              <button
                className={`tab-button ${activeTab === "toc" ? "active" : ""}`}
                onClick={() => setActiveTab("toc")}
              >
                Sumário
              </button>
              <button
                className={`tab-button ${
                  activeTab === "authors" ? "active" : ""
                }`}
                onClick={() => setActiveTab("authors")}
              >
                Autores
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "description" && (
                <div className="description-tab">
                  <p className="publication-description">
                    {publication.description}
                  </p>

                  <div className="publication-tags">
                    <h3>Tags:</h3>
                    <div className="tags-list">
                      {publication.tags?.map((tag, index) => (
                        <span key={index} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "toc" && (
                <div className="toc-tab">
                  <h3>Sumário</h3>
                  <div className="table-of-contents">
                    {publication.tableOfContents?.map((chapter, index) => (
                      <div key={index} className="chapter-item">
                        <div className="chapter-header">
                          <h4 className="chapter-title">{chapter.title}</h4>
                          <span className="chapter-pages">{chapter.pages}</span>
                        </div>
                        <p className="chapter-description">
                          {chapter.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "authors" && (
                <div className="authors-tab">
                  <h3>Sobre os Autores</h3>
                  <div className="authors-list">
                    {publication.authors.map((author, index) => (
                      <div key={index} className="author-card">
                        {author.photo ? (
                          <div className="author-photo">
                            <Image
                              src={author.photo}
                              alt={author.name}
                              width={100}
                              height={100}
                              className="author-image"
                            />
                          </div>
                        ) : (
                          <div className="author-photo author-placeholder">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                        )}
                        <div className="author-info">
                          <h4 className="author-name">{author.name}</h4>
                          <p className="author-institution">
                            {author.institution}
                          </p>
                          <p className="author-bio">{author.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="related-publications">
            <h2 className="section-title">Publicações Relacionadas</h2>
            <p className="section-subtitle">
              Você também pode se interessar por:
            </p>

            <div className="related-grid">
              {/* Normalmente, você teria uma lista de publicações relacionadas aqui */}
              <div className="related-placeholder">
                <p>Carregando publicações relacionadas...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
