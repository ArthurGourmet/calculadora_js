const calculadora = {  
    sumar: function sumarNumeros(n1, n2) {
       return n1 + n2
    },

    restar: function restarNumeros(n1, n2) {
        return  n1 - n2
    },
    
    multiplicar: function multiplicarNumeros(n1, n2) {
        return  n1*n2
    },

    dividir: function dividirNumeros(n1, n2) {
        return  n1/n2
    }


};

console.log(calculadora.sumar(3,5))

//forma mais simplificada ao meu ver e tambem um otimo treinamento

const calculadoraPratica = (n1,n2,x)=>{
    if(x=== "+"){
        return n1 + n2
    }else if(x=== "-"){
        return n1 - n2
    }else if(x=== "/"){
        return n1 / n2
    }else{
        return n1 * n2
    }
    

}

console.log(calculadoraPratica(2,4,'+'))

