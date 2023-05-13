import { Container, ButtonTextViewDish, ButtonPageNewDish, Form } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { ArrowUUpLeft, UploadSimple } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

export function NewDish() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonTextViewDish
              icon={ArrowUUpLeft}
              title="Voltar"
            />

            <h1>Novo Prato</h1>
          </header>

          <section className="col-1">

            <label htmlFor="image" className="image">
              Imagem do prato

              <Input
                id="image"
                icon={UploadSimple}
                placeholder="Selecione a imagem"
                type="file"
              />
            </label>

            <label htmlFor="name">
              Nome
              <Input
                id="name"
                placeholder="Ex: Salada Ceasar"
              />
            </label>

            <label htmlFor="category">
              Categoria
              <Input
                id="category"
                placeholder="Refeição"
              />
            </label>
          </section>


          <section className="col-2">
            <label htmlFor="ingredients">
              Ingredients
              <Input
                id="ingredients"
                placeholder="Tags"
              />
            </label>

            <label htmlFor="price">
              Preço
              <Input
                id="price"
                placeholder="R$ 00,00"
              />
            </label>
          </section>

          <label htmlFor="description">
            Descrição

            <TextArea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </label>
        </Form>

        <ButtonPageNewDish
          title="Salvar Alterações"
        />
      </main>

      <Footer />
    </Container>
  )
}