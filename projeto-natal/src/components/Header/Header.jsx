import "./Header.css";
import img1 from "../../assets/img1.png";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <header>
        <div className="description">
            <img src={logo} alt="logo do site" />
          <h1>Uma <span>plataforma de doação</span> para espalhar alegria</h1>
          <p>
            Nessas festas de fim de ano mande um presente para a pessoa amada e
            compartilhe a alegria do Natal.
          </p>
          <button>Fazer uma Doação</button>
        </div>

        <div className="card">
          <img src={img1} alt="desenho de uma loja" />
        </div>
      </header>
    </>
  );
}

export default Header;
