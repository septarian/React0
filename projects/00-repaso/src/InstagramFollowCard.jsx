import { useState } from "react";
import './App.css'



export function InstagramFollowCard ({name, userName, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(!initialIsFollowing)

    const follow = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'ig-followCard-button is-following'
    : 'ig-followCard-button'


    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="ig-followCard">
            <header className="ig-followCard-header">
                <img 
                className="ig-followCard-avatar"
                alt="Foto de perfil" src ={`https://unavatar.io/youtube/${userName}`} />
                <div className="ig-followCard-info">
                    <strong >{name}</strong>
                    <span className="ig-followCard-infoUserName">{userName}</span>
                </div>
            </header>

            <aside>
                <button className="ig-followCard-button" onClick={handleClick}>
                    <span className="ig-followCrad-text">{follow}</span>
                    <span className="ig-followCard-stopFollowing">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}