import { HeartStraight, Minus, Pencil, Plus } from "@phosphor-icons/react";
import { ButtonCard, Container } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonText } from '../../components/ButtonText';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Card({ data, amount, ...rest }) {
  const { user } = useAuth()
  // console.log(data)
  const [quantity, setQuantity] = useState(0)

  const navigate = useNavigate()

  function handleAddQuantityDish() {
    if (quantity >= 99) {
      return
    }

    setQuantity(quantity + 1)
  }

  function handleRemoveQuantityDish() {
    if (quantity === 0) {
      return
    }

    setQuantity(quantity - 1)
  }

  function handleDetails(id) {
    navigate(`/previewdish/${id}`);
  }

  return (
    <Container {...rest}>
      <div className="like">
        {
          user.isAdmin
            ? <ButtonText icon={Pencil} to={`/editdish/${data.id}`} />
            : <ButtonText icon={HeartStraight} />
        }
      </div>

      <img
        src={`${api.defaults.baseURL}/files/dishImage/${data.image}`}
        alt="Plate img"
        onClick={() => handleDetails(data.id)}
      />

      <h1>{data.name} &gt;</h1>

      <h3>{data.description}</h3>

      <span>{data.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>

      {
        user.isAdmin
          ?
          null
          :
          <div className="bottom-card">
            <div className="amount">
              <ButtonText icon={Minus} onClick={handleRemoveQuantityDish} />
              <p>{quantity}</p>
              <ButtonText icon={Plus} onClick={handleAddQuantityDish} />
            </div>

            <ButtonCard title="incluir" />
          </div>
      }
    </Container>
  )
}