import { HeartStraight, Minus, Pencil, Plus } from "@phosphor-icons/react";
import { ButtonCard, Container } from "./styles";

import { ButtonText } from '../../components/ButtonText';
import { useAuth } from "../../hooks/auth";

export function Card({ data, amount, ...rest }) {
  const { user } = useAuth()

  return (
    <Container {...rest}>
      <div className="like">
        {
          user.isAdmin
            ? <ButtonText icon={Pencil} />
            : <ButtonText icon={HeartStraight} />
        }
      </div>

      {/* <img src={data.image} alt="" /> */}

      <h1>{data.name} &gt;</h1>

      <h3>{data.description}</h3>

      <span>R$ {data.price},00</span>

      <div className="bottom-card">
        <div className="amount">
          <ButtonText icon={Minus} />
          <p>{amount}</p>
          <ButtonText icon={Plus} />
        </div>

        <ButtonCard title="incluir" />
      </div>
    </Container>
  )
}