
class UndesiredDetector {
    constructor(user, key){
        // Sightengine API key user
        this.user = user;

        // Sightengine API key secret
        this.key = key;

        // Login into Sightengine with the above credentials
        const sightengine = require("sightengine")(key, user);

        // Set the client
        this.client = sightengine;
    };

    localImage(){
        
    };

    urlImage(){
        
    };
}