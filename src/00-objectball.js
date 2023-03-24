function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }


  console.log(gameObject());



  function numPointsScored(playerName) {
    for (let team in gameObject) {
      if (gameObject[team]['players'][playerName]) {
        return gameObject[team]['players'][playerName]['points'];
      }
    }
    console.log (numPointsScored);
  }
  
  function shoeSize(playerName) {
    for (let team in gameObject) {
      if (gameObject[team]['players'][playerName]) {
        return gameObject[team]['players'][playerName]['shoe'];
      }
    }
    console.log (shoeSize);
  }
  
  function teamColors(teamName) {
    for (let team in gameObject) {
      if (gameObject[team]['teamName'] === teamName) {
        return gameObject[team]['colors'];
      }
    }
    console.log(teamColors); 
  }
  
  function teamNames() {
    console.log([gameObject['home']['teamName'], gameObject['away']['teamName']]);
  }
  
  function playerNumbers(teamName) {
    for (let team in gameObject) {
      if (gameObject[team]['teamName'] === teamName) {
        let numbers = [];
        for (let player in gameObject[team]['players']) {
          numbers.push(gameObject[team]['players'][player]['number']);
        }
        return numbers;
      }
    }
    console.log(playerNumbers); 
  }
  
  function playerStats(playerName) {
    for (let team in gameObject) {
      if (gameObject[team]['players'][playerName]) {
        return gameObject[team]['players'][playerName];
      }
    }
    console.log(playerStats); // Player not found
  }
  
  function bigShoeRebounds(game) {
    let largestShoeSize = 0;
    let playerWithLargestShoeSize;
    
    // Find player with largest shoe size
    for (let team in game) {
      for (let player in game[team]["players"]) {
        let shoeSize = game[team]["players"][player]["shoe"];
        if (shoeSize > largestShoeSize) {
          largestShoeSize = shoeSize;
          playerWithLargestShoeSize = game[team]["players"][player];
        }
      }
    }
    
    // Return number of rebounds for player with largest shoe size
    return playerWithLargestShoeSize["rebounds"];
  }