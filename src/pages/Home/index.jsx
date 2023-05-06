import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import CookiePng from '../../assets/cookie.png'
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <div className="card">
          <img src={CookiePng} alt="" />


          <div className="text">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>

        <Section title="Refeições" />

        <Card />
      </main>

      <Footer />
    </Container>
  )
}