const data = require('@begin/data')

exports.handler = async function todos (req) {
  const folders = await data.get({
    table: 'folders',
    key: req.pathParameters.name,
  });
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      folders,
    }),
  }
}
