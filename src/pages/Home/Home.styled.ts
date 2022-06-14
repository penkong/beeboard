/*  */

import styled from 'styled-components'

export const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw; 
  background-color: #fafafa;
  position: relative;
`

export const NavRowStyle = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 7%;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
  }
`

export const MainRowStyle = styled.main``

export const LoaderRowStyle = styled.ul``

export const TableContainerStyle = styled.div``