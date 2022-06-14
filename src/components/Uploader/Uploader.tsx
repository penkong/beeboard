import React, { FC, useState } from 'react'

// ---

interface IProps {
	type: 'csv' | 'prn' | 'json' | 'table' | 'loader'
}

// ---

export const Uploader: FC<IProps> = ({ type }) => {
	const [inLoading, setInLoading] = useState<boolean>(false)

	const fileHandler = async (f: File) => {
		setInLoading(true)

		if (window.File && window.FileReader && window.FileList && window.Blob) {
			console.log(f)
		}
	}

	const onFileChange = async (f: File) => await fileHandler(f)

	return (
		<>
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
		</>
	)
}
