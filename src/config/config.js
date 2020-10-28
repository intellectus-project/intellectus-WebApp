const development = {
    endpoints: {
        backend: 'http://localhost:3010/'
    }
};

const production = {
    endpoints: {
        backend: 'https://intellectus-api.herokuapp.com/'
    }
};

const configs = {
    development,
    production
};

let environment = process.env.NODE_ENV;

export const setEnvironment = customEnvironment => (environment = customEnvironment);

export const config = configs[environment];
