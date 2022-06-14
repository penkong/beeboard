import styles from './Home.module.css'
 
import React, { useState } from 'react'

// ---



export const Home = () => {


  const [ tab , setTab] = useState<'csv' | 'prn'>('csv')

  return (
    <div>Home</div>
  )
}


