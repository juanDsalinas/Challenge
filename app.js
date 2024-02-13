const btnEncriptar = document.querySelector('.btn');
const btnDesencriptar = document.querySelector('.btn-2');
const textoRes = document.querySelector('.textico');
const imagen = document.querySelector('.imagencita');
const textArea = document.getElementById('mensaje');
const btnCopie = document.querySelector('.copie');
const show = document.querySelector('.show');
const atarle = document.querySelector('.pop');
const close = document.querySelector('.close');

close.addEventListener('click',()=>{
    atarle.style.display = 'none';
})

btnEncriptar.addEventListener('click',()=>{
    console.log('Clickeando BROOO');
    if (textArea.value === '') {
        textoRes.innerHTML = "¡Lo sentimos! Ningun texto encontrado";
        console.log("¡Lo sentimos! Ningun texto encontrado");
    } else {
        console.log(textArea.value);
        show.style.height = "90%";
        let res = encriptar(textArea.value);
        btnDesencriptar.disabled = false;
        imagen.style.display = 'none';
        textoRes.style.textAlign = "left";
        textoRes.innerHTML = res;
        console.log(textoRes.textContent);
        textoRes.style.marginTop = '0';
        btnCopie.style.display = 'flex';
        console.log("SI ENTRO");
    }
});

btnDesencriptar.addEventListener('click',()=>{
    if (textArea.value === '') {
        textoRes.innerHTML = "¡Lo sentimos! Ningun texto encontrado";
    } else {
        let res = desencriptar(textArea.value);
        textoRes.innerHTML = res;
    }
})

btnCopie.addEventListener('click',()=>{
    const copiarContenido = async () => {
        try {
          await navigator.clipboard.writeText(textoRes.textContent);
          console.log('Contenido copiado al portapapeles');
          atarle.style.display = 'block';
          textArea.value = '';
          setTimeout(function() {
            atarle.style.display = 'none';
          }, 2000);
        } catch (err) {
          console.error('Error al copiar: ', err);
        }
    }

    copiarContenido();
})

if ("d"==="D") {
    console.log("Mayuscula");
} else {
    console.log("Si funciona");
}

function encriptar(word){
    let encriptWord="";
    for (i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            break;
        }else {
            if(word[i] === word[i].toUpperCase()){
                return 'Mayusculas y/o caracteres especiales No admitidos';
            }
        }
    }

    for (i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "e":
                encriptWord+="enter";
                break;
            
            case "i":
                encriptWord+="imes";
                break;

            case "a":
                encriptWord+="ai";
                break;

            case "o":
                encriptWord+="ober";
                break;

            case "u":
                encriptWord+="ufat";
                break;

            default:
                encriptWord+=word[i];
                break;
        }
    }

    return encriptWord;
}

function desencriptar(word){
    let desencriptWord="";
    for (i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            break;
        }else {
            if(word[i] === word[i].toUpperCase()){
                return console.log(`Mayuscula No admitidas`);
            }
        }
    }

    for (i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "e":
                if (word[i]=== "e" && word[i+1] === "n" && word[i+2] === "t" && word[i+3] === "e" && word[i+4] === "r") {
                    desencriptWord+="e";
                    i++;
                    i++;
                    i++;
                    i++;
                    break;
                }else {
                    desencriptWord+="e";
                    break;
                }
            case "i":
                if (word[i]=== "i" && word[i+1] === "m" && word[i+2] === "e" && word[i+3] === "s") {
                    desencriptWord+="i";
                    i++;
                    i++;
                    i++;
                    break;
                }else {
                    desencriptWord+="i";
                    break;
                }
                break;

            case "a":
                if (word[i]=== "a" && word[i+1] === "i") {
                    desencriptWord+="a";
                    i++;
                    break;
                }else {
                    desencriptWord+="a";
                    break;
                }

            case "o":
                if (word[i]=== "o" && word[i+1] === "b" && word[i+2] === "e" && word[i+3] === "r") {
                    desencriptWord+="o";
                    i++;
                    i++;
                    i++;
                    break;
                }else {
                    desencriptWord+="o";
                    break;
                }

            case "u":
                if (word[i]=== "u" && word[i+1] === "f" && word[i+2] === "a" && word[i+3] === "t") {
                    desencriptWord+="u";
                    i++;
                    i++;
                    i++;
                    break;
                }else {
                    desencriptWord+="u";
                    break;
                }

            default:
                desencriptWord+=word[i];
                break;
        }
        
    }

    return desencriptWord;
}