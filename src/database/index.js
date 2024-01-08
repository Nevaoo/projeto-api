const mongoose = require('mongoose')

const options = {
    ssl: true,
    sslValidate: false
}

const URI = 'mongodb://ibm_cloud_bde1ad87_9359_448f_b815_cadd65b798b6:b59b7eebe70ccc8f1c3b03e1a297a8ef6e866f874af69e2fa403ede705734610@0b6437d8-dbe2-49ea-9f91-0433b717b642-0.66c11f9786bc40cfa3a0086f6582f2e7.databases.appdomain.cloud:32593,0b6437d8-dbe2-49ea-9f91-0433b717b642-1.66c11f9786bc40cfa3a0086f6582f2e7.databases.appdomain.cloud:32593,0b6437d8-dbe2-49ea-9f91-0433b717b642-2.66c11f9786bc40cfa3a0086f6582f2e7.databases.appdomain.cloud:32593/ibmclouddb?authSource=admin&replicaSet=replset'

mongoose.connect(URI, options)
    .then(data => {
        console.log('Conectado ao banco')
    })
    .catch(err => {
        console.log('Deu ruim', err)
    })
mongoose.Promise = global.Promise


module.exports = mongoose  