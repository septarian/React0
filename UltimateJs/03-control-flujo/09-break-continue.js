let i = 0;
while (i<6) {
    
    i++
    if(i === 2) {   
        continue;   //Se salta una iteracion con el "CONTINUE"
    }
    if (i === 4) {
        break;      //Detiene la ejecucion del loop
    }
    console.log(i)
}