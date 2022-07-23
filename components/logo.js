const Header = () => {
    return (
        <div className="grid">
          <div className="card cardTop1">
            <img className="logoTop" src="/logoPP.png" alt="Porto a Porto Acabamentos" />
          </div>

          <div className="card cardTop2">
            {/* <FontAwesomeIcon icon={faSearch} style={{ color: "#023857", position: "absolute", padding: "10px", minWidth: "40px" }} /> */}
            <input className="searchBar" type="text" placeholder="O que você procura? Digite aqui..."></input>
          </div>

          <div className="card cardTop3">
          Olá, visitante! <strong>Entre</strong> ou <strong>Cadastre-se!</strong>
          </div>

          <div className="card cardTop4">
            {/* <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#023857" }} /> */}
          </div>
        </div>
        );
    };
    
export default Header;