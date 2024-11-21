import Icon from "./Icon";
import { App } from "./App";

export default function SuscriptionCard({name="unknonw", profile=name, status}) {

    const online = status 
    ? "yt-suscriptionCard-icon"
    : "yt-suscriptionCard-iconInvisible"

    return (
        <section className='yt-suscriptionsCard' title={name}>
            <header className='yt-suscriptionsCard-header'>

            <img className='yt-suscriptionCard-img' src={`https://unavatar.io/youtube/${profile}`} />
    
            <par className="yt-suscriptionCard-par">
                <div className='yt-suscriptionCard-text'>
                    <span>{name}</span>
                </div>
                <div className={online}>
                    <Icon />
                </div>
                
            </par>
        </header>
    </section>
    )
}
