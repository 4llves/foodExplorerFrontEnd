import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Slider } from "../../components/Slider";
import { Container } from "./styles";

import CookiePng from '../../assets/cookie.png';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { api } from "../../services/api";

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState([])

  const navigate = useNavigate()

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


        {/* <Section title="Refeicoes">
          <Slider>
            {
              dishes.map(dish => {
                return (
                  <SwiperSlide
                    key={String(dish.id)}
                  >
                    <Card
                      data={dish}
                    />
                  </SwiperSlide>
                )
              }

              )
            }
          </Slider>
        </Section> */}

        {
          dishes.filter((dish) => dish.category == "Refeições").length > 0 && (
            <Section title="Refeições">
              <Slider>
                {
                  dishes.filter((dish) => dish.category == "Refeições").map((dish) => (
                    <SwiperSlide>
                      <Card
                        data={dish}
                      />
                    </SwiperSlide>
                  ))
                }
              </Slider>
            </Section>
          )
        }

        {
          dishes.filter((dish) => dish.category == "Sobremesas").length > 0 && (
            <Section title="Sobremesas">
              <Slider>
                {
                  dishes.filter((dish) => dish.category == "Sobremesas").map((dish) => (
                    <SwiperSlide>
                      <Card
                        data={dish}
                      />
                    </SwiperSlide>
                  ))
                }
              </Slider>
            </Section>
          )
        }

        {
          dishes.filter((dish) => dish.category == "Bebidas").length > 0 && (
            <Section title="Bebidas">
              <Slider>
                {
                  dishes.filter((dish) => dish.category == "Bebidas").map((dish) => (
                    <SwiperSlide>
                      <Card
                        data={dish}
                      />
                    </SwiperSlide>
                  ))
                }
              </Slider>
            </Section>
          )
        }



      </main>

      <Footer />
    </Container>
  )
}