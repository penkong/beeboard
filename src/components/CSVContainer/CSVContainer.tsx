import { FC } from 'react'
import ReactJson from 'react-json-view'

// ---

import { useApp } from '../../context'
import { CSVContainterStyle, CSVTableStyle } from './CSVContainer.styled'

// ---

interface IProps {
	table: boolean
}

// ---

export const CSVContainer: FC<IProps> = ({ table }) => {
	const { fileCsv, message } = useApp()

	const renderer = (info: any) => {
		if (table) {
			return (
				<CSVTableStyle>
					<thead>
						<tr>
							{info[0].map((item: any, idx: number) => (
								<th key={idx}>{item}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{info.slice(1).map((item: any, idx: number) => (
							<tr key={idx}>
								{item.length && item.map((item: any, idx: number) => (
									<td key={idx}>{item.replace(/[^\x00-\x7F]/g, "")}</td>
								))}
							</tr>
						))}
					</tbody>
				</CSVTableStyle>
			)
		} else {
			return (
				<div style={{ maxHeight: '96%'}}>
					<ReactJson src={info} />
				</div>
			)
		}
	}

	return (
		<CSVContainterStyle>
			{fileCsv ? <>{renderer(fileCsv)}</> : <div>{message}</div>}
		</CSVContainterStyle>
	)
}
