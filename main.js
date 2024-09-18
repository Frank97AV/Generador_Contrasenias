let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let limpiar ="";
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


function generar(){
    let numeroDigitado = parseInt (cantidad.value);

    let mayuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numeros = '0123456789';
    let especiales = '!@#$%^&*()';

    if(numeroDigitado < 6 ){

        alert("La cantidad de caractares tiene que ser mayor que 6 ");
    
    }

    let password = '';
    for( let i = 0; i < numeroDigitado ; i++){

        let caracterAleaotrio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleaotrio;

    }
    console.log(password);
    contrasena.value = password;
    
    let contMayus = recorrer(password, mayuscula);
    let contNum = recorrer(password, numeros);
    let contEspe = recorrer(password, especiales);

    if(contMayus > 0 && contNum > 0 && contEspe > 0){
        alert("Nivel de contrasenia: Fuerte ");
    } else if((contMayus > 0 && contNum > 0 && contEspe == 0 )||(contMayus > 0 && contNum == 0 && contEspe > 0 ) || (contMayus == 0 && contNum > 0 && contEspe > 0)){
        alert("Nivel de contrasenia: Media ");
    } else {
        alert("Nivel de contrasenia: Baja ");
        alert("Se recomienda considerar contrasenias con minimo 1 mayuscula, 1 numero y 1 caracter especial");
    };
        

}

function limpiarcampo(){
    document.getElementById('cantidad').value = limpiar;
    document.getElementById('contrasena').value = limpiar;
}

function recorrer(a ,b ){
    let contador = 0 ;
    for( let i = 0; i < a.length ; i++){
        for( let x = 0; x < b.length ; x++){
            if(a[i] == b[x]){
                contador++;
            }
        }
    }
    return contador;
}