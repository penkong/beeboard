import { useState } from 'react'
import { Link } from 'react-router-dom'

// ---

import { CSVContainer, PRNContainer } from '../../components'
import {
  NavRowStyle,
	MainRowStyle,
	ContainerStyle,
	LoaderRowStyle,
	TableContainerStyle,
} from './Home.styled'

// ---

type ITabType = 'csv' | 'prn'

// ---

export const Home = () => {
	const [tab, setTab] = useState<ITabType>('csv')

	const handleTabChange = (tab: ITabType) => {
		setTab(tab)
	}

	return (
		<ContainerStyle>
			<NavRowStyle>
				<Link to="/">Home</Link>
				<Link to="about">About</Link>
			</NavRowStyle>
			<MainRowStyle>
				<LoaderRowStyle>
					<li onClick={()=>handleTabChange('csv')} value="csv">
						CSV Loader
					</li>
					<li onClick={()=>handleTabChange('prn')} value="prn">
						PRN Loader
					</li>
				</LoaderRowStyle>
				<TableContainerStyle>
					{tab === 'csv' && <CSVContainer />}
					{tab === 'prn' && <PRNContainer />}
				</TableContainerStyle>
			</MainRowStyle>
		</ContainerStyle>
	)
}
