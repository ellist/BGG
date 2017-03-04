var appRouter = function(app) {

    app.get("/", function(req,res){
        res.send("Hello World");
    });

    app.get("/account", function(res, req){
        var accountMock = {
            "username" : "nraboy",
            "password" : "1234",
            "twiter" : "@nraboy"
        }

        if(!req.query.username) {
            return res.send({"status":"error", "message" : "missing username"});
        } else if(req.query.username != accountMock.username) {
            return send({"status": "error", "message" :"wrong username"});
        } else {
            return res.send(accountMock);
        }
    });

    app.post("/account", function(req,res){
        if(!req.body.username || !req.body.password || !req.body.twitter) {
            return res.send({"status": "error", "message": "missing a parameter"});
        } else {
            return res.send(req.body);
        }
    });
}

module.exports = appRouter;
