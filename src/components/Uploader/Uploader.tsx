import styles from './Uploader.module.css'

import { FC, useState } from 'react'
import CSVReader from 'react-csv-reader'

// ---

import { useApp } from '../../context'
import { fileToText } from '../../utils'
import { UploaderStyled } from './Uploader.styled'

// ---

interface IProps {
	type: 'csv' | 'prn' | 'json' | 'table' | 'loader'
}

// ---

export const Uploader: FC<IProps> = ({ type }) => {
	const [inLoading, setInLoading] = useState<boolean>(false)

	const { setFileCSVAction, setFilePRNAction, setCorrectMessageAction } =
		useApp()

	const fileHandler = async (f: File) => {
		setInLoading(true)

		if (window.File && window.FileReader && window.FileList && window.Blob) {
			const name = f.name.split('.')
			const ext = name[name.length - 1]
			if (ext === 'prn' && type === 'prn') {
				const item = (await fileToText(f)) as string
				const mapped = item.split('\n')
				const head = mapped[0].split(' ').filter((item: string) => item !== '')
				const correctedHead = [
					...head.slice(0, 4),
					head[4] + ' ' + head[5],
					head[6]
				]
				const rows = mapped
					.slice(1)
					.map((item: string) =>
						item.split('  ').filter((item: string) => item.length > 0)
					)
					.filter(el => el.length > 0)

				const correctRows = rows.map((el: string[]) => {
					const info = el.map(i => i.trim())
					let len = info.length
					let newEl = [...info.slice(0, len - 1), ...info[len - 1].split(' ')]
					let refineEl = newEl[1].split(' ')
					let refLen = refineEl.length
					if (refineEl.length > 3) {
						newEl = [
							newEl[0],
							refineEl.slice(0, refLen - 2).join(' '),
							refineEl[refLen - 2].split(' ') +
								' ' +
								refineEl[refLen - 1].split(' '),
							...newEl.slice(2)
						]
					}
					el = newEl
					return el
				})

				setFilePRNAction([correctedHead,...correctRows] as any)
			} else {
				setCorrectMessageAction('File type is not supported')
			}
		}

		setInLoading(false)
	}

	const onFileChange = async (f: File) => await fileHandler(f)

	return (
		<UploaderStyled>
			{type === 'csv' && (
				<CSVReader
					label="Upload CSV"
					onFileLoaded={(f, fileInfo, originalFile) => setFileCSVAction(f)}
					cssInputClass={styles.here}
				/>
			)}
			{type === 'prn' && (
				<>
					<label htmlFor="filePicker">Upload PRN</label>
					<input
						type="file"
						id="filePicker"
						accept="*"
						onChange={e => {
							onFileChange(e.target.files![0])
						}}
					/>
				</>
			)}
		</UploaderStyled>
	)
}
