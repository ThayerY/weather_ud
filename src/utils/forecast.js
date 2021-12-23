const request = require('request')
require('dotenv').config()


const forecast = (latitude, longitude, callback) => {
  const api_key = process.env.API_KEY_DARK_SKY
  const url = `https://api.darksky.net/forecast/${api_key}/${latitude},${longitude}`

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('unable to connect to weather services', undefined)
    } else if (body.error) {
      callback('The given location is invalid', undefined)
    } else {
      callback(undefined, `${body.daily.data[0].summary} its currently ${body.currently.temperature.toFixed()}°C degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
    }
  })
}



module.exports = forecast
// export default forecast