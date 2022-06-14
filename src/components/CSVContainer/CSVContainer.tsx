import  { FC } from 'react'
import CSVReader from 'react-csv-reader'

// ---

import { useApp } from '../../context';

// ---

interface IProps {
  table : boolean
}

// ---

export const CSVContainer : FC<IProps> = ({ table }) => {
  const { fileCsv, message } = useApp()

  const renderer = (info: File) => {
    if(table) {
      return <div>i am table for csv {info.name}</div>
    } else {
      return <div>i am JSON for csv {info.name}</div>
    }
  }


  return (
    <div>
      {fileCsv  ? renderer(fileCsv) : <div>{message}</div>}
    </div>
  )
}
