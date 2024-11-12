import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.jsx';
import './index.css';


const root = createRoot(document.getElementById('root'))

root.render(
    <App/>
)










/*  La forma Ideal 
root.render(
  <React.Fragment>
    <Button text="Button 1" />
    <Button text="Button 2" />
    <Button text="Button 3" />
  </React.Fragment>
)
*/

/*    Funciona pero no es lo ideal, se deben usar componentes
root.render(
  <React.Fragment>
    {createButton({text: 'Button 1'})}
    {createButton({text: 'Button 2'})}
    {createButton({text: 'Button 3'})}
  </React.Fragment>
)*/
