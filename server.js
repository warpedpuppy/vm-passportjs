const express = require('express'),
    jsonBodyParser = express.json(),
    AuthService = require('./auth/auth-service'),
    app = express();

require('./auth/passport')

app.post('/login', jsonBodyParser, AuthService.passportLocalStrategy, (req, res) => {
    res.send("passed all middleware")
});
app.listen(8000, () => {
    console.log(`Server listening at http://localhost:8000`)
})