import { Container, ButtonCard } from "./styles";
import { HeartStraight, Minus, Plus } from "@phosphor-icons/react";

import { ButtonText } from '../../components/ButtonText';

export function Card({ img, title, price, amount, ...rest }) {
  return (
    <Container {...rest}>
      <div className="like">
        <ButtonText icon={HeartStraight} />
      </div>
      <img src={img} alt="" />

      <h1>{title} &gt;</h1>

      <span>R$ {price},00</span>

      <div className="amount">
        <ButtonText icon={Minus} />
        <p>{amount}</p>
        <ButtonText icon={Plus} />
      </div>

      <ButtonCard title="incluir" />
    </Container>
  )
}