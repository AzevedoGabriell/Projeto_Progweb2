import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">30 Anos de Excelência em Publicações de Computação</h2>
            <p className="about-text">
              A Editora Compselects tem reafirmado constantemente o seu compromisso com a ciência e com a 
              democratização do conhecimento da computação. Já são mais de 200 livros publicados e diversos 
              livros reconhecidos e adotados por ilustres professores da área.
            </p>
            <div className="about-buttons">
              <button className="btn btn-primary">Nossa História Completa</button>
              <button className="btn btn-outline">Conheça Nossa Equipe</button>
            </div>
          </div>
          <div className="about-image">
            <Image
              src="/images/about-office.jpg"
              alt="Escritório da Compselects"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}