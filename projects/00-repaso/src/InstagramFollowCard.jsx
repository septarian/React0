import { useState } from "react";
import './App.css'

export function InstagramFollowCard ({name, userName, initialIsFollowing}){


    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const follow = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'ig-followCard-button is-following'
    : 'ig-followCard-button'


    const handleClick = () => {
        if (isFollowing) {
            const confirm = window.confirm(`¿Estas seguro que quieres dejar de seguir a ${name}?`)
            if(confirm){
                setIsFollowing(!isFollowing)
            }
        }
        else{
            setIsFollowing(!isFollowing)
        }
    }

    return(

        <article className="ig-followCard">
            <header className="ig-followCard-header">
                <img 
                className="ig-followCard-avatar"
                alt="Foto de perfil" src ={`https://unavatar.io/youtube/${userName}`} />
                <div className="ig-followCard-info">
                    <strong >{userName}</strong>
                    <span className="ig-followCard-infoUserName">{name}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="ig-followCard-text">{follow}</span>
                    <span className="ig-followCard-stopFollowing">Dejar de seguir</span>
                </button>
            </aside>
        </article>

    )
}