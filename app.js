//Dependencias
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const endereco = process.argv[2]

//Main
if(!endereco)
  return console.log('Por favor informe um endereço')

geocode(endereco, (error, {latitude, longitude, location})=>{

  if(error)
    return console.log(error)

  forecast(latitude, longitude, (error, forecastdata) => {

    if(error)
      return console.log('Error', error)

      console.log(location)
      console.log(forecastdata)
  })
  
})

