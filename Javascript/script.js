



const button = document.querySelector('button');

const lista = [
    'Giacomo@gmail.com',
    'Michele@gmail.com',
    'Fernando@gmail.com',
    'Luigi@gmail.com',
    'Andrea@gmail.com',
    'Fiorello@gmail.com'
];

button.addEventListener('click',function(){
    let email = document.getElementById('email').value;
    console.log(email)
    
    for(let i = 0; i < lista.length; i++){
        let currentEmail = lista[i];
        console.log(currentEmail)
        
        let write;

        if(currentEmail === email){
            write = 'Account verificato, puoi accedere al sito.'
            console.log(write)
            
        } if(currentEmail !==email){
            write = 'Account non trovato.'
            console.log(write)
        }

    }


})


