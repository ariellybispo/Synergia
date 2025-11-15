export default function Perfil() {
  return (
    <>
      <header className="navbar-contato">
        <div className="navbar">
          <div className="logo"></div>
          <nav>
            <a href="#about">Sobre Nós</a>
            <a href="/landingpage">Início</a>
            <a href="/landingpage">Voluntário</a>
            <a href="/contato">Contato</a>
            <a href="#projects">Projetos</a>
          </nav>
        </div>
      </header>

      <main className="perfil-container">
        <h2 className="titulo-perfil">Meu Perfil</h2>

        <section className="info-usuario">
          <div className="foto-usuario">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Foto de perfil"
            />
            <i className="fas fa-pen editar-foto"></i>
          </div>

          <div className="dados-usuario">
            <h3 className="nome-usuario">Arelly linda</h3>
            <p className="local-usuario">Local: São Paulo, SP</p>

            <label htmlFor="nome">Nome Completo:</label>
            <input type="text" id="nome" defaultValue="Arelly Pinto Da Silva" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" defaultValue="Pintodasilva@gmail.com" />
          </div>
        </section>

        <section className="meus-locais">
          <h3>Meus Locais:</h3>
          <p>
            Estes são os locais onde você decidiu agir e colocar a mão na massa para transformar o mundo!
            Sua participação mostra que pequenas atitudes geram grandes mudanças.
          </p>

          <div className="card-local">
            <img
              src="img/Captura de tela 2025-11-11 204254.png"
              alt="Voluntário no Guarujá"
            />

            <div className="card-info">
              <p className="card-category">Guarujá</p>
              <h5 className="card-title">Litoral e Praias</h5>
              <p className="card-description">
                Projeto de limpeza de praias e proteção da vida marinha. Ajude a remover o lixo plástico do oceano.
              </p>
              <button className="btn-detalhes">Ver Detalhes</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
