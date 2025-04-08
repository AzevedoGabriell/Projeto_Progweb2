import Image from 'next/image';
import Link from 'next/link';

export default function BookCard({ book }: { book: any }) {
  return (
    <div className="book-card">
      <Link href={`/publicacoes/${book.id}`}>
        <div className="book-image-container">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="book-image"
          />
        </div>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <div className="book-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star ${i < Math.floor(book.rating) ? 'filled' : ''}`}>★</span>
            ))}
            <span className="rating-value">({book.rating})</span>
          </div>
        </div>
      </Link>
      <div className="book-footer">
        <span className="book-price">{book.price}</span>
        <button className="btn btn-small">Comprar</button>
      </div>
    </div>
  );
}