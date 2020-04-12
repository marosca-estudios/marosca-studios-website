const rewireStyledComponents = require("react-app-rewire-styled-components")

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env, {
    fileName: false,
  })
  return config
}
