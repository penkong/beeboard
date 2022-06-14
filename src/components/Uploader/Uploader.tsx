import React, { FC, useState } from 'react'

// ---

import { useApp } from '../../context'
import { UploaderStyled } from './Uploader.styled'

// ---

interface IProps {
	type: 'csv' | 'prn' | 'json' | 'table' | 'loader'
}

// ---

export const Uploader: FC<IProps> = ({ type }) => {

	const [inLoading, setInLoading] = useState<boolean>(false)
	const { setFileCSVAction , setFilePRNAction , setCorrectMessageAction } = useApp()

	const fileHandler = async (f: File) => {
		setInLoading(true)

		if (window.File && window.FileReader && window.FileList && window.Blob) {
			const name = f.name.split('.')
			const ext = name[name.length - 1]
			if(ext === 'csv' && type === 'csv') {
				setFileCSVAction(f)
			} else if(ext === 'prn' && type === 'prn') {
				setFilePRNAction(f)
			} else {
				setCorrectMessageAction('File type is not supported')
			}
		}

		setInLoading(false)
	}

	const onFileChange = async (f: File) => await fileHandler(f)

	return (
		<UploaderStyled>
			<label htmlFor="filePicker">
				{type === 'csv' ? 'Upload CSV' : 'Upload PRN'}
			</label>
			<input
				type="file"
				id="filePicker"
				accept="*"
				onChange={e => {
					onFileChange(e.target.files![0])
				}}
			/>
		</UploaderStyled>
	)
}
