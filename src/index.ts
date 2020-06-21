'use strict'

type Test = {
  hoge: string
}

var cf = require('cloudflare')({
  token: process.env.CF_API_TOKEN
})

cf.enterpriseZoneWorkersKVNamespaces.browse(process.env.CF_ACCOUNT_ID).then((res: Test) => console.log(res))
