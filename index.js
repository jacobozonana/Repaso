
// Los imports siempre deben ir hasta arriba
const request = require('request');
const axios = require ('axios');

// Variables


//  Alcance Global
var juanita = 'Juanita' 

//  variable de alcance local
let indice = 0 

// variable de alcance local
const pi = 3.141592

// 3 maneras de declarar funciones

// Convencional ó VANILLA (quiere decir algo puro)
function miFuncion (){
    console.log('soy una funcion')
}

// Arrow Function, ES6 salio en 2015(ES2015)
const otraFuncion = () => {
    console.log('soy una funcion flecha')
}

// Funcion Anonima
const funcionAnonima = function(){
    console.log('soy anonima shhhh')
}

// Llamadas a una API Request y Axios "los imports siempre van hasta arriba"

const getBreakingBadQuote = ()=> {
    const URL= 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    request.get(URL,(err, res, body)=>{
        if (res.statusCode ===200){
            const json = JSON.parse(body)
            console.log(`${json[0].author} dijo: ${json[0].quote}`)
        } else console.log(err)
    }
    
)
}
getBreakingBadQuote()

const getBreakingBadQuoteAxios = ()=>{
    const URL= 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    axios.get(URL)
    .then((res)=>{
        console.log(res.data[0])
    })
    .catch((err)=>{
        console.log(err)
    })
}

getBreakingBadQuoteAxios()














