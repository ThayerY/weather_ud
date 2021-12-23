const request = require("request")
require('dotenv').config()

const geocode = (address, cb) => {
  const api_key = process.env.API_KEY_MAPBOX
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?proximity=-74.70850,40.78375&access_token=${api_key}&limit=1`

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      cb('unable to connect to services', undefined)
    } else if (!body.features || body.features.length === 0) {
      cb('the given location is invalid', undefined)
    } else {
      cb(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
// export default geocode