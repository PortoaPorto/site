import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <ul className="flex-container">
      <li className="flex-item-1">
        <a href="/"><img className="logoTop" src="/logoPP.png" alt="Porto a Porto Acabamentos" /></a>
      </li>
      <li className="flex-item-2">
        <div className="submitLine">
          <input className="searchBar" type="text" />
          <button className="submitLente" type="submit">
          <FaSearch />
          </button>
        </div>
      </li>
      <li className="flex-item-3">
        Olá, visitante! <a href="#">Entre</a> ou <a href="#">Cadastre-se!</a>
      </li>
      <li className="flex-item-4">
        <FaShoppingCart />
      </li>
    </ul>
  );
};
    
export default Header;