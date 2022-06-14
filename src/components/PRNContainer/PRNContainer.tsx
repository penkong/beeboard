import { FC } from 'react'

// ---

import { useApp } from '../../context'

// ---

interface IProps {
	table: boolean
}

// ---

export const PRNContainer: FC<IProps> = ({ table }) => {
	const { filePrn, message } = useApp()

  const renderer = (info: any) => {
    if(table) {
      return <div>i am table for PRN {info.name}</div>
    } else {
      return <div>i am JSON for PRN {info.name}</div>
    }
  }


  return (
    <div>
      {filePrn  ? renderer(filePrn) : <div>{message}</div>}
    </div>
  )
}
