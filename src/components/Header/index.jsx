import { Container, ButtonHeader, Search } from "./styles";

import { MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react'

import LogoExplorer from '../../assets/logoExplorer.svg'
import { List } from "phosphor-react";
import { Input } from "../Input";

const lala = 10

export function Header({ ...rest }) {

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
        title={`Pedidos (${lala})`}
      />

      <div className="logout">
        <SignOut />
      </div>

      <div className="receipt-mobile">
        <Receipt />
        <span>0</span>
      </div>
    </Container>
  )
}