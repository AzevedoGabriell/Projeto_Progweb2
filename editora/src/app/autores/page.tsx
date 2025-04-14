import './style.css';
import Image from "next/image";
import Link from "next/link";

export default function AutoresPage() {
  return (
    <main className="autores-page">
      {/* Hero Section */}
      <section className="autores-hero">
        <div className="container">
          <h1 className="autores-hero-title">Nossos Autores</h1>
          <p className="autores-hero-subtitle">
            Conheça os talentosos escritores que colaboram com a Compselects e
            fazem parte da nossa comunidade editorial.
          </p>
        </div>
      </section>

      {/* Autores em Destaque */}
      <section className="autores-destaque section">
        <div className="container">
          <h2 className="section-title">Autores em Destaque</h2>

          <div className="autores-grid">
            {/* Autor 1 */}
            <div className="autor-card">
              <div className="autor-image-container">
                <Image
                  src="/images/autores/autor1.jpg"
                  alt="Prof. Carlos Silva"
                  width={300}
                  height={300}
                  className="autor-image"
                />
              </div>
              <div className="autor-info">
                <h3 className="autor-name">Prof. Carlos Silva</h3>
                <p className="autor-titulo">Doutor em Ciência da Computação</p>
                <p className="autor-bio">
                  Especialista em Inteligência Artificial e Machine Learning,
                  com mais de 15 anos de experiência acadêmica e diversos livros
                  publicados na área.
                </p>
                <div className="autor-publicacoes">
                  <span className="publicacoes-count">12 Publicações</span>
                  <Link
                    href="/autores/carlos-silva"
                    className="btn btn-outline btn-small"
                  >
                    Ver Perfil
                  </Link>
                </div>
              </div>
            </div>

            {/* Autor 2 */}
            <div className="autor-card">
              <div className="autor-image-container">
                <Image
                  src="/images/autores/autor2.jpg"
                  alt="Dra. Ana Oliveira"
                  width={300}
                  height={300}
                  className="autor-image"
                />
              </div>
              <div className="autor-info">
                <h3 className="autor-name">Dra. Ana Oliveira</h3>
                <p className="autor-titulo">PhD em Engenharia de Software</p>
                <p className="autor-bio">
                  Pesquisadora renomada em Métodos Ágeis e Desenvolvimento de
                  Software, com contribuições significativas para o avanço da
                  área no Brasil.
                </p>
                <div className="autor-publicacoes">
                  <span className="publicacoes-count">9 Publicações</span>
                  <Link
                    href="/autores/ana-oliveira"
                    className="btn btn-outline btn-small"
                  >
                    Ver Perfil
                  </Link>
                </div>
              </div>
            </div>

            {/* Autor 3 */}
            <div className="autor-card">
              <div className="autor-image-container">
                <Image
                  src="/images/autores/autor3.jpg"
                  alt="Prof. Ricardo Mendes"
                  width={300}
                  height={300}
                  className="autor-image"
                />
              </div>
              <div className="autor-info">
                <h3 className="autor-name">Prof. Ricardo Mendes</h3>
                <p className="autor-titulo">
                  Especialista em Segurança Cibernética
                </p>
                <p className="autor-bio">
                  Expert em Criptografia e Segurança de Redes, com experiência
                  tanto acadêmica quanto no setor privado. Autor de best-sellers
                  na área de segurança.
                </p>
                <div className="autor-publicacoes">
                  <span className="publicacoes-count">7 Publicações</span>
                  <Link
                    href="/autores/ricardo-mendes"
                    className="btn btn-outline btn-small"
                  >
                    Ver Perfil
                  </Link>
                </div>
              </div>
            </div>

            {/* Autor 4 */}
            <div className="autor-card">
              <div className="autor-image-container">
                <Image
                  src="/images/autores/autor4.jpg"
                  alt="Dra. Juliana Costa"
                  width={300}
                  height={300}
                  className="autor-image"
                />
              </div>
              <div className="autor-info">
                <h3 className="autor-name">Dra. Juliana Costa</h3>
                <p className="autor-titulo">
                  Pesquisadora em Sistemas Distribuídos
                </p>
                <p className="autor-bio">
                  Referência em computação em nuvem e arquiteturas distribuídas,
                  com trabalhos premiados internacionalmente e uma abordagem
                  inovadora em seus livros.
                </p>
                <div className="autor-publicacoes">
                  <span className="publicacoes-count">5 Publicações</span>
                  <Link
                    href="/autores/juliana-costa"
                    className="btn btn-outline btn-small"
                  >
                    Ver Perfil
                  </Link>
                </div>
              </div>
            </div>

            {/* Autor 5 */}
            <div className="autor-card">
              <div className="autor-image-container">
                <Image
                  src="/images/autores/autor5.jpg"
                  alt="Prof. Eduardo Santos"
                  width={300}
                  height={300}
                  className="autor-image"
                />
              </div>
              <div className="autor-info">
                <h3 className="autor-name">Prof. Eduardo Santos</h3>
                <p className="autor-titulo">
                  Especialista em Algoritmos e Estruturas de Dados
                </p>
                <p className="autor-bio">
                  Autor de livros didáticos amplamente adotados em universidades
                  brasileiras. Seu estilo claro e objetivo tornou conceitos
                  complexos acessíveis a milhares de estudantes.
                </p>
                <div className="autor-publicacoes">
                  <span className="publicacoes-count">11 Publicações</span>
                  <Link
                    href="/autores/eduardo-santos"
                    className="btn btn-outline btn-small"
                  >
                    Ver Perfil
                  </Link>
                </div>
              </div>
            </div>

            {/* Autor 6 */}
            <div className="autor-card">
              <div className="autor-image-container">
                <Image
                  src="/images/autores/autor6.jpg"
                  alt="Dra. Fernanda Lima"
                  width={300}
                  height={300}
                  className="autor-image"
                />
              </div>
              <div className="autor-info">
                <h3 className="autor-name">Dra. Fernanda Lima</h3>
                <p className="autor-titulo">
                  Pesquisadora em Interface Homem-Computador
                </p>
                <p className="autor-bio">
                  Pioneira em estudos de usabilidade e experiência do usuário no
                  Brasil. Seus livros combinam teoria sólida com aplicações
                  práticas no desenvolvimento de interfaces.
                </p>
                <div className="autor-publicacoes">
                  <span className="publicacoes-count">8 Publicações</span>
                  <Link
                    href="/autores/fernanda-lima"
                    className="btn btn-outline btn-small"
                  >
                    Ver Perfil
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="ver-mais-container">
            <Link href="/autores/todos" className="btn btn-primary">
              Ver Todos os Autores
            </Link>
          </div>
        </div>
      </section>

      {/* Seja um Autor */}
      <section className="seja-autor section">
        <div className="container">
          <div className="seja-autor-container">
            <div className="seja-autor-content">
              <h2 className="seja-autor-title">Seja um Autor Compselects</h2>
              <p className="seja-autor-text">
                A Compselects está sempre em busca de novos talentos e
                especialistas para enriquecer nosso catálogo de publicações em
                Ciência da Computação e áreas correlatas. Se você tem uma
                proposta de livro, manual, ou material didático, queremos
                conhecer seu trabalho.
              </p>

              <h3 className="beneficios-title">Por que publicar conosco?</h3>
              <ul className="beneficios-list">
                <li>Alcance acadêmico e profissional em todo o Brasil</li>
                <li>
                  Processo editorial de alta qualidade e suporte especializado
                </li>
                <li>Distribuição em múltiplos formatos (impresso e digital)</li>
                <li>Marketing direcionado ao público da área de tecnologia</li>
                <li>
                  Royalties competitivos e transparência em todo o processo
                </li>
                <li>
                  Oportunidades para eventos e workshops como autor Compselects
                </li>
              </ul>

              <h3 className="requisitos-title">Requisitos para submissão</h3>
              <ul className="requisitos-list">
                <li>
                  Formação acadêmica ou experiência profissional comprovada na
                  área
                </li>
                <li>
                  Proposta original e relevante para a comunidade de computação
                </li>
                <li>
                  Compromisso com prazos e processo editorial colaborativo
                </li>
                <li>
                  Material inédito ou com direitos autorais devidamente
                  esclarecidos
                </li>
              </ul>

              <Link href="/submissoes" className="btn btn-primary mt-6">
                Envie sua Proposta
              </Link>
            </div>
            <div className="seja-autor-image">
              <Image
                src="/images/seja-autor.jpg"
                alt="Processo Editorial Compselects"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="depoimentos section">
        <div className="container">
          <h2 className="section-title">O que nossos autores dizem</h2>

          <div className="depoimentos-container">
            {/* Depoimento 1 */}
            <div className="depoimento-card">
              <div className="depoimento-quote">
                <svg
                  className="quote-icon"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    fill="currentColor"
                    d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                  />
                </svg>
              </div>
              <p className="depoimento-texto">
                Publicar com a Compselects foi uma experiência transformadora
                para minha carreira acadêmica. O processo editorial foi
                impecável e o suporte durante toda a produção superou minhas
                expectativas.
              </p>
              <div className="depoimento-autor">
                <div className="depoimento-autor-foto">
                  <Image
                    src="/images/autores/depoimento1.jpg"
                    alt="Prof. Dr. André Cardoso"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="depoimento-autor-info">
                  <h4 className="depoimento-autor-nome">
                    Prof. Dr. André Cardoso
                  </h4>
                  <p className="depoimento-autor-instituicao">
                    Universidade Federal de São Paulo
                  </p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="depoimento-card">
              <div className="depoimento-quote">
                <svg
                  className="quote-icon"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    fill="currentColor"
                    d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                  />
                </svg>
              </div>
              <p className="depoimento-texto">
                O que mais me impressionou foi o alcance que meu livro obteve. A
                estratégia de divulgação da Compselects fez com que minha obra
                chegasse a universidades de todo o país, algo que dificilmente
                conseguiria por conta própria.
              </p>
              <div className="depoimento-autor">
                <div className="depoimento-autor-foto">
                  <Image
                    src="/images/autores/depoimento2.jpg"
                    alt="Dra. Patricia Alves"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="depoimento-autor-info">
                  <h4 className="depoimento-autor-nome">Dra. Patricia Alves</h4>
                  <p className="depoimento-autor-instituicao">
                    Instituto de Tecnologia de Brasília
                  </p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="depoimento-card">
              <div className="depoimento-quote">
                <svg
                  className="quote-icon"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    fill="currentColor"
                    d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                  />
                </svg>
              </div>
              <p className="depoimento-texto">
                Como autor de primeira viagem, eu estava apreensivo sobre todo o
                processo. A equipe da Compselects me guiou em cada etapa, desde
                o refinamento do conteúdo até estratégias de promoção após o
                lançamento.
              </p>
              <div className="depoimento-autor">
                <div className="depoimento-autor-foto">
                  <Image
                    src="/images/autores/depoimento3.jpg"
                    alt="Prof. Lucas Martins"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="depoimento-autor-info">
                  <h4 className="depoimento-autor-nome">Prof. Lucas Martins</h4>
                  <p className="depoimento-autor-instituicao">
                    Universidade Estadual do Rio de Janeiro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA para Submissão */}
      <section className="cta-submissao">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para dar o próximo passo?</h2>
            <p className="cta-text">
              Transforme seu conhecimento em uma publicação de impacto e
              junte-se ao nosso seleto grupo de autores.
            </p>
            <div className="cta-buttons">
              <Link href="/submissoes" className="btn btn-primary">
                Enviar Proposta de Livro
              </Link>
              <Link href="/contato" className="btn btn-secondary">
                Fale com Nossa Equipe Editorial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}