
var friendList = require('../app/data/friends.js');
var path = require('path');

//==============================================
//ROUTING
//==============================================

// module.exports = function(app){
// 	app.get('/api/friends', function(req, res){
// 		res.json(friendList);
// 	});

// 	app.post('/api/friends', function(req, res){
// 		friendList.push(req.body);
// 	})
// };


var ApiRoutes = function() {
    this.getApi = function(app, friends) {
        app.get('/api/friends', function(req, res) {
            res.json(friends);
        });

    };
    this.postAPI = function(app, friends) {
        app.post("/api/friends", function(req, res) {
            var newUser = req.body;
            var differences = [];
            if (friends.length < 1) {
                console.log("unable to do calculation; not enough users");
            } else {
                comparator(friends, newUser, differences);
                var lowest = differences[0];
                for (var i = 0; i < differences.length; i++) {
                    if (differences[i] < lowest) {
                        lowest = differences[i];
                    }
                };
                var bestMatch = differences.indexOf(lowest);
                res.send(friends[bestMatch]);
            };
            friends.push(newUser);
        });
    }
};
//you da man Chance
function comparator(friends, newUser, differences) {
    var curUserIndex = 0;
    while (curUserIndex < friends.length) {
        var totalDifference = 0;
        for (var i = 0; i < newUser.scores.length; i++) {
            totalDifference += Math.abs(parseInt(friends[curUserIndex].scores[i]) - parseInt(newUser.scores[i]));
        }
        differences.push(totalDifference);
        curUserIndex++;
    }
}


module.exports = ApiRoutes;