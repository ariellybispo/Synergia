import "../esquecisenha.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function EsqueciSenha() {
  return (
    <div className="background-container">
      <header className="logo">
        <span className="logo-text">Synergia</span>
      </header>

      <div className="login-card-container">
        <div className="login-card">
          <h1 className="card-title">REDEFINIR SENHA</h1>

          <form className="redefinir-senha-form">
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" />
            </div>

            <button type="submit" className="btn btn-send">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
