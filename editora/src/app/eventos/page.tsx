// app/eventos/page.tsx
import Link from 'next/link';
import Image from 'next/image';

// Dados fictícios de eventos
const eventos = [
  {
    id: '1',
    titulo: 'Lançamento do livro "Horizontes Digitais"',
    data: '15 de Maio de 2025',
    horario: '19:00',
    local: 'Livraria Cultura - Shopping Iguatemi, São Paulo',
    imagem: '/images/lancamento.jpg',
    descricao: 'Venha participar do lançamento do mais novo livro sobre transformação digital no Brasil.',
    autor: 'Dr. Ricardo Mendes'
  },
  {
    id: '2',
    titulo: 'Webinar: O Futuro da Publicação Científica',
    data: '22 de Junho de 2025',
    horario: '15:00',
    local: 'Online via Zoom',
    imagem: '/images/webinar.webp',
    descricao: 'Discussão com especialistas sobre novas tendências em publicações científicas.',
    palestrantes: ['Dra. Carla Almeida', 'Prof. João Silva', 'Dra. Maria Pereira']
  },
  {
    id: '3',
    titulo: 'Workshop de Escrita Acadêmica',
    data: '10 de Julho de 2025',
    horario: '09:00 - 17:00',
    local: 'Campus da Universidade Federal, Rio de Janeiro',
    imagem: '/images/escrita.jpg',
    descricao: 'Um dia inteiro dedicado a aprimorar suas habilidades de escrita científica.',
    facilitador: 'Prof. André Santos'
  },
  {
    id: '4',
    titulo: 'Feira do Livro Científico',
    data: '25-28 de Agosto de 2025',
    horario: '10:00 - 20:00',
    local: 'Centro de Convenções, Belo Horizonte',
    imagem: '/images/feira.webp',
    descricao: 'A maior feira de livros científicos do Brasil, com descontos especiais em todas as publicações.'
  }
];

export default function EventosPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-2 text-blue-800">Eventos</h1>
        <p className="text-lg text-gray-600">
          Confira nossos próximos eventos, lançamentos de livros, webinars e workshops.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventos.map((evento) => (
          <div key={evento.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <Image src={evento.imagem} alt='opa' fill />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{evento.titulo}</h2>
              <div className="mb-4">
                <p className="text-gray-600"><span className="font-medium">Data:</span> {evento.data}</p>
                <p className="text-gray-600"><span className="font-medium">Horário:</span> {evento.horario}</p>
                <p className="text-gray-600"><span className="font-medium">Local:</span> {evento.local}</p>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">{evento.descricao}</p>
              <Link 
                href={`/eventos/${evento.id}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Ver detalhes
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Próximos eventos</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-4 py-2 text-left">Evento</th>
                <th className="px-4 py-2 text-left">Data</th>
                <th className="px-4 py-2 text-left">Local</th>
                <th className="px-4 py-2 text-left">Ação</th>
              </tr>
            </thead>
            <tbody>
              {eventos.map((evento) => (
                <tr key={evento.id} className="border-b border-blue-100">
                  <td className="px-4 py-3">{evento.titulo}</td>
                  <td className="px-4 py-3">{evento.data}</td>
                  <td className="px-4 py-3">{evento.local}</td>
                  <td className="px-4 py-3">
                    <Link 
                      href={`/eventos/${evento.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Detalhes
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}