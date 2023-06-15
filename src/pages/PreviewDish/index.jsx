import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonPageViewDish, ButtonTextViewDish, Container } from "./styles";


import { ArrowUUpLeft, Minus, Plus, Receipt } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { Ingredient } from "../../components/Ingredient";
import { api } from "../../services/api";

const value = 25
const ingredients = ["alface", "cebola", "pepino", "rabanete", "tomate", "cebolinha"]

export function PreviewDish() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchDish() {
      const res = await api.get(`/dishes/${params.id}`)

      setData(res.data)
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <ButtonTextViewDish
            icon={ArrowUUpLeft}
            title="Voltar"
            onClick={handleBack}
          />


          <section>
            <img src={data.image} alt="" />

            <div className="container">
              <h1>{data.name}</h1>

              <h3>{data.description}</h3>

              <div className="ingredients">
                {
                  data.ingredients.map((ingredient, i) =>
                    <Ingredient
                      key={String(i)}
                      value={ingredient}
                    />
                  )
                }
              </div>

              <div className="buttons">
                <div className="amount">
                  <ButtonText icon={Minus} />
                  <p>{value}</p>
                  <ButtonText icon={Plus} />
                </div>

                <ButtonPageViewDish
                  icon={Receipt}
                  title={`PEDIR • R$ ${value},00`}
                />
              </div>
            </div>
          </section>
        </main>
      }

      <Footer />
    </Container>
  )
}