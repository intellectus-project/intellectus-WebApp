const development = {
    endpoints: {
        backend: 'http://localhost:3010/'
    }
};

const configs = {
    development
};

let environment = window._env_ || 'development';

export const setEnvironment = customEnvironment => (environment = customEnvironment);

export const config = configs[environment];
