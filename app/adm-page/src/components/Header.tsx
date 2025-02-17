import React from "react";
import "../styles/headerStyle.css";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png';
import lupa from '../assets/images/lupa.png';
import logo_carrinho from '../assets/images/logo_carrinho_compra.png';



const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="header-geral">
      <div className="header">
        <div className="logo-menu">
          <div>
            <a href="/">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>
          <div onClick={() => navigate("/")} className="nome-marca">
            <div>
              <h1 className="titulo">AUTO REI</h1>
            </div>
            <div>
              <h3 className="subtitulo">TINTAS AUTOMOTIVAS</h3>
            </div>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Busque por produtos, marcas e mais..."
            className="pesquisa-input"
            style={{
              backgroundImage: `url(${lupa})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "250px center",
              paddingRight: "40px",
            }}
          ></input>
        </div>
        <ul className="header-menu">
          <li>
            <img
              src={logo_carrinho}
              alt="logo de carrinho de compras"
              className="logo-carrinho"
            />
          </li>
          <li>
            <a href="/">
              <button className="botao-login">Fazer Login</button>
            </a>
          </li>
        </ul>
      </div>
      <div className="nav">
        <h1 onClick={() => navigate("/")}>Home</h1>
        <h1>Produtos</h1>
        <h1>Sobre a Loja</h1>
        <h1>Contato</h1>
        <h1>Assistência Técnica</h1>
      </div>
        
    </div>
  );
};

export default Header;
