{
  "location": { // Using GeoJson Spec
    "type": "Point",
    "coordinates": [Number]
  },
  "sexagesimal_coordinates": [Number], // Original coordinates from INEGI source
  "itrf_coordinates": [Number], // Converted coordinates to itrf2008 format.
  "nad27_coordinates": [Number], // Previous coordinates 
  "height": Number, // height of the place
  "town": String, // name of the town
  "state": String, // name of the state
  "city": String, // name of the city
  "fullName": String, // Place full name,(Search)
  "zipCode": String, // Optional information
  "extraInfo": [String], // Extra information
  "provider": [Object], // Information about the providers (INEGI, Google, Geohack, etc) as provider:{information:content,information:url, ...}
  "lastUpdated": Date, // Grails generated information
  "dateCreated": Date, // Grails generated information
}