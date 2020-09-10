@app
begin-app

@http
get  /folder/:name
post /folder/:name
put /folder/:name
delete /folder/:name


@tables
data
  scopeID *String
  dataID **String
  ttl TTL
