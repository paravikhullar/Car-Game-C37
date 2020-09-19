class Player{
    constructor(){
        this.distance = 0;
        this.name = null;
        this.index = null;
    }

    getCount(){
        var playerCountref = database.ref('playercount');
        playerCountref.on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            playercount : count
        })
    }

    update(){
        var playerindex = "players/player"+ this.index;
        database.ref(playerindex).set({
            name : this.name,
            distance : this.distance
        })
    }

    static getPlayerInfo(){
        var getPlayerInfoRef = database.ref('players');
        getPlayerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
}