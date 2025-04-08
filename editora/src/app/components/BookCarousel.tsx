import BookCard from './BookCard';

const featuredBooks = [
  {
    id: 1,
    title: "Algoritmos: Teoria e Prática",
    author: "Cormen et al.",
    price: "R$ 120,00",
    image: "/images/books/algoritmos.jpg",
    rating: 4.8
  },
  {
    id: 2,
    title: "Redes de Computadores",
    author: "Andrew Tanenbaum",
    price: "R$ 35,00",
    image: "/images/books/redes.jpg",
    rating: 4.5
  },
  {
    id: 3,
    title: "Engenharia de Software",
    author: "Pressman",
    price: "R$ 110,00",
    image: "/images/books/engenharia.jpg",
    rating: 4.7
  },
  {
    id: 4,
    title: "Inteligência Artificial",
    author: "Stuart Russell",
    price: "R$ 130,00",
    image: "/images/books/ia.jpg",
    rating: 4.9
  },
  {
    id: 5,
    title: "Estruturas de Dados",
    author: "Tenenbaum et al.",
    price: "R$ 85,00",
    image: "/images/books/estruturas.jpg",
    rating: 4.6
  }
];

export default function BookCarousel() {
  return (
    <div className="books-grid">
      {featuredBooks.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}