Networking - http and tcp/udp
    - stateless
    -connectionless
    -flexible
    -HTTP message
    -start line
    -req: GET /blog http/1.1
    -res: http/1.1 200 ok
    --headers
    ---{key:value}
    ----content-type:text/html
    ----content-type:application/json
    ----Cache-Control: public, max-age=0
    ----Date: Fri, 24 Aug 2018 15:23:58 GMT
    --BLANK LINE
    --body
    ---STUFF - HTML, 4k video (binary), image

Node Server
  - write headers
  - write body
  -- used the fs module - to read files
  - close connection
  -server.listen
  --3000
  - req, res objects

 Express Version
  - Express is Node.js when you write Express you are writing Node
  - app === express() === createApplication()
  - app.listen <------- server.listen
  - app.get(), .post(), .delete(), .listen(), .METHOD(), .post(), 
    .put(), .all()
  - served up static files with express.static() middleware

201
  - Middleware = any function that has access to req, res, next
  - Netwoking on the outside, node/express development on the inside
  -- app.use, anytime you see a callback/ (req, res, next) = {}
  --- next() is the way to move a piece of middleware forward
  -- express.json() - body.parser
  -- express.urlencoded() - body.parser
  -- helmet() - 3rd party module

Request Object
  - req.ip - contains requesters ip
  - req.path - contains the requested path
  - req.body - parsed data - only exists with the body.parser() 
                              .json(), 
                              .urlencoded({ extended: false })

Response Object
  - res.send (.end()) - closes the request with out a response
        send() = text/html
  - res.sendFile - send a file
  - res.locals - vars avalible to all of that res
  - res.json() (.jsonp()) - sends json back as applicatoin/json


