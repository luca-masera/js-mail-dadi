

//ESERCIZIO 1 EMAIL:

/*const button = document.querySelector('button');

const lista = [
    'giacomo@gmail.com',
    'michele@gmail.com',
    'fernando@gmail.com',
    'luigi@gmail.com',
    'andrea@gmail.com',
    'fiorello@gmail.com'
];

button.addEventListener('click',function(){
    let email = document.getElementById('email').value;
  

    console.log(email)
    
    let write
    for(let i = 0; i < lista.length; i++){
        let currentEmail = lista[i];
        console.log(currentEmail) 
        
    
        if(currentEmail.toLocaleLowerCase() === email.toLocaleLowerCase()) {
            write = 'Account verificato, puoi accedere al sito.'
        
            console.log(write)
            break;
            
                        
            
        } if(currentEmail.toLocaleLowerCase() !== email.toLocaleLowerCase()){
            write = 'Account non trovato.'
            console.log(write)
            
        }      
                
    }
    
    const scritta = document.querySelector('p')
    scritta.innerText = write;    

       

})*/

//ESERCIZIO 2 GIOCO DEI DADI:



let giocatoreUmano = Math.floor(Math.random() *6) +1;
console.log(giocatoreUmano)

let giocatoreComputer = Math.floor(Math.random() *6) +1;
console.log(giocatoreComputer)

let write;
if(giocatoreUmano > giocatoreComputer){
    write = 'giocatoreUmano hai vinto';
    console.log(write);
    
}else if(giocatoreUmano < giocatoreComputer){
    write = 'giocatoreUmano hai perso';
    console.log(write);
    
} else if (giocatoreUmano === giocatoreComputer){
    write = 'Non ha vinto nessuno, tirate ancora i dadi';
    console.log(write);
}




