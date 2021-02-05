class Player{
    constructor(){
    
    }
    getCount(){
        var playerCountNode=database.ref("playerCount")
        playerCountNode.on("value",function(data){
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').set({
            playerCount:count
        })
    }
    update(name){
var playerIndex="player"+playerCount
     database.ref(playerIndex).set({
        name:name
    })}
    getPlayerInfo(){
        var playerInfo=database.ref("player")
        playerInfo.on("value",function(data){
            allPlayers=data.val()
        })
    }
}