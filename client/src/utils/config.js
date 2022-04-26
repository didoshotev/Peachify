/* eslint-disable */
require('dotenv').config();

const configuration = {
    development: {
        rinkeby: {
            networkName: 'Rinkeby',
            deployment: require('./deployments/deployments.rinkeby.json'),
        },
    },
};

export default configuration[process.env.REACT_APP_STAGE || 'development'];
