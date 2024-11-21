import { useState } from 'react'
import './App.css'
import SuscriptionCard from './SuscriptionCard'

export function App(){
  return (
    <section className='App'>

      <SuscriptionCard name='Disney XD' profile='disneyxd' status/>
      <SuscriptionCard name='NoCopyrightSounds' status/>
      <SuscriptionCard name='Septarian lyrics' profile='septarianlyrics8704' status={false}/>

    </section>
  )
}