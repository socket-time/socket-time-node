module.exports = function(router) {

    require.main.require('./routes/v1/endpoints.js')(router)

}