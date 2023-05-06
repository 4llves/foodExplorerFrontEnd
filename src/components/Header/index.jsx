import { Container } from "./styles";

import { Receipt } from '@phosphor-icons/react'

import LogoExplorer from '../../assets/logoExplorer.svg'
import { List } from "phosphor-react";

export function Header() {
  return (
    <Container>
      {
        <List />
      }

      <div className="logo">
        <img src={LogoExplorer} alt="" />
        <h1>food explorer</h1>
      </div>

      <div>
        <Receipt />
        <span>0</span>
      </div>
    </Container>
  )
}