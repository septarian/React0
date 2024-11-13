import './App.css';
import './TwitterFollowCard';
import { TwitterFollowCard } from './TwitterFollowCard';
import { useState } from 'react';

export function App () {
    //const [name, setName] = useState('Efick1408')

    //const format = (userName) => `@${userName}`
    return ( 
        <section className='App'>
            <TwitterFollowCard  userName="Efick1408" initialIsFollowing>
                Erick Fernando Mora Carbajal
            </TwitterFollowCard>

            <TwitterFollowCard  userName="dany" initialIsFollowing = {false}>
                Luis Daniel Mora Carbajal
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing userName="wisky" initialIsFollowing>
                Gato siames
            </TwitterFollowCard>

        { /* Boton con la funcion de cambio de estado 
            <button onClick={() => setName('Fernando')}>
                Cambio de nombre
            </button>*/
        }

        </section>
    )
}