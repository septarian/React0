import { useState } from 'react'
import './App.css'
import './InstagramFollowCard'
import { InstagramFollowCard } from './InstagramFollowCard'


export function App () {

  return (
    <section className="App">

      <InstagramFollowCard name='Erick Mora' userName='septarianlyrics8704' initialIsFollowing />

      <InstagramFollowCard name='Daniel Mora' userName='dany_3' initialIsFollowing={false} />

      <InstagramFollowCard name='Wisky' userName='gato' initialIsFollowing />

    </section>
  )
}



