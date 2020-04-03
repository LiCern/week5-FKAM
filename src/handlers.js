// fs = core module node
const fs = require('fs');
const path = require('path');
const model = require("./model");

const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  ico: "image/x-icon",
  png: "image/png",
  PNG: "image/png",
};

function home(request, response) {
  response.writeHead(302, { "location": "/public/index.html" });
  response.end();
}

function public(request, response) {
  let url = request.url;
  let urlArray = url.split('.');
  let assetExtension = urlArray[1];
  let type = types[assetExtension];

  const assetFilePath = path.join(__dirname, '..', url)

  fs.readFile(assetFilePath, (error, file) => {
    if (error) {
      response.writeHead(302, { "location": "/public/404.html"});
      response.end();
    } else {
      response.writeHead(200, { "content-type": type});
      response.end(file);
    }
  })
}

function missing(request, response) {
  response.writeHead(302, { "location": "/public/404.html" });
  response.end();
}

function getposts(request, response) {
    let body = "";
    request.on("data", chunk => (body += chunk));
    request.on("end", () => {
        let searchObject = body ? JSON.parse(body) : {};
        model.getListings(searchObject)
        .then( listings => {
            // console.log("THE LISTINGS!!!\n", listings);
            response.writeHead(200, { "content-type": "application/json" });
            response.end( JSON.stringify(listings) );
        })
        .catch( (err) => console.error("COULDNT GET ALL POSTS:", err) );
     });
}

function deletepost(req, res) {
    data = "";
    req.on("data", chunk => {data += chunk});
    req.on("end", () =>{
      idToDelete = Number(data);
      model.deleteListing(idToDelete)
      .then( () => {
        res.writeHead(200, {"content-type":"text/plain"});
        res.end("Deleted");
      })
      .catch( err => console.error("PROBLEM DELETING POST:", err) )
    });
}

module.exports = { home, missing, public, getposts, deletepost };
