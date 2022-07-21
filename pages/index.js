import Head from 'next/head'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Porto a Porto Acabamentos | O melhor para a sua obra!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="header">
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: "white", padding: "0.3rem" }} />
          <span className="messageHeader">Quer mais ofertas ou uma condição especial? Chama a gente no WhatsApp: (35) 9 9702-4673.</span>
        </div>

        <div className="grid">
          <div className="card cardTop1">
            <img className="logoTop" src="/logoPP.png" alt="Porto a Porto Acabamentos" />
          </div>

          <div className="card cardTop2">
            <FontAwesomeIcon icon={faSearch} style={{ color: "#023857", position: "absolute", padding: "10px", minWidth: "40px" }} />
            <input className="searchBar" type="text" placeholder="O que você procura? Digite aqui..."></input>
          </div>

          <div className="card cardTop3">
          Olá, visitante! <strong>Entre</strong> ou <strong>Cadastre-se!</strong>
          </div>

          <div className="card cardTop4">
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#023857" }} />
          </div>
        </div>

        <div className="mainMenu">
          <ul className="mainMenu">
            <li>
              <a href="#">
                TODOS OS PRODUTOS
              </a>
            </li>

            <li>
              <a href="#">
                OFERTAS
              </a>
            </li>

            <li>
              <a href="#">
                Revestimentos
              </a>
            </li>

            <li>
              <a href="#">
                Móveis
              </a>
            </li>

            <li>
              <a href="#">
                Louças e Metais
              </a>
            </li>

            <li>
              <a href="#">
                Serviços
              </a>
            </li>

            <li>
              <a href="#">
                Persianas
              </a>
            </li>

            <li>
              <a href="#">
                Luminárias
              </a>
            </li>

            <li>
              <a href="#">
                Telhas
              </a>
            </li>

            <li>
              <a href="#">
                Papéis de Parede
              </a>
            </li>

          </ul>
        </div>

        <div className="slider">
          <img className="sliderImg" src="/slider1.jpg" alt="Slider" />
        </div>
        
      </main>

      <style jsx>
        {`
          .container {
            min-height: 100vh;
            padding: 0;
            display: flex;
            flex-direction: column;
          }

          main {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .header {
            display: flex;
            background-color: #023857;
            justify-content: center;
            width: 100%;
            padding: 0.3rem;
            color: #FFFFFF;
            font-weight: bold;
            font-size: 0.9rem;
          }

          .messageHeader {
            text-align: center;
          }
          
          .grid {
            display: flex;
            align-items: stretch;
            flex-wrap: wrap;
            max-width: 100%;
            margin-top: 1rem;
            justify-content: center;
          }

          .card {
            padding: 1rem;
            text-align: left;
            color: inherit;
            align-self: center;
          }

          .cardTop1 { flex-basis: 15%; padding: 2rem; }
          .cardTop2 { flex-basis: 30%; padding: 2rem; width: 100%; margin-bottom: 10px; }
          .cardTop3 { flex-basis: 25%; padding: 2rem; }
          .cardTop4 { flex-basis: 5%; padding: 2rem; }

          .logoTop {
            height: 100px;
          }

          .searchBar {
            width: 100%;
            padding: 1rem;
            border: 1px solid #023857;
            border-radius: 2rem;
          }

          ul.mainMenu {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #a1cb38;
          }
          
          .mainMenu li {
             float: left;
          }
          
          .mainMenu li a {
            display: block;
            color: #1a1a1a;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-weight: bold;
          }

          .sliderImg {
            width: 100%;
          }

        `}
      </style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
