export default function Login() {
  return (
    <div className="background-container">
      <header className="logo">
        <span className="logo-text">Synergia</span>
      </header>

      <div className="login-card-container">
        <div className="login-card">
          <h1 className="card-title">LOGIN</h1>

          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" />
            </div>

            <button type="submit" className="btn btn-login-final">
              Entrar
            </button>
          </form>

          <p className="login-text">
            Esqueceu sua senha?{" "}
            <a href="/esquecisenha" className="register-link-highlight">
              Clique aqui
            </a>
          </p>

          <p className="login-text">
            Não possui conta? Faça{" "}
            <a href="/cadastro" className="register-link-highlight">
              Cadastro
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
