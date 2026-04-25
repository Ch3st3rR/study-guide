// Requisiton
postsFetch.interceptors.request.use(
    function(config) {
        console.log("Before requisiton...")
        return config; 
    },
    function(error) {
        return Promise.reject(error); 
    }
);

// Response
postsFetch.interceptors.response.use(
    function(response) {
        console.log("Before response...")
        return response; 
    },
    function(error) {
        return Promise.reject(error); 
    }
);