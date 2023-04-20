const calaulation = (exp) =>{
    console.log('inside calculation',exp);   
    return {
         statusCode:200,
         result:eval(exp)
    }
}

module.exports = {
    calaulation
}