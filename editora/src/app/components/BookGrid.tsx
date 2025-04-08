import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Tipos para os livros
type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  cover: string;
  price: string;
  year: number;
  rating: number;
};

// Dados de exemplo (substitua por dados reais ou API)
const allBooks: Book[] = [
  {
    id: '1',
    title: 'Algoritmos: Teoria e Prática',
    author: 'Thomas H. Cormen',
    category: 'Algoritmos',
    cover: '/assets/images/books/algoritmos.jpg',
    price: 'R$ 120,00',
    year: 2022,
    rating: 4.8
  },
  {
    id: '2',
    title: 'Redes de Computadores',
    author: 'Andrew Tanenbaum',
    category: 'Redes',
    cover: '/assets/images/books/redes.jpg',
    price: 'R$ 95,00',
    year: 2021,
    rating: 4.5
  },
  {
    id: '3',
    title: 'Engenharia de Software: Uma Abordagem Profissional',
    author: 'Roger Pressman',
    category: 'Engenharia de Software',
    cover: '/assets/images/books/engenharia.jpg',
    price: 'R$ 110,00',
    year: 2023,
    rating: 4.7
  },
  {
    id: '4',
    title: 'Inteligência Artificial: Uma Abordagem Moderna',
    author: 'Stuart Russell',
    category: 'Inteligência Artificial',
    cover: '/assets/images/books/ia.jpg',
    price: 'R$ 130,00',
    year: 2022,
    rating: 4.9
  },
  {
    id: '5',
    title: 'Estruturas de Dados e Algoritmos em JavaScript',
    author: 'Loiane Groner',
    category: 'Algoritmos',
    cover: '/assets/images/books/estruturas.jpg',
    price: 'R$ 85,00',
    year: 2021,
    rating: 4.6
  },
  {
    id: '6',
    title: 'Banco de Dados: Projeto e Implementação',
    author: 'Carlos Alberto Heuser',
    category: 'Banco de Dados',
    cover: '/assets/images/books/bancodados.jpg',
    price: 'R$ 90,00',
    year: 2020,
    rating: 4.4
  },
  {
    id: '7',
    title: 'Machine Learning: O Guia Essencial',
    author: 'Andriy Burkov',
    category: 'Inteligência Artificial',
    cover: '/assets/images/books/machinelearning.jpg',
    price: 'R$ 115,00',
    year: 2023,
    rating: 4.8
  },
  {
    id: '8',
    title: 'Segurança da Informação: Fundamentos',
    author: 'Marcelo Sampaio',
    category: 'Segurança',
    cover: '/assets/images/books/seguranca.jpg',
    price: 'R$ 100,00',
    year: 2022,
    rating: 4.3
  }
];

// Componente BookGrid
export default function BookGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage = 8;

  // Filtrar livros por categoria e termo de busca
  const filteredBooks = allBooks.filter(book => {
    const matchesCategory = selectedCategory === 'Todos' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Paginação
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  // Extrair categorias únicas para os filtros
  const categories = ['Todos', ...new Set(allBooks.map(book => book.category))];

  return (
    <div className="space-y-8">
      {/* Barra de pesquisa e filtros */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Pesquisar livros..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="category-filter" className="text-gray-700">
            Filtrar por:
          </label>
          <select
            id="category-filter"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mensagem quando não há resultados */}
      {currentBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Nenhum livro encontrado com os critérios selecionados.</p>
          <button 
            onClick={() => {
              setSelectedCategory('Todos');
              setSearchTerm('');
            }}
            className="mt-4 text-blue-600 hover:underline"
          >
            Limpar filtros
          </button>
        </div>
      )}

      {/* Grade de livros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded border ${currentPage === page ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-gray-100'}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
            >
              &gt;
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}

// Componente BookCard
function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <Link href={`/publicacoes/${book.id}`} className="block">
        <div className="relative aspect-[2/3]">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="p-4 flex-grow">
          <h3 className="font-bold text-lg mb-1 line-clamp-2">{book.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{book.author}</p>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 ml-1">({book.rating})</span>
          </div>
        </div>
      </Link>
      <div className="p-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-600">{book.price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}