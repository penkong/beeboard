import { useState } from 'react'
import { Link } from 'react-router-dom'

// ---

import { CSVContainer, PRNContainer, Uploader } from '../../components'
import {
	LiItemStyle,
	NavRowStyle,
	MainRowStyle,
	ContainerStyle,
	LoaderRowStyle,
	TableContainerStyle
} from './Home.styled'

// ---

export type ITabType = 'csv' | 'prn' | 'json' | 'table' | 'loader'





// ---

export const Home = () => {
	const [tab, setTab] = useState<ITabType>('prn')
  const [table , setTable] = useState<boolean>(true)

	const handleTabChange = (tab: ITabType) => {
		setTab(tab)
	}
	
  const handleTableChange = () => setTable(() => !table)

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
						{ tab === 'csv' ? '' : 'To Activate' } CSV
					</LiItemStyle>
					<LiItemStyle
						onClick={() => handleTabChange('prn')}
						type="prn"
						active={tab === 'prn'}
					>
						{ tab === 'prn' ? '' : 'To Activate' } PRN
					</LiItemStyle>
          <LiItemStyle type='loader'>
            <Uploader type={tab} />
          </LiItemStyle>
          <LiItemStyle type={tab} onClick={handleTableChange}>
            { table ? 'To Activate JSON' : 'To Activate Table' }
          </LiItemStyle>
				</LoaderRowStyle>
				<TableContainerStyle>
					{tab === 'csv' && <CSVContainer table={table}/>}
					{tab === 'prn' && <PRNContainer table={table}/>}
				</TableContainerStyle>
			</MainRowStyle>
		</ContainerStyle>
	)
}
