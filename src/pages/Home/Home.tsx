import { useState } from 'react'
import { Link } from 'react-router-dom'

// ---

import { CSVContainer, PRNContainer, Uploader } from '../../components'
import { LiItemStyle } from './Home.styled'
import {
	NavRowStyle,
	MainRowStyle,
	ContainerStyle,
	LoaderRowStyle,
	TableContainerStyle
} from './Home.styled'

// ---

export type ITabType = 'csv' | 'prn'

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
					<LiItemStyle
						onClick={() => handleTabChange('csv')}
						type="csv"
						active={tab === 'csv'}
					>
						CSV : { tab === 'csv' ? 'Ready' : 'To Active' }
					</LiItemStyle>
					<LiItemStyle
						onClick={() => handleTabChange('prn')}
						type="prn"
						active={tab === 'prn'}
					>
						PRN : { tab === 'prn' ? 'Ready' : 'To Active' }
					</LiItemStyle>
          <LiItemStyle type={tab}>
            <Uploader />
          </LiItemStyle>
				</LoaderRowStyle>
				<TableContainerStyle>
					{tab === 'csv' && <CSVContainer />}
					{tab === 'prn' && <PRNContainer />}
				</TableContainerStyle>
			</MainRowStyle>
		</ContainerStyle>
	)
}
