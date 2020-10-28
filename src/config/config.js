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

let environment = window._env_.ENVIRONMENT  || 'development';

export const setEnvironment = customEnvironment => (environment = customEnvironment);

export const config = configs[environment];
