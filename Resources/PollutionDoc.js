{
  "location": { // Using GeoJson Spec
    "type": "Point",
    "coordinates": [Number],
  },
  "height": Number, // height of the place
  "airQuality": Number, // Air Quality (Percentage)
  "ozone": Number, // Ozone index (Percentage)
  "sulphurDioxide": Number, // Sulphur Dioxide index (Percentage)
  "nitrogenDioxide": Number, // Nitrogen Dioxide index (Percentage)
  "carbonMonoxide": Number, // Carbon Monoxide index (Percentage)
  "UV": Number, // Ultraviolet index 
  "provider": [Object], // Providers list as provider:{information:content,information:url, ...}
  "sampleDate" : Date, // Sample date
  "lastUpdated": Date, // Grails generated information
  "dateCreated": Date, // Grails generated information
  "fullName": String // For text searching purposes
}