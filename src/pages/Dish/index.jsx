import { Container, ButtonTextViewDish, ButtonPageViewDish } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import SaladaRavanello from "../../assets/SaladaRavanello.png"

import { ButtonText } from "../../components/ButtonText";
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";
import { ArrowUUpLeft, Minus, Plus, Receipt } from "@phosphor-icons/react";

const value = 25
const ingredients = ["alface", "cebola", "pepino", "rabanete", "tomate", "cebolinha"]

export function Dish() {
  return (
    <Container>
      <Header />

      <main>
        <ButtonTextViewDish
          icon={ArrowUUpLeft}
          title="Voltar"
        />


        <section>
          <img src={SaladaRavanello} alt="" />

          <div className="container">
            <h1>Salada Ravanello</h1>

            <h3>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</h3>

            <div className="ingredients">
              {
                ingredients.map((ingredient, i) =>
                  <Ingredient
                    key={i}
                    title={ingredient}
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
                title={`pedir • R$ ${value},00`}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Container>
  )
}