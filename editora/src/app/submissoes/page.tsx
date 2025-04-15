import './style.css';
import Link from 'next/link';

export default function SubmissoesPage() {
  return (
    <div className="submission-page">
      {/* Hero Section */}
      <section className="submission-hero">
        <div className="container">
          <h1 className="submission-hero-title">Submissão de Manuscritos</h1>
          <p className="submission-hero-subtitle">
            Envie seu trabalho para avaliação e potencial publicação em nossa editora
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        {/* Submission Guide */}
        <section className="submission-section">
          <h2 className="section-title">Guia de Submissão</h2>
          <div className="submission-content">
            <h3>Diretrizes para Autores</h3>
            <p>
              Para garantir um processo de avaliação eficiente, todos os manuscritos devem seguir as seguintes diretrizes:
            </p>
            <ul className="submission-list">
              <li>O trabalho deve ser original e não publicado anteriormente</li>
              <li>Formato do documento: PDF ou DOCX</li>
              <li>Tamanho máximo do arquivo: 10MB</li>
              <li>Fonte: Times New Roman, tamanho 12, espaçamento 1.5</li>
              <li>Estrutura clara com título, autores, resumo, introdução, metodologia, resultados, discussão e referências</li>
              <li>Referências no formato APA (7ª edição)</li>
            </ul>

            <h3>Processo de Revisão</h3>
            <p>
              Todos os manuscritos passam por um rigoroso processo de revisão por pares:
            </p>
            <ol className="submission-list">
              <li>Triagem inicial pela equipe editorial</li>
              <li>Revisão por pelo menos dois especialistas na área</li>
              <li>Comunicação da decisão: aceito, aceito com modificações ou rejeitado</li>
              <li>Período médio de avaliação: 4-6 semanas</li>
            </ol>
          </div>
        </section>

        {/* Submission Form */}
        <section className="submission-section">
          <h2 className="section-title">Formulário de Submissão</h2>
          <form className="submission-form">
            <div className="form-group">
              <label htmlFor="title">Título do Trabalho*</label>
              <input type="text" id="title" required />
            </div>

            <div className="form-group">
              <label htmlFor="authors">Autores*</label>
              <textarea 
                id="authors" 
                required 
                placeholder="Liste todos os autores no formato: Nome Completo, Afiliação, Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="abstract">Resumo*</label>
              <textarea 
                id="abstract" 
                required 
                placeholder="Resumo de 150-250 palavras em português e inglês" 
                rows={5}
              />
            </div>

            <div className="form-group">
              <label htmlFor="keywords">Palavras-chave*</label>
              <input 
                type="text" 
                id="keywords" 
                required 
                placeholder="3-5 palavras-chave, separadas por vírgula" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="file">Upload do Arquivo*</label>
              <input type="file" id="file" accept=".pdf,.docx" required />
              <p className="form-hint">Formatos aceitos: PDF ou DOCX (máx. 10MB)</p>
            </div>

            <div className="form-group checkbox-group">
              <input type="checkbox" id="agreement" required />
              <label htmlFor="agreement">
                Eu confirmo que li e concordo com a <Link href="#editorial-policy">Política Editorial</Link> e que este trabalho é original e não foi publicado anteriormente.
              </label>
            </div>

            <button type="submit" className="btn btn-primary">Enviar Submissão</button>
          </form>
        </section>

        {/* Editorial Policy */}
        <section id="editorial-policy" className="submission-section">
          <h2 className="section-title">Política Editorial</h2>
          <div className="submission-content">
            <h3>Ética na Publicação</h3>
            <p>
              Nossa editora adere aos mais altos padrões de ética na publicação acadêmica, seguindo as diretrizes do COPE (Committee on Publication Ethics).
            </p>

            <h3>Direitos Autorais</h3>
            <p>
              Os autores mantêm os direitos autorais de seus trabalhos, concedendo à editora o direito de primeira publicação. Os trabalhos são licenciados sob Creative Commons Attribution 4.0 International License.
            </p>

            <h3>Política de Acesso Aberto</h3>
            <p>
              Todos os trabalhos publicados estão disponíveis gratuitamente, permitindo que os leitores leiam, baixem, copiem, distribuam, imprimam ou lincem os textos completos.
            </p>

            <h3>Taxas de Publicação</h3>
            <p>
              Não cobramos taxas para submissão ou publicação de artigos. Nosso compromisso é com a disseminação aberta do conhecimento acadêmico.
            </p>

            <h3>Política de Privacidade</h3>
            <p>
              Os nomes e endereços de e-mail fornecidos serão usados exclusivamente para os fins declarados desta revista e não estarão disponíveis para nenhum outro propósito.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}