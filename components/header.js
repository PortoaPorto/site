import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <a href="https://wa.me/5535997024673" target="_blank">
                <FaWhatsapp />
                <span className="messageHeader">Quer mais ofertas ou uma condição especial? Chama a gente no WhatsApp: (35) 9 9702-4673</span>
            </a>
        </div>
        );
    };
    
export default Header;