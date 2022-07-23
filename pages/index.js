import Head from 'next/head';
import Header from "../components/header";
import Logo from "../components/logo";
import Menu from "../components/menu";
import Slider from "../components/slider";

function Home() {
  return (
    <>
      <Head>
        <title>Porto a Porto Acabamentos | O melhor para a sua obra!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Logo />
      <Menu />
      <Slider />
    </>
  );
}

export default Home;
