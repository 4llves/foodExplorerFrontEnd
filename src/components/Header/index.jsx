import { ButtonHeader, Container, Search } from "./styles";

import { MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react';

import LogoExplorer from '../../assets/logoExplorer.svg';
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";

const quantityDishes = 10

export function Header({ ...rest }) {
  const { signOut, user } = useAuth()

  return (
    <Container {...rest}>
      <div className="wrapper-logo">
        <div className="logo">
          <img src={LogoExplorer} alt="" />
          <h1>food explorer</h1>
        </div>
        {user.isAdmin ? <span>admin</span> : null}
      </div>

      <Search>
        <Input
          placeholder="Pesquiar"
          type="text"
          icon={MagnifyingGlass}
        />
      </Search>

      {
        user.isAdmin
          ? <ButtonHeader title={'Criar Prato'} to="/createdish" />
          : <ButtonHeader icon={Receipt} title={`Pedidos (${quantityDishes})`} />
      }

      <div className="logout" onClick={signOut}>
        <SignOut />
      </div>

      {
        user.isAdmin
          ?
          null
          :
          <div className="receipt-mobile">
            <Receipt />
            <span>0</span>
          </div>
      }
    </Container>
  )
}