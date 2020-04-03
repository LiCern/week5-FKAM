const handlers = require("./handlers");

function router(request, response) {

  console.log("REQUEST FOR:", request.url);

  const { url } = request;
  if (url === "/") {
    handlers.home(request, response);
  } else if (url.includes('public')) {
    handlers.public(request, response);
  } else if (url === '/getposts' && request.method === "POST") {
    handlers.getposts(request, response);
  } else if (url === '/delete' && request.method === "DELETE") {
    handlers.deletepost(request, response);
  } else {
    handlers.missing(request, response);
  } 

  // Still needed
  // POST request when submit form data
}

module.exports = router;
