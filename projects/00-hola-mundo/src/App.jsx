import './App.css';
import './TwitterFollowCard';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    //const format = (userName) => `@${userName}`
    return ( 
        <section className='App'>
            <TwitterFollowCard  userName="efick1408">
                Erick Fernando Mora Carbajal
            </TwitterFollowCard>

            <TwitterFollowCard  userName="dany">
                Luis Daniel Mora Carbajal
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing userName="wisky">
                Gato siames
            </TwitterFollowCard>
            
        </section>
    )
}