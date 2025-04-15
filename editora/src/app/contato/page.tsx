import './style.css';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-hero-title">Entre em Contato</h1>
          <p className="contact-hero-subtitle">
            Tem dúvidas, sugestões ou quer saber mais sobre nossos serviços? Fale conosco!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="contact-content">
          {/* Contact Form */}
          <section className="contact-form-section">
            <h2 className="section-title">Envie sua Mensagem</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FiUser /> Nome Completo*
                  </label>
                  <input type="text" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <FiMail /> Email*
                  </label>
                  <input type="email" id="email" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  <FiPhone /> Telefone
                </label>
                <input type="tel" id="phone" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <FiMessageSquare /> Assunto*
                </label>
                <select id="subject" required>
                  <option value="">Selecione um assunto</option>
                  <option value="author">Dúvida sobre Submissões</option>
                  <option value="reader">Dúvida sobre Publicações</option>
                  <option value="event">Informações sobre Eventos</option>
                  <option value="other">Outro Assunto</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem*</label>
                <textarea id="message" rows={6} required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <FiSend /> Enviar Mensagem
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section className="contact-info-section">
            <h2 className="section-title">Informações de Contato</h2>
            
            <div className="contact-info-card">
              <div className="info-item">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div className="info-content">
                  <h3>Endereço</h3>
                  <p>Rua das Publicações, 123<br />Centro, São Paulo - SP<br />CEP: 01000-000</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div className="info-content">
                  <h3>Telefones</h3>
                  <p>
                    <strong>Editorial:</strong> (11) 9999-9999<br />
                    <strong>Comercial:</strong> (11) 8888-8888<br />
                    <strong>Assinaturas:</strong> (11) 7777-7777
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div className="info-content">
                  <h3>Emails</h3>
                  <p>
                    <strong>Autores:</strong> autores@editora.com.br<br />
                    <strong>Leitores:</strong> contato@editora.com.br<br />
                    <strong>Eventos:</strong> eventos@editora.com.br
                  </p>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h3>Horário de Funcionamento</h3>
              <p>
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h<br />
                Domingo: Fechado
              </p>
            </div>
          </section>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <h2 className="section-title">Onde Estamos</h2>
          <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.788156990627!2d-35.91154192501906!3d-7.210859392736212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e4b4c4f4455%3A0x6e7083cee5a7c602!2sUniversidade%20Federal%20de%20Campina%20Grande%20-%20Campus%20I!5e0!3m2!1spt-BR!2sbr!4v1718567893508!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Localização da UFCG - Campus I"
    ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}