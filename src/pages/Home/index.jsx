import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import CookiePng from '../../assets/cookie.png';
import { Section } from "../../components/Section";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { Card } from "../../components/Card";
import { Slider } from "../../components/Slider";
import { api } from "../../services/api";

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')

  const navigate = useNavigate()
  const settings = {
    spaceBetween: 1,
    slidesPerView: 2,
  }

  useEffect(() => {
    async function fetchDishes() {
      const res = await api.get(`/dishes?name=${search}`)
      console.log(res.data)
      setDishes(res.data)
    }

    fetchDishes()
  }, [search])

  // function handleEditDish(id) {
  //   navigate(`/editdish/${id}`)
  // }

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

        <Section title="Refeições">
          <Slider settings={settings}>
            {
              dishes.map(dish => {
                return (
                  <SwiperSlide
                    key={String(dish.id)}
                  >

                    <Card
                      data={dish}
                    // onClick={() => { handleEditDish(dish.id) }}
                    // img={SaladaRavanello}
                    // title="Salada Ravanello"
                    // description="Massa fresca com camarões e pesto."
                    // price={40}
                    // amount={20}
                    />
                  </SwiperSlide>
                )
              }

              )
            }
          </Slider>
          {/* <div className="cards">
            {
              dishes.map(dish => {
                return (
                  <Card
                    key={String(dish.id)}
                    data={dish}
                  // onClick={() => { handleEditDish(dish.id) }}
                  // img={SaladaRavanello}
                  // title="Salada Ravanello"
                  // description="Massa fresca com camarões e pesto."
                  // price={40}
                  // amount={20}
                  />
                )
              }

              )
            }
          </div> */}
        </Section>
      </main>

      <Footer />
    </Container>
  )
}