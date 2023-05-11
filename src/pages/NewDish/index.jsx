import { Container, ButtonTextViewDish, ButtonPageViewDish } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import SaladaRavanello from "../../assets/SaladaRavanello.png"

import { ButtonText } from "../../components/ButtonText";
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";
import { ArrowUUpLeft, Minus, Plus, Receipt } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

const value = 25
const ingredients = ["alface", "cebola", "pepino", "rabanete", "tomate", "cebolinha"]

export function NewDish() {
  return (
    <Container>
      <Header />

      <main>
        <ButtonTextViewDish
          icon={ArrowUUpLeft}
          title="Voltar"
        />

        <h1>Adiconar prato</h1>

        <div className="wrapper">
          <Input
            placeholder="Image"
          />

          <Input
            placeholder="Ex: Salada Ceasar"
          />

          <Input
            placeholder="Refeição"
          />

          <Input
            placeholder="Tags"
          />

          <Input
            placeholder="Price"
          />

          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
        </div>
      </main>

      <Footer />
    </Container>
  )
}