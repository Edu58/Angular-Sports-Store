const jwt = require('jsonwebtoken')

const APP_SECRET = "thestoresecret"
const USERNAME = "theadmin"
const PASSWORD = "enter"

const mappings = {
    get: ["/api/orders", "/orders"],
    post: ["/api/products", "/products", "/api/categories", "/categories"]
}

function requireAuth (method, url) {
    return (mappings[method.toLowerCase()] || []).find(p => url.startsWith(p)) !== undefined
}

module.exports = function (req, res, next) {
    if (req.url.endsWith("/login") && req.method == "POST") {
        if (req.body && req.body.name == USERNAME && req.body.password == PASSWORD) {
            let token = jwt.sign({
          data: USERNAME
        }, APP_SECRET, {
          expiresIn: "1h"
        })

            res.json({ success: true, token: token })
            
        } else {
          res.json({
            success: false
          })
        }
        
        res.end()
        return;

    } else if (requireAuth(req.method, req.url)) {
        let token = req.headers['authorization'] || '';

        if (token.startsWith("Bearer<")) {
            token = token.substring(7, token.length - 1)

            try {
                jwt.verify(token, APP_SECRET)
                next()
            } catch (error) {
                console.log(error)
            }
        }

        res.statusCode = 401;
        res.end();
        return;
    }

    next();
}