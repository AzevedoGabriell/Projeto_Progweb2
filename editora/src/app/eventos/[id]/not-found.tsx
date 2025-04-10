import Link from 'next/link';

export default function EventoNotFound() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Evento não encontrado</h1>
      <p className="text-lg text-gray-600 mb-8">
        O evento que você está procurando não existe ou pode ter sido removido.
      </p>
      <Link 
        href="/eventos"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
      >
        Ver todos os eventos
      </Link>
    </div>
  );
}