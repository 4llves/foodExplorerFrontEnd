import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import CookiePng from '../../assets/cookie.png'
import { Card } from "../../components/Card";

import SaladaRavanello from "../../assets/SaladaRavanello.png"
import SpaguettiGambe from "../../assets/SpaguettiGambe.png"



export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <div className="head">
          <img src={CookiePng} alt="" />


          <div className="text">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>

        <section>
          <h2>Refeições</h2>

          <div className="cards">
            <Card
              img={SaladaRavanello}
              title="Salada Ravanello"
              price={40}
              amount={20}
            />

            <Card
              img={SpaguettiGambe}
              title="Spaguetti Gambe"
              price={39}
              amount={5}
            />

            <Card
              img={SpaguettiGambe}
              title="Spaguetti Gambe"
              price={39}
              amount={5}
            />

            <Card
              img={SpaguettiGambe}
              title="Spaguetti Gambe"
              price={39}
              amount={5}
            />
          </div>
        </section>

        <section>
          <h2>Pratos Principais</h2>
          <div className="cards">
            <Card
              img={SaladaRavanello}
              title="Salada Ravanello"
              price={40}
              amount={20}
            />

            <Card
              img={SpaguettiGambe}
              title="Spaguetti Gambe"
              price={39}
              amount={5}
            />

            <Card
              img={SpaguettiGambe}
              title="Spaguetti Gambe"
              price={39}
              amount={5}
            />

            <Card
              img={SpaguettiGambe}
              title="Spaguetti Gambe"
              price={39}
              amount={5}
            />
          </div>
        </section>

        <section>
          <h2>Pratos Principais</h2>
          <div className="cards">
            <Card
              img={SaladaRavanello}
              title="Salada Ravanello"
              price={40}
              amount={20}
            />

            <Card
              img={SpaguettiGambe}
              title="Spaguetti Gambe"
              price={39}
              amount={5}
            />

            <Card
              img={SpaguettiGambe}
              title="Spaguetti Gambe"
              price={39}
              amount={5}
            />

            <Card
              img={SpaguettiGambe}
              title="Spaguetti Gambe"
              price={39}
              amount={5}
            />
          </div>
        </section>
      </main>

      <Footer />
    </Container>
  )
}