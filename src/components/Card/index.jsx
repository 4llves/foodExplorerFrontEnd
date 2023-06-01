import { HeartStraight, Minus, Plus } from "@phosphor-icons/react";
import { ButtonCard, Container } from "./styles";

import { ButtonText } from '../../components/ButtonText';

export function Card({ img, title, price, amount, description, ...rest }) {
  return (
    <Container {...rest}>
      <div className="like">
        <ButtonText icon={HeartStraight} />
      </div>

      <img src={img} alt="" />

      <h1>{title} &gt;</h1>

      <h3>{description}</h3>

      <span>R$ {price},00</span>

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