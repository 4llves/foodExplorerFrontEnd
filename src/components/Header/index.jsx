import { ButtonHeader, Container, Search, SectionHeader } from "./styles";

import { List, MagnifyingGlass, Receipt, SignOut, X } from '@phosphor-icons/react';

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoExplorer from '../../assets/logoExplorer.svg';
import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";

const quantityDishes = 0

export function Header({ ...rest }) {
  const { signOut, user } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate()

  function handleHome() {
    navigate(`/`);
  }

  function handleSignOut() {
    signOut()

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

      {isMenuOpen && (
        <SectionHeader>
          <div className="menu-name" onClick={handleMenuToggle}>
            <X />
            Menu
          </div>

          <div className="links">
            <Input
              placeholder="Pesquiar"
              type="text"
              icon={MagnifyingGlass}
            />
            {
              user.isAdmin
                ?
                <Link to="/createdish">Novo Prato</Link>
                :
                null
            }
            <Link onClick={signOut}>Sair</Link>
          </div>
        </SectionHeader>
      )}

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

      <div className="logout" onClick={handleSignOut}>
        <SignOut />
      </div>

      {
        user.isAdmin
          ?
          <div></div>
          :
          <div className="receipt-mobile">
            <Receipt />
            <span>0</span>
          </div>
      }
    </Container>
  )
}