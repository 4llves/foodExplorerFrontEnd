import { ButtonHeader, Container, MenuItem, MenuOptions, Search } from "./styles";

import { List, MagnifyingGlass, Receipt, SignOut } from '@phosphor-icons/react';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoExplorer from '../../assets/logoExplorer.svg';
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";

const quantityDishes = 10

export function Header({ ...rest }) {
  const { signOut, user } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate()

  function handleHome() {
    navigate(`/`);
  }

  function handleMenuToggle() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <Container {...rest}>
      <div className="menu-hamburguer" onClick={handleMenuToggle}>
        <List />
      </div>

      {
        isMenuOpen && (
          <MenuOptions>
            <MenuItem onClick={handleMenuToggle}>
              Search
            </MenuItem>
            <MenuItem onClick={handleMenuToggle}>
              Output
            </MenuItem>
          </MenuOptions>
        )
      }

      <div className="wrapper-logo">
        <div
          className="logo"
          onClick={handleHome}
        >
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
          ? <ButtonHeader title={'Novo Prato'} to="/createdish" />
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