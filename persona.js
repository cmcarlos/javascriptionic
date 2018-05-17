function Dni (numero1) // función constructura, la primera siempre en mayusculas.
{
    this.numero = numero1;
}

Dni.prototype=
{
    calcularLetra : function ()
    {
        var letra='';
        var secuencia_dni = "TRWAGMYFPDXBNJZSQVHLCKE";
        letra = secuencia_dni.charAt(this.numero%23);

        return letra;
    }
}

//var cadena= dni+letra;
Dni.esValido = function(cadena)
{
    var valido=false;
    var longitud=cadena.length;
        if(longitud<9)
        {
            valido=true;
            console.log("el número tiene una longitud adecuada");
            
            
        }else
        {
            valido=false
            console.log("El número es demasiado largo");
            
        }
    return valido;
}

//var resultado=Dni.esValido(cadena);
console.log(Dni.esValido(333333333333333));

var dni = new Dni (298);

//console.log(dni.numero);
//console.log(dni.__proto__);
var letra= dni.calcularLetra();
//console.log(letra);



