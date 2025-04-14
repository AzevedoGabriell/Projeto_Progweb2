"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

interface Publication {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  price: string;
  type: "livro" | "periodico" | "artigo" | "ebook";
  category: string;
  year: number;
  rating: number;
  description: string;
}

// Dados de exemplo
const SAMPLE_PUBLICATIONS: Publication[] = [
  {
    id: "1",
    title: "Computação e Sociedade na Era Digital",
    author: "Ana Silva e João Costa",
    coverImage: "/images/publications/computacao-sociedade.jpg",
    price: "R$ 79,90",
    type: "livro",
    category: "Tecnologia",
    year: 2023,
    rating: 4.5,
    description:
      "Uma análise profunda sobre o impacto da tecnologia na sociedade contemporânea.",
  },
  {
    id: "2",
    title: "Inteligência Artificial: Fundamentos e Aplicações",
    author: "Carlos Mendes",
    coverImage: "/images/publications/ia-fundamentos.jpg",
    price: "R$ 89,90",
    type: "livro",
    category: "Inteligência Artificial",
    year: 2022,
    rating: 5,
    description:
      "Este livro apresenta os conceitos fundamentais de IA e suas aplicações práticas.",
  },
  {
    id: "3",
    title: "Revista Brasileira de Computação Aplicada - Vol. 15",
    author: "Vários autores",
    coverImage: "/images/publications/revista-computacao.jpg",
    price: "R$ 45,00",
    type: "periodico",
    category: "Ciência da Computação",
    year: 2024,
    rating: 4.2,
    description:
      "Periódico com artigos científicos sobre avanços recentes em computação aplicada.",
  },
  {
    id: "4",
    title: "Blockchain e Economia Digital",
    author: "Paulo Ribeiro e Mariana Costa",
    coverImage: "/images/publications/blockchain.jpg",
    price: "R$ 69,90",
    type: "ebook",
    category: "Tecnologia",
    year: 2023,
    rating: 4.7,
    description:
      "Uma introdução abrangente sobre blockchain e seu impacto na economia digital.",
  },
  {
    id: "5",
    title: "Segurança em Sistemas Distribuídos",
    author: "Luiz Fernandes",
    coverImage: "/images/publications/seguranca-sistemas.jpg",
    price: "R$ 110,00",
    type: "livro",
    category: "Segurança",
    year: 2021,
    rating: 4.6,
    description:
      "Manual completo sobre práticas de segurança em sistemas distribuídos modernos.",
  },
  {
    id: "6",
    title: "Computação Quântica: Desafios e Perspectivas",
    author: "Roberto Almeida",
    coverImage: "/images/publications/computacao-quantica.jpg",
    price: "R$ 95,50",
    type: "livro",
    category: "Computação Quântica",
    year: 2024,
    rating: 4.8,
    description:
      "Uma exploração dos avanços recentes em computação quântica e suas implicações futuras.",
  },
];

export default function Publicacoes() {
  const [publications, setPublications] =
    useState<Publication[]>(SAMPLE_PUBLICATIONS);
  const [filteredPublications, setFilteredPublications] =
    useState<Publication[]>(SAMPLE_PUBLICATIONS);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    year: "",
    author: "",
  });

  // Extrair categorias, tipos e anos únicos para os filtros
  const categories = [...new Set(publications.map((pub) => pub.category))];
  const types = [...new Set(publications.map((pub) => pub.type))];
  const years = [...new Set(publications.map((pub) => pub.year))].sort(
    (a, b) => b - a
  );
  const authors = [...new Set(publications.map((pub) => pub.author))];

  // Aplicar filtros e busca
  useEffect(() => {
    let result = [...publications];

    // Aplicar termo de busca
    if (searchTerm) {
      result = result.filter(
        (pub) =>
          pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pub.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Aplicar filtros
    if (filters.type) {
      result = result.filter((pub) => pub.type === filters.type);
    }
    if (filters.category) {
      result = result.filter((pub) => pub.category === filters.category);
    }
    if (filters.year) {
      result = result.filter((pub) => pub.year === parseInt(filters.year));
    }
    if (filters.author) {
      result = result.filter((pub) => pub.author === filters.author);
    }

    setFilteredPublications(result);
  }, [searchTerm, filters, publications]);

  // Manipular mudanças nos filtros
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

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

  return (
    <div className="publications-page">
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Publicações</h1>
              <p className="hero-subtitle">
                Explore nossa coleção de livros, periódicos e artigos
                científicos na área de computação
              </p>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="search-section">
            <h2 className="section-title">Busca Avançada</h2>
            <div className="search-container">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Buscar por título, autor ou palavras-chave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <button className="search-button">
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
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>

              <div className="filters">
                <div className="filter-group">
                  <label>Tipo:</label>
                  <select
                    name="type"
                    onChange={handleFilterChange}
                    value={filters.type}
                  >
                    <option value="">Todos</option>
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label>Categoria:</label>
                  <select
                    name="category"
                    onChange={handleFilterChange}
                    value={filters.category}
                  >
                    <option value="">Todas</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label>Ano:</label>
                  <select
                    name="year"
                    onChange={handleFilterChange}
                    value={filters.year}
                  >
                    <option value="">Todos</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label>Autor:</label>
                  <select
                    name="author"
                    onChange={handleFilterChange}
                    value={filters.author}
                  >
                    <option value="">Todos</option>
                    {authors.map((author) => (
                      <option key={author} value={author}>
                        {author}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          <section className="publications-section">
            <h2 className="section-title">Catálogo de Publicações</h2>

            {filteredPublications.length === 0 ? (
              <div className="no-results">
                <p>
                  Nenhuma publicação encontrada com os critérios selecionados.
                </p>
              </div>
            ) : (
              <div className="books-grid">
                {filteredPublications.map((publication) => (
                  <div key={publication.id} className="book-card">
                    <div className="book-image-container">
                      <div className="publication-type-badge">
                        {publication.type}
                      </div>
                      <div className="book-image">
                        <Image
                          src={
                            publication.coverImage ||
                            "/images/placeholder-cover.jpg"
                          }
                          alt={publication.title}
                          width={220}
                          height={300}
                          className="book-cover"
                        />
                      </div>
                    </div>
                    <div className="book-info">
                      <h3 className="book-title">{publication.title}</h3>
                      <p className="book-author">{publication.author}</p>
                      <div className="book-details">
                        <span className="book-year">{publication.year}</span>
                        <span className="book-category">
                          {publication.category}
                        </span>
                      </div>
                      <div className="book-rating">
                        {renderStars(publication.rating)}
                        <span className="rating-value">
                          ({publication.rating})
                        </span>
                      </div>
                      <div className="book-price">{publication.price}</div>
                    </div>
                    <div className="book-footer">
                      <Link
                        href={`/publicacoes/${publication.id}`}
                        className="btn btn-primary btn-small"
                      >
                        Ver Detalhes
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
