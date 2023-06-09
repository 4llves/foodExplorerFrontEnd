import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import CookiePng from '../../assets/cookie.png';
import { Card } from "../../components/Card";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SaladaRavanello from "../../assets/SaladaRavanello.png";
import SpaguettiGambe from "../../assets/SpaguettiGambe.png";
import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState('')
  const [dishes, setDishes] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDishes() {
      const res = await api.get(`/dish?name=${search}`)
      console.log(res.data)
      setDishes(res.data)
    }

    fetchDishes()
  }, [search])

  function handleEditDish(id) {
    navigate(`/editdish/${id}`)
  }

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

            {/* {
              dishes.map(dish => {
                <Card
                  key={String(dish.id)}
                  data={dish}
                  onClick={() => { handleEditDish(dish.id) }}
                // img={SaladaRavanello}
                // title="Salada Ravanello"
                // description="Massa fresca com camarões e pesto."
                // price={40}
                // amount={20}
                />
              })
            } */}

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