import { ButtonHeader, Container, Search } from "./styles";

import { MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react';

import { List } from "phosphor-react";
import LogoExplorer from '../../assets/logoExplorer.svg';
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";

const quantityDishes = 10

export function Header({ ...rest }) {
  const { signOut } = useAuth()

  return (
    <Container {...rest}>
      <div className="menu-amburguer">
        {
          <List />
        }
      </div>

      <div className="logo">
        <img src={LogoExplorer} alt="" />
        <h1>food explorer</h1>
      </div>

      <Search>
        <Input
          placeholder="Pesquiar"
          type="text"
          icon={MagnifyingGlass}
        />
      </Search>

      <ButtonHeader
        icon={Receipt}
        title={`Pedidos (${quantityDishes})`}
      />

      <div className="logout" onClick={signOut}>
        <SignOut />
      </div>

      <div className="receipt-mobile">
        <Receipt />
        <span>0</span>
      </div>
    </Container>
  )
}