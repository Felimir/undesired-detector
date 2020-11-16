class UndesiredDetector {
    constructor(user, key){
        // Sightengine API key user
        this.user = user;

        // Sightengine API key secret
        this.key = key;

        // Login into Sightengine with the gived credentials
        const sightengine = require("sightengine")(user, key);

        // Set the client
        this.client = sightengine;
    };

    async localImage(){
        
    };

    async urlImage(url, ...models){
        const check = await this.client.check(...models).set_url(url);


    };
}