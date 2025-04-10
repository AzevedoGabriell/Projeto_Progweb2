import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const eventos = [
  {
    id: '1',
    titulo: 'Lançamento do livro "Horizontes Digitais"',
    data: '15 de Maio de 2025',
    horario: '19:00 - 21:30',
    local: 'Livraria Cultura - Shopping Iguatemi, São Paulo',
    endereco: 'Av. Brigadeiro Faria Lima, 2232 - Jardim Paulistano, São Paulo - SP',
    imagem: '/images/evento-lancamento-livro.jpg',
    descricao: 'Venha participar do lançamento do mais novo livro sobre transformação digital no Brasil. O autor estará presente para uma sessão de autógrafos e bate-papo com os leitores.',
    autor: 'Dr. Ricardo Mendes',
    biografia: 'Ricardo Mendes é doutor em Ciência da Computação pela USP e pesquisador na área de transformação digital há mais de 15 anos. Autor de diversos artigos científicos e três livros sobre tecnologia e sociedade.',
    agenda: [
      { horario: '19:00', atividade: 'Recepção e coquetel de boas-vindas' },
      { horario: '19:30', atividade: 'Apresentação do livro pelo autor' },
      { horario: '20:15', atividade: 'Sessão de perguntas e respostas' },
      { horario: '20:45', atividade: 'Sessão de autógrafos' }
    ],
    inscricao: {
      necessaria: true,
      taxa: 'Gratuito (é necessário adquirir o livro no local)',
      link: '#inscricao'
    }
  },
  {
    id: '2',
    titulo: 'Webinar: O Futuro da Publicação Científica',
    data: '22 de Junho de 2025',
    horario: '15:00 - 17:00',
    local: 'Online via Zoom',
    imagem: '/images/evento-webinar.jpg',
    descricao: 'Discussão com especialistas sobre novas tendências em publicações científicas, métricas de impacto, acesso aberto e o papel da inteligência artificial na disseminação do conhecimento científico.',
    palestrantes: [
      { 
        nome: 'Dra. Carla Almeida', 
        instituicao: 'Universidade Federal do Rio de Janeiro',
        bio: 'Pesquisadora na área de bibliometria e avaliação científica.'
      },
      { 
        nome: 'Prof. João Silva', 
        instituicao: 'Universidade de São Paulo',
        bio: 'Editor-chefe da Revista Brasileira de Ciências.'
      },
      { 
        nome: 'Dra. Maria Pereira', 
        instituicao: 'Instituto de Pesquisas Avançadas',
        bio: 'Especialista em acesso aberto e políticas científicas.'
      }
    ],
    agenda: [
      { horario: '15:00', atividade: 'Abertura e introdução' },
      { horario: '15:15', atividade: 'Painel 1: Acesso aberto - desafios e oportunidades' },
      { horario: '15:45', atividade: 'Painel 2: Métricas alternativas de impacto científico' },
      { horario: '16:15', atividade: 'Painel 3: IA na publicação científica' },
      { horario: '16:45', atividade: 'Perguntas e discussão aberta' }
    ],
    inscricao: {
      necessaria: true,
      taxa: 'Gratuito',
      link: '#inscricao',
      vagas: 500
    }
  },
  {
    id: '3',
    titulo: 'Workshop de Escrita Acadêmica',
    data: '10 de Julho de 2025',
    horario: '09:00 - 17:00',
    local: 'Campus da Universidade Federal, Rio de Janeiro',
    endereco: 'Av. Pedro Calmon, 550 - Cidade Universitária, Rio de Janeiro - RJ',
    imagem: '/images/evento-workshop.jpg',
    descricao: 'Um dia inteiro dedicado a aprimorar suas habilidades de escrita científica. O workshop abordará estrutura de artigos, citações, técnicas de redação clara e concisa, além de estratégias para publicação em periódicos de alto impacto.',
    facilitador: 'Prof. André Santos',
    biografia: 'Professor titular de Metodologia Científica, com mais de 200 artigos publicados em periódicos internacionais e mentor de mais de 50 pesquisadores.',
    agenda: [
      { horario: '09:00 - 10:30', atividade: 'Estrutura e organização de artigos científicos' },
      { horario: '10:30 - 10:45', atividade: 'Coffee break' },
      { horario: '10:45 - 12:30', atividade: 'Técnicas de escrita clara e objetiva' },
      { horario: '12:30 - 14:00', atividade: 'Almoço' },
      { horario: '14:00 - 15:30', atividade: 'Citações, referências e evitando plágio' },
      { horario: '15:30 - 15:45', atividade: 'Coffee break' },
      { horario: '15:45 - 17:00', atividade: 'Estratégias para publicação em periódicos de alto impacto' }
    ],
    inscricao: {
      necessaria: true,
      taxa: 'R$ 180,00 (estudantes) / R$ 250,00 (profissionais)',
      link: '#inscricao',
      vagas: 40,
      inclui: 'Material didático, certificado, coffee breaks e almoço'
    }
  },
  {
    id: '4',
    titulo: 'Feira do Livro Científico',
    data: '25-28 de Agosto de 2025',
    horario: '10:00 - 20:00',
    local: 'Centro de Convenções, Belo Horizonte',
    endereco: 'Av. Augusto de Lima, 785 - Centro, Belo Horizonte - MG',
    imagem: '/images/evento-feira.jpg',
    descricao: 'A maior feira de livros científicos do Brasil, com descontos especiais em todas as publicações. O evento contará com estandes de mais de 50 editoras científicas, palestras, lançamentos de livros e sessões de autógrafos com renomados autores.',
    destaques: [
      'Descontos de até 50% em livros científicos',
      'Lançamentos exclusivos',
      'Palestras com autores renomados',
      'Exposição de tecnologias educacionais'
    ],
    agenda: [
      { 
        dia: '25/08', 
        atividades: [
          { horario: '10:00', atividade: 'Cerimônia de abertura' },
          { horario: '11:00', atividade: 'Palestra: "Ciência Acessível" - Dr. Carlos Martins' },
          { horario: '14:30', atividade: 'Mesa redonda: "O Livro Científico na Era Digital"' },
          { horario: '16:00', atividade: 'Lançamento: "Fundamentos de Estatística Aplicada"' }
        ]
      },
      { 
        dia: '26/08', 
        atividades: [
          { horario: '10:30', atividade: 'Workshop: "Como publicar seu primeiro livro científico"' },
          { horario: '14:00', atividade: 'Palestra: "Divulgação Científica para o Grande Público"' },
          { horario: '16:30', atividade: 'Sessão de autógrafos: Profa. Ana Ribeiro' }
        ]
      },
      { 
        dia: '27/08', 
        atividades: [
          { horario: '11:00', atividade: 'Debate: "Ciência e Políticas Públicas"' },
          { horario: '15:00', atividade: 'Lançamento coletivo de obras da Compselects' },
          { horario: '17:30', atividade: 'Apresentação: "Novas Tecnologias na Educação Científica"' }
        ]
      },
      { 
        dia: '28/08', 
        atividades: [
          { horario: '10:00', atividade: 'Feira de oportunidades para jovens cientistas' },
          { horario: '13:30', atividade: 'Palestra de encerramento: "O Futuro da Ciência no Brasil"' },
          { horario: '16:00', atividade: 'Sorteio de livros e premiações' },
          { horario: '18:00', atividade: 'Encerramento oficial' }
        ]
      }
    ],
    inscricao: {
      necessaria: false,
      taxa: 'Entrada gratuita',
      observacao: 'Algumas atividades específicas requerem inscrição prévia, que pode ser feita no local.'
    }
  }
];

export default function EventoDetalhePage({ params }: { params: { id: string } }) {
  const evento = eventos.find(e => e.id === params.id);
  
  if (!evento) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/eventos" className="text-blue-600 hover:text-blue-800 flex items-center mb-6">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Voltar para Eventos
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="relative h-64 w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Imagem do evento</span>
        </div>
        
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{evento.titulo}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Informações</h2>
              <ul className="space-y-2">
                <li className="flex">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span><strong>Data:</strong> {evento.data}</span>
                </li>
                <li className="flex">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Horário:</strong> {evento.horario}</span>
                </li>
                <li className="flex">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span><strong>Local:</strong> {evento.local}</span>
                </li>
                {evento.endereco && (
                  <li className="flex">
                    <svg className="w-5 h-5 mr-2 text-blue-600 opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>{evento.endereco}</span>
                  </li>
                )}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Inscrição</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="mb-2"><strong>Necessária:</strong> {evento.inscricao.necessaria ? 'Sim' : 'Não'}</p>
                <p className="mb-2"><strong>Valor:</strong> {evento.inscricao.taxa}</p>
                {evento.inscricao.vagas && (
                  <p className="mb-2"><strong>Vagas limitadas:</strong> {evento.inscricao.vagas}</p>
                )}
                {evento.inscricao.inclui && (
                  <p className="mb-2"><strong>Inclui:</strong> {evento.inscricao.inclui}</p>
                )}
                {evento.inscricao.observacao && (
                  <p className="mb-2"><strong>Observação:</strong> {evento.inscricao.observacao}</p>
                )}
                {evento.inscricao.necessaria && (
                  <a 
                    href={evento.inscricao.link} 
                    className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Inscrever-se
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Sobre o Evento</h2>
            <p className="text-gray-700 leading-relaxed">{evento.descricao}</p>
          </div>
          
          {(evento.autor || evento.palestrantes || evento.facilitador) && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">
                {evento.autor ? 'Autor' : evento.facilitador ? 'Facilitador' : 'Palestrantes'}
              </h2>
              
              {evento.autor && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-1">{evento.autor}</h3>
                  {evento.biografia && <p className="text-gray-700">{evento.biografia}</p>}
                </div>
              )}
              
              {evento.facilitador && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-1">{evento.facilitador}</h3>
                  {evento.biografia && <p className="text-gray-700">{evento.biografia}</p>}
                </div>
              )}
              
              {evento.palestrantes && Array.isArray(evento.palestrantes) && evento.palestrantes.map((palestrante, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg mb-3 last:mb-0">
                  <h3 className="font-semibold text-lg mb-1">
                    {typeof palestrante === 'string' ? palestrante : palestrante.nome}
                  </h3>
                  {typeof palestrante !== 'string' && (
                    <>
                      {palestrante.instituicao && (
                        <p className="text-gray-600 mb-1">{palestrante.instituicao}</p>
                      )}
                      {palestrante.bio && (
                        <p className="text-gray-700">{palestrante.bio}</p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {evento.agenda && (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-3 text-blue-700">Programação</h2>
    
    {/* Verificamos se é uma programação por dias (verificando se o primeiro item tem 'atividades') */}
    {evento.agenda[0] && 'atividades' in evento.agenda[0] ? (
      // Programação por dias (como na feira)
      <div className="space-y-6">
        {evento.agenda.map((dia, index) => {
          // Garantindo o tipo correto
          if ('dia' in dia && 'atividades' in dia) {
            return (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">{dia.dia}</h3>
                <table className="w-full">
                  <tbody>
                    {dia.atividades.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-100' : ''}>
                        <td className="py-2 px-3 font-medium w-24">{item.horario}</td>
                        <td className="py-2 px-3">{item.atividade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          return null;
        })}
      </div>
    ) : (
      // Programação simples (um dia só)
      <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
        <tbody>
          {evento.agenda.map((item, index) => {
            // Garantindo o tipo correto
            if ('horario' in item && 'atividade' in item) {
              return (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="py-3 px-4 font-medium w-32 border-b border-gray-200">{item.horario}</td>
                  <td className="py-3 px-4 border-b border-gray-200">{item.atividade}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    )}
  </div>
)}
          
          {evento.destaques && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-blue-700">Destaques</h2>
              <ul className="list-disc pl-5 space-y-1">
                {evento.destaques.map((destaque, index) => (
                  <li key={index} className="text-gray-700">{destaque}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <Link 
              href="/eventos"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors mx-2"
            >
              Voltar para Eventos
            </Link>
            
            {evento.inscricao.necessaria && (
              <a 
                href={evento.inscricao.link}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors mx-2"
              >
                Inscrever-se
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}