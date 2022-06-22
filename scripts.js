function comparaNumeros(num1,num2) {
    if (!num1 || !num2) return 'defina dois numeros!'
    const PrimeiraFrase = CriaPrimeiraFrase (num1, num2);
    const SegundaFrase = CriaSegundaFrase (num1, num2);

    return `${PrimeiraFrase} ${SegundaFrase}`;
}
    function CriaPrimeiraFrase(num1, num2){
        let saoiguais = '';
        if (num1 !== num2){
            SaoIguais = 'não são iguais';
        }
        else 
            SaoIguais = 'são iguais'
        return `Os numeros ${num1} e ${num2} ${SaoIguais}.`
    };  

    function CriaSegundaFrase(num1, num2){

        const soma = num1 + num2;

        let resultado10 = 'menor'
        let resultado20 = 'menor';
        
        const compara10 = soma > 10;
        const compara20 = soma > 20;
    
        if(compara10){
            resultado10 = 'maior';
        }

        if(compara20){
            resultado20 = 'maior';
        }
    
        return `sua soma é ${soma} que é ${resultado10} que 10 e ${resultado20} que 20.`
    
    }
        console.log(comparaNumeros(-10, 55))