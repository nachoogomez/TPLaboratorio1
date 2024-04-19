import React from 'react'
import { Header } from '../components/header/Header'
import { Aside } from '../components/aside/Aside'
import './Home.css'

export const Home = () => {
  return (
    <div className='container'>
        <Aside/>
        <Header/>
    </div>
  )
}
