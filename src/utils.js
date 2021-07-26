const request = require('request');

const forcast = (location, callback) => {
  // const logger=new Logger()

  const url =
    "http://api.weatherstack.com/current?access_key=aa5f90eb7f7e65339a91d615848efa8b&query=" +
    location;

  request({ url, json: true }, (error, { body } ) => {
    if (error) {
      // logger.error("unable to connect", error)
      callback("unable to connect", undefined);
    } else if (body.error) {
      // logger.error("bad request",body.error.code,body.error.info)
      callback("cannot find location",undefined);
    } else {
      callback(undefined, {
        temperature: body.current.temperature,
        location: location,
        feelslike: body.current.feelslike,
        weather:body.current.weather_descriptions[0]
      });
      // logger.info(" data retrieve successfully for",location)
    }
  });
};

module.exports = forcast;
