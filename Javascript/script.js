



const button = document.querySelector('button');

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
    
    for(let i = 0; i < lista.length; i++){
        let currentEmail = lista[i];
        console.log(currentEmail)

        
        
        let write

        if(currentEmail.toLocaleLowerCase() === email.toLocaleLowerCase()){
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

})


