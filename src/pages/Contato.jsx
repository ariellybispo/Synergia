import "../contato.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ícones FontAwesome

export default function Contato() {
  return (
    <>
      <header className="navbar-contato">
        <div className="navbar">
          <div className="logo"></div>

          <nav>
            <a href="/#about">Sobre Nós</a>
            <a href="/landingpage">Início</a>
            <a href="/#how-it-works">Voluntário</a>
            <a href="/contato">Contato</a>
            <a href="/#projects">Projetos</a>
          </nav>
        </div>
      </header>

      <main className="contact-section">
        <div className="contact-container">
          {/* Lado esquerdo – informações */}
          <div className="contact-info">
            <h1>ENTRE EM CONTATO</h1>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>synergia.adm@outlook.com</p>
            </div>

            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+55 11 99999-9999</p>
            </div>

            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Street 487 House</p>
            </div>

            <div className="info-item instagram-icon">
              <i className="fab fa-instagram"></i>
            </div>
          </div>

          {/* Lado direito – formulário */}
          <div className="contact-form-card">
            <form className="contact-form">
              <label className="interesed-in-label">Estou interessado em:</label>

              <label htmlFor="name">Seu Nome</label>
              <input type="text" id="name" name="name" placeholder="João Pedro" />

              <label htmlFor="email">Seu Email</label>
              <input type="email" id="email" name="email" placeholder="email@gmail.com" />

              <label htmlFor="message">Sua Mensagem</label>
              <textarea id="message" name="message" rows="5"></textarea>

              <button type="submit" className="btn-send">
                Envie sua Mensagem
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
