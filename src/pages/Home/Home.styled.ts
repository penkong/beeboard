/*  */

import styled from 'styled-components'
import { ITabType } from './Home'

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

export const MainRowStyle = styled.main`
	width: 96%;
	height: 86%;
	margin: auto;
	margin-top: 6rem;
	border: 1px solid #bfbfbf;
	border-radius: 0.5rem;
	background-color: #fff;
`

export const LoaderRowStyle = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 80%;
	height: 5%;
	margin: 0 auto;
  margin-top: 1rem;
`

export const LiItemStyle = styled.li<{ type: ITabType , active?: boolean }>`
  border-radius: 0.5rem;
	list-style: none;
	width: 16%;
	height: 90%;
  color: black;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
  cursor: pointer;
  border: ${({ active}) => active ? '1px solid #686868' : 'none'};
	background-color: #E4E4E4;
  &:hover {
    background-color: #686868;
    color: white;
  }
`

export const TableContainerStyle = styled.div`
  margin-top: 1%;
  width: 100%;
  height: 90%;
  background-color: red
`
