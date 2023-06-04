import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonPageNewDish, ButtonTextViewDish, Container, Form } from "./styles";

import { ArrowUUpLeft } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Ingredient } from "../../components/Ingredient";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { api } from "../../services/api";



export function EditDish() {
  const [name, setName] = useState("")
  const [image, setImage] = useState(null)
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  const params = useParams();

  function handleAddIngredients() {
    //Impedir ingredients duplicados
    if (!ingredients.includes(newIngredient) && newIngredient.length > 0) {
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
    } else {
      return alert("Campo vazio ou duplicado!");
    }
  }

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleUpdateDishes() {
    if (!name) {
      return alert("Mermão, não tem como cadastrar a receita sem um nome. Digita um ai pra nós.")
    }

    if (!category) {
      return alert("Mano, assim... Preciso classifcar ela em alguma categoria, inventa uma ai que da bom.")
    }

    if (!ingredients) {
      return alert("Olha... Assim... Sabe... Preciso de ingredientes pra criar a receita né... preenche ai se não num vou deixar você concluir.")
    }

    if (!price) {
      return alert("Vai ficar de grátis? se não, coloca um preço ai pra nós!")
    }

    if (!description) {
      return alert("Essa descrição é obrigatória. Afinal de contas... como vou saber algo sobre a receita sem uma observação ou descrição?!")
    }

    // console.log({
    //   name,
    //   image,
    //   category,
    //   description,
    //   price,
    //   ingredients
    // })

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);


    ingredients.map((ingredient) => formData.append("ingredients", ingredient));


    api.post("/dishes", formData)

    alert("Nota criada com sucesso! 👌")
    // navigate(-1);
  }


  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);

      const { name, description, category, price, ingredients } =
        response.data;
      setName(name);
      setDescription(description);
      setCategory(category);
      setPrice(price);
      setIngredients(ingredients.map((ingredient) => ingredient.name));
    }

    fetchDish();
  }, []);

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

              <input
                id="image"
                // icon={UploadSimple}
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>

            <label htmlFor="name">
              Nome
              <Input
                id="name"
                type="text"
                placeholder="Ex: Salada Ceasar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="category">
              Categoria
              <Input
                id="category"
                placeholder="Refeição"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
          </section>


          <section className="col-2">
            <div className="ingredients">

              {
                ingredients.map((ingredient, index) => (
                  <Ingredient
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredients(ingredient)}
                  />
                ))
              }


              <Ingredient
                isNew
                placeholder="Adicionar"
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredients}
              />

            </div>

            <label htmlFor="price">
              Preço
              <Input
                id="price"
                value={price}
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </section>

          <label htmlFor="description">
            Descrição

            <TextArea
              id="description"
              defaultValue={description}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </Form>

        <ButtonPageNewDish
          title="Salvar Alterações"
          onClick={handleUpdateDishes}
        />
      </main>

      <Footer />
    </Container>
  )
}