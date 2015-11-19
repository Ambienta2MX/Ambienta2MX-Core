{
  "location":{ // Using GeoJson Spec
    "type":"Point",
    "coordinates":[Number],
  },
  "height":Number, // height of the place
  "description": String, // Description about the weather
  "rainfallIntensity": Number, // Rain Intensity (Percentage)
  "rainfallProbability": Number, // Rain probability (Percentage)
  "temperature": Number, // Celsius (desired)
  "apparentTemperature": Number, // Apparent Temperature (Some sources could provide this information)
  "dewPoint": Number, // Dew Point
  "humidity": Number, // Humidity index (Percentage)
  "windSpeed": Number, // Wind speed (Km/h)
  "windDirection": Number, // Wind direction, considering eight cardinal points
  "windBearing": Number, // Wind direction (Consdiering 360 degrees)
  "visibility": Number, // Visibility (Percentage)
  "cloudCover": Number, // Clouds on the sky (Percentage)
  "pressure": Number, // Pressure (mmHg)
  "provider": [Object],  // Providers list as provider:{information:content,information:url, ...}
  "sampleDate": Date,  // Sample date
  "lastUpDated": Date, // Extra information
  "dateCreated": Date, // Extra information
  "fullName": String // For text searching purposes
}