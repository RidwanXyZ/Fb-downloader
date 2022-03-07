const peler = require('axios')
const api = 'https://fbdownloader.online/api/analyze'

let res = ''
/* 
    @params required: link
*/

const memekFb = async (link) => {
  let data = await peler.post(api, {"q": link})
  //console.log(data.data)
  const res = data.data.resource
  console.log(res)
}

module.export = { memekFb }