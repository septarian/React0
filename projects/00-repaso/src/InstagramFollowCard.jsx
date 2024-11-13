import { useState } from "react";
import './App.css'



export function InstagramFollowCard (){

    return(
        <article className="ig-followCard">
            <header className="ig-followCard-header">
                <img className="ig-followCard-avatar"
                alt="Foto de perfil" 
                src ="https://unavatar.io/youtube/septarianlyrics8704" 
                />
                <div>
                    <strong>Erick Mora</strong>
                    <span>septarian_9</span>
                </div>
            </header>

            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}