

const { PHASE_DEVELOPMENT_SERVER} = require("next/constants")
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "yanabilous05",
        mongodb_password: "wLc5gObcYQ8oKquO",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev"

      }
    };
  }
  return {
    env: {
      mongodb_username: "yanabilous05",
      mongodb_password: "wLc5gObcYQ8oKquO",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site"

    }
  };
};

// module.exports = (phase, { defaultConfig }) => {
//   const isDev = phase === 'development';
//
//   const env = {
//     mongodb_username: 'yanabilous05',
//     mongodb_password: 'wLc5gObcYQ8oKquO',
//     mongodb_clustername: 'cluster0',
//     mongodb_database: isDev ? 'my-site-dev' : 'my-site',
//   };
//
//   return {
//     env,
//   };
// };
