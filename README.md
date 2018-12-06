# Sample Restful API(Node.js)
Sample restful api

# Installation
* Install Node.js

    https://nodejs.org/

* Clone

    ```git clone https://github.com/mehranhamedani/SampleRestfulAPI_Node.js.git```

* Go to repo directory

    ```cd SampleRestfulAPI_Node.js```

* Run npm install

    ```npm install```

* And then run npm start

    ```npm start```

# Services
* Get countries

    ```
    GET: 
        http://[server-address]:[port-number]/getCountries
    Sample:
        http://localhost:5000/getCountries
    ``````
    
* Get country by country code

    ```
    GET: 
        http://[server-address]:[port-number]/getCountryByCode/[countryCode]
    Sample: 
        http://localhost:5000/getCountryByCode/IR
    ```
    
* Create country

    ```
    POST: 
        http://[server-address]:[port-number]/createCountry
    Sample: 
        http://localhost:5000/createCountry
    
    Body:
    {
        "name": "Iran",
        "code": "IR",
        "phone_code": "+98"
    }
    ```
