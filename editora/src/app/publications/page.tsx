import BookGrid from '../components/BookGrid';

export default function PublicationsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Nossas Publicações</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Categorias</h2>
          <div className="flex flex-wrap gap-2">
            <CategoryButton active>Todos</CategoryButton>
            <CategoryButton>Algoritmos</CategoryButton>
            <CategoryButton>Inteligência Artificial</CategoryButton>
            <CategoryButton>Redes de Computadores</CategoryButton>
            <CategoryButton>Engenharia de Software</CategoryButton>
            <CategoryButton>Banco de Dados</CategoryButton>
          </div>
        </div>
        
        <BookGrid />
      </div>
    </section>
  );
}

function CategoryButton({ children, active = false }: { children: React.ReactNode, active?: boolean }) {
  return (
    <button className={`px-4 py-2 rounded-full ${active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
      {children}
    </button>
  );
}