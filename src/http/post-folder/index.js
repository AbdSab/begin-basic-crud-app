let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function post (req) {
  const file = arc.http.helpers.bodyParser(req);
  file.created = file.created || Date.now();
  await data.set({
    table: 'folders',
    key:'',
    ...file,
  });
  return {
    statusCode: 201,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: "OK",
  }
}
