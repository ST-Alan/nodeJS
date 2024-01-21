const {uuidv} = require('../plugins/get-id.plugin')
const {getAge} = require('../plugins/get-age.plugin')
const {http} = require('../plugins/http-client.plugin')
const {httpAxios} = require('../plugins/get-axios.plugin')
const buildLogger = require('../plugins/logger.plugin')




module.exports={
    uuidv,
    getAge,
    http,
    httpAxios,
    buildLogger
}