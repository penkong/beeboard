import React from 'react'
import CSVReader from 'react-csv-reader'
import { useApp } from '../../context';


export const CSVContainer = () => {
  const { fileCsv } = useApp()
  return (
    <div>
      {fileCsv  ? <div>{fileCsv.name}</div> : <div>No file</div>}
    </div>
  )
}
