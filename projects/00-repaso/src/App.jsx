import { useState } from 'react'
import './App.css'
import './InstagramFollowCard'
import { InstagramFollowCard } from './InstagramFollowCard'


export function App () {

  return (
    <section className="App">

      <InstagramFollowCard name='Erick Mora' userName='septarianlyrics8704' isFollowing/>

      <InstagramFollowCard name='Daniel Mora' userName='dany_3' isFollowing={false}/>

      <InstagramFollowCard name='Wisky' userName='gato' isFollowing={false}/>

    </section>
  )
}



