import "./style.css";
import Image from "next/image";
import Link from "next/link";

export default function SobreNos() {
  return (
    <main className="sobre-nos-page">
      {/* Hero Section */}
      <section className="sobre-hero">
        <div className="container mx-auto px-4">
          <div className="sobre-hero-content">
            <h1 className="sobre-hero-title">Sobre a CompSelects</h1>
            <p className="sobre-hero-subtitle">
              Promovendo o conhecimento e a inovação na área de computação desde
              2010
            </p>
          </div>
        </div>
      </section>

      {/* História e Missão */}
      <section className="sobre-section">
        <div className="container mx-auto px-4">
          <div className="sobre-section-header">
            <h2 className="sobre-section-title">Nossa História e Missão</h2>
            <div className="sobre-section-divider"></div>
          </div>

          <div className="sobre-historia-grid">
            <div className="sobre-historia-content">
              <h3 className="sobre-subsection-title">Como Tudo Começou</h3>
              <p className="sobre-text">
                Fundada em 2010 por um grupo de professores universitários e
                profissionais da área de tecnologia, a CompSelects nasceu com a
                missão de preencher uma lacuna no mercado editorial brasileiro:
                a falta de publicações especializadas de alta qualidade em
                ciência da computação e tecnologia da informação.
              </p>
              <p className="sobre-text">
                O que começou como uma pequena iniciativa acadêmica cresceu para
                se tornar uma das principais editoras especializadas em
                computação no Brasil, com mais de 200 títulos publicados e uma
                rede de mais de 500 autores e pesquisadores colaboradores.
              </p>

              <h3 className="sobre-subsection-title">Nossa Missão</h3>
              <p className="sobre-text">
                Promover o avanço do conhecimento e da inovação na área de
                computação através da publicação de conteúdo de alta qualidade,
                acessível e relevante para estudantes, profissionais e
                pesquisadores.
              </p>

              <h3 className="sobre-subsection-title">Nossos Valores</h3>
              <ul className="sobre-valores-list">
                <li>
                  <span className="valor-titulo">Excelência Acadêmica</span>
                  <p>
                    Compromisso com o rigor científico e a qualidade das
                    publicações
                  </p>
                </li>
                <li>
                  <span className="valor-titulo">Inovação</span>
                  <p>
                    Busca constante por novas tecnologias e abordagens
                    pedagógicas
                  </p>
                </li>
                <li>
                  <span className="valor-titulo">Acessibilidade</span>
                  <p>
                    Democratização do conhecimento através de conteúdo acessível
                  </p>
                </li>
                <li>
                  <span className="valor-titulo">Colaboração</span>
                  <p>
                    Valorização do trabalho em rede e das parcerias
                    institucionais
                  </p>
                </li>
                <li>
                  <span className="valor-titulo">Responsabilidade Social</span>
                  <p>
                    Compromisso com a formação de profissionais éticos e
                    conscientes
                  </p>
                </li>
              </ul>
            </div>
            <div className="sobre-historia-image">
              <Image
                src="/api/placeholder/500/700"
                alt="História da CompSelects"
                width={500}
                height={700}
                className="sobre-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="sobre-section sobre-team-section">
        <div className="container mx-auto px-4">
          <div className="sobre-section-header">
            <h2 className="sobre-section-title">Nossa Equipe</h2>
            <div className="sobre-section-divider"></div>
          </div>
          <p className="sobre-team-intro">
            Nossa equipe é composta por profissionais apaixonados por tecnologia
            e educação, dedicados a levar o melhor conteúdo em computação para o
            público brasileiro.
          </p>

          <div className="sobre-team-grid">
            {/* Editor Chefe */}
            <div className="sobre-team-card">
              <div className="sobre-team-image-container">
                <Image
                  src="/api/placeholder/300/300"
                  alt="Dra. Ana Mendes"
                  width={300}
                  height={300}
                  className="sobre-team-image"
                />
              </div>
              <div className="sobre-team-info">
                <h3 className="sobre-team-name">Dra. Ana Mendes</h3>
                <p className="sobre-team-role">Editora-Chefe</p>
                <p className="sobre-team-bio">
                  Doutora em Ciência da Computação pela USP, com mais de 20 anos
                  de experiência em pesquisa na área de inteligência artificial
                  e computação distribuída.
                </p>
              </div>
            </div>

            {/* Diretor Editorial */}
            <div className="sobre-team-card">
              <div className="sobre-team-image-container">
                <Image
                  src="/api/placeholder/300/300"
                  alt="Prof. Ricardo Silva"
                  width={300}
                  height={300}
                  className="sobre-team-image"
                />
              </div>
              <div className="sobre-team-info">
                <h3 className="sobre-team-name">Prof. Ricardo Silva</h3>
                <p className="sobre-team-role">Diretor Editorial</p>
                <p className="sobre-team-bio">
                  Mestre em Engenharia de Software pela UNICAMP, especialista em
                  metodologias ágeis e processos de desenvolvimento de software.
                </p>
              </div>
            </div>

            {/* Coordenadora de Revisão */}
            <div className="sobre-team-card">
              <div className="sobre-team-image-container">
                <Image
                  src="/api/placeholder/300/300"
                  alt="Carla Torres"
                  width={300}
                  height={300}
                  className="sobre-team-image"
                />
              </div>
              <div className="sobre-team-info">
                <h3 className="sobre-team-name">Carla Torres</h3>
                <p className="sobre-team-role">Coordenadora de Revisão</p>
                <p className="sobre-team-bio">
                  Especialista em revisão técnica com formação em Letras e
                  especialização em editoração eletrônica e publicação digital.
                </p>
              </div>
            </div>

            {/* Gerente de Projetos */}
            <div className="sobre-team-card">
              <div className="sobre-team-image-container">
                <Image
                  src="/api/placeholder/300/300"
                  alt="Paulo Martins"
                  width={300}
                  height={300}
                  className="sobre-team-image"
                />
              </div>
              <div className="sobre-team-info">
                <h3 className="sobre-team-name">Paulo Martins</h3>
                <p className="sobre-team-role">Gerente de Projetos</p>
                <p className="sobre-team-bio">
                  MBA em Gestão de Projetos pela FGV, com experiência em
                  coordenação de equipes multidisciplinares e desenvolvimento de
                  produtos editoriais.
                </p>
              </div>
            </div>

            {/* Designer Chefe */}
            <div className="sobre-team-card">
              <div className="sobre-team-image-container">
                <Image
                  src="/api/placeholder/300/300"
                  alt="Laura Costa"
                  width={300}
                  height={300}
                  className="sobre-team-image"
                />
              </div>
              <div className="sobre-team-info">
                <h3 className="sobre-team-name">Laura Costa</h3>
                <p className="sobre-team-role">Designer Chefe</p>
                <p className="sobre-team-bio">
                  Especialista em design editorial com formação em Design
                  Gráfico e mais de 10 anos de experiência em produção de livros
                  técnicos e científicos.
                </p>
              </div>
            </div>

            {/* Revisor Técnico */}
            <div className="sobre-team-card">
              <div className="sobre-team-image-container">
                <Image
                  src="/api/placeholder/300/300"
                  alt="Dr. Fernando Gomes"
                  width={300}
                  height={300}
                  className="sobre-team-image"
                />
              </div>
              <div className="sobre-team-info">
                <h3 className="sobre-team-name">Dr. Fernando Gomes</h3>
                <p className="sobre-team-role">Revisor Técnico Sênior</p>
                <p className="sobre-team-bio">
                  Doutor em Sistemas de Informação pela UFRJ, com expertise em
                  banco de dados, big data e análise de dados complexos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="sobre-section sobre-partners-section">
        <div className="container mx-auto px-4">
          <div className="sobre-section-header">
            <h2 className="sobre-section-title">Nossos Parceiros</h2>
            <div className="sobre-section-divider"></div>
          </div>
          <p className="sobre-partners-intro">
            Contamos com o apoio e colaboração de importantes instituições e
            empresas que compartilham nossa visão sobre a importância da
            disseminação do conhecimento em computação.
          </p>

          <div className="sobre-partners-grid">
            {/* Universidades */}
            <div className="sobre-partners-category">
              <h3 className="sobre-subsection-title">Parceiros Acadêmicos</h3>
              <div className="sobre-partners-logos">
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="USP"
                    width={180}
                    height={100}
                  />
                  <p>Universidade de São Paulo</p>
                </div>
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="UNICAMP"
                    width={180}
                    height={100}
                  />
                  <p>Universidade Estadual de Campinas</p>
                </div>
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="UFRJ"
                    width={180}
                    height={100}
                  />
                  <p>Universidade Federal do Rio de Janeiro</p>
                </div>
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="PUC-Rio"
                    width={180}
                    height={100}
                  />
                  <p>Pontifícia Universidade Católica do Rio</p>
                </div>
              </div>
            </div>

            {/* Empresas */}
            <div className="sobre-partners-category">
              <h3 className="sobre-subsection-title">Parceiros Corporativos</h3>
              <div className="sobre-partners-logos">
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="TechBrasil"
                    width={180}
                    height={100}
                  />
                  <p>TechBrasil</p>
                </div>
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="Instituto Inovação"
                    width={180}
                    height={100}
                  />
                  <p>Instituto Inovação</p>
                </div>
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="DataOne"
                    width={180}
                    height={100}
                  />
                  <p>DataOne</p>
                </div>
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="SoftLabs"
                    width={180}
                    height={100}
                  />
                  <p>SoftLabs</p>
                </div>
              </div>
            </div>

            {/* Associações */}
            <div className="sobre-partners-category">
              <h3 className="sobre-subsection-title">
                Associações e Entidades
              </h3>
              <div className="sobre-partners-logos">
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="SBC"
                    width={180}
                    height={100}
                  />
                  <p>Sociedade Brasileira de Computação</p>
                </div>
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="ABES"
                    width={180}
                    height={100}
                  />
                  <p>Associação Brasileira das Empresas de Software</p>
                </div>
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="CBL"
                    width={180}
                    height={100}
                  />
                  <p>Câmara Brasileira do Livro</p>
                </div>
                <div className="sobre-partner-logo">
                  <Image
                    src="/api/placeholder/180/100"
                    alt="FAPESP"
                    width={180}
                    height={100}
                  />
                  <p>Fundação de Amparo à Pesquisa do Estado de SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sobre-cta-section">
        <div className="container mx-auto px-4">
          <div className="sobre-cta-content">
            <h2 className="sobre-cta-title">Faça Parte da Nossa História</h2>
            <p className="sobre-cta-text">
              Seja autor, revisor ou parceiro institucional, junte-se a nós na
              missão de promover o conhecimento e a inovação na área de
              computação.
            </p>
            <div className="sobre-cta-buttons">
              <Link href="/submissoes" className="btn btn-primary">
                Submeta seu trabalho
              </Link>
              <Link href="/contato" className="btn btn-secondary">
                Entre em contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
