function bodyPaerser(request, callback) {
  let body = '';

  //event listeners
  request.on('data', (chunk) => {
    body += chunk;
  });

  request.on('end', () => {
    body = JSON.parse(body);
    request.body = body;
    callback();
  });
}

module.exports = bodyPaerser