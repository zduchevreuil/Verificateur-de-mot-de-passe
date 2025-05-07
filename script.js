// Defnir les variables 
var myInput = document.getElementById('psw');
var lettre = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var lenght = document.getElementById('lenght');

//lorsque l'utulisateurc clique sur le champ du mot de passe, affichez la 
// boite message

myInput.onfocus = function(){
    document.getElementById("message").style.display = "block";
}

// lorsque l'utilisateur clique en dehors du champ du mot de passemasquer la boite 

myInput.onblur = function(){
    document.getElementById("message").style.display = "none";
}


// lorsque l'utilisateur commence a taper quelque chose dans le champs de mot de passe 

myInput.onkeyup = function(){
    // valider les lettres miinuscule 
    var lowerCaseLettres = /[a-z]/g
    if(myInput.value.match(lowerCaseLettres)){
        // si le mot de passe   contient une lettre minuscule enlever la classe "invalid " et ajouter la classe valid
        lettre.classList.remove('invalid');
        lettre.classList.add('valid');
    }else {
        // si non enlever la classe valid et ajouter la classe invalid 
        lettre.classList.remove('valid');
        lettre.classList.add('invalid');
        
    }

// valides les lettres majiscule
    var upperCaseLettres = /[A-Z]/g
    if(myInput.value.match(upperCaseLettres)){
        // si le mot de passe   contient une lettre majiscule enlever la classe "invalid " et ajouter la classe valid
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }else {
        // si non enlever la classe valid et ajouter la classe invalid 
        capital.classList.remove('valid');
        capital.classList.add('invalid');
        
    }


    // valider les nombres 
    var numbers = /[0-9]/g
    if(myInput.value.match(numbers)){
        // si le mot de passe   contient une lettre majiscule enlever la classe "invalid " et ajouter la classe valid
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else {
        // si non enlever la classe valid et ajouter la classe invalid 
        number.classList.remove('valid');
        number.classList.add('invalid');
        
    }


    // valider la longeur  
    if(myInput.value.length > 8){
        // si le mot de passe   contient 8 charactère au minimum enlever la classe "invalid " et ajouter la classe valid
        lenght.classList.remove('invalid');
        lenght.classList.add('valid');
    }else {
        // si non enlever la classe valid et ajouter la classe invalid 
        lenght.classList.remove('valid');
        lenght.classList.add('invalid');
        
    }
}
