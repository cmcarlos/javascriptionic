function Persona (peso1, altura1)
{
    this.altura = altura1;
    this.peso = peso1;
}

Persona.prototype=
{
    calcularIMCNumerico : function ()
    {
        var imc = 0;

            imc = this.peso / Math.pow(this.altura, 2);

            return imc;
    },

    calcularIMCLiteral : function ()
    {
        var imc = persona.calcularIMCNumerico();
        var str_imc = "";

                if (imc < 16) {
                    str_imc = 'desnutrido';

                } else if (imc >= 16 && imc < 18) {
                    str_imc = 'delgado';

                } else if (imc >= 18 && imc < 25) {
                    str_imc = 'ideal';

                } else if (imc >= 25 && imc < 31) {
                    str_imc = 'sobrepeso';
                }

                else {
                    str_imc = 'obeso';
                }

            return str_imc;
    }
}

var persona = new Persona(90, 1.80);
console.log(persona.calcularIMCNumerico());
console.log(persona.calcularIMCLiteral());