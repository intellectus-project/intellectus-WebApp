const development = {
    endpoints: {
        backend: 'http://localhost:3010/'
    }
};

const staging = {
    endpoints: {
        backend: 'https://intellectus-api.herokuapp.com/'
    }
};

const configs = {
    development,
    staging
};

let environment = process.env.ENVIRONMENT  || 'development';

export const setEnvironment = customEnvironment => (environment = customEnvironment);

export const config = configs[environment];
