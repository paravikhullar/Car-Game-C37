class Game{
    constructor(){}

    getState(){
        var gamestateref = database.ref('gamestate');
        gamestateref.on("value", function(data){
            gameState = data.val();
        })
    }
    
    update(myState){
        database.ref('/').update({
            gamestate : myState
        })
    }

    async start(){
        player = new Player();

        var playerCountRef = await database.ref('playercount').once("value");
        if (playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
        }

        form = new Form();
        
        form.display();

        car1 = createSprite(100,200);
        car2 = createSprite(100,200);
        car3 = createSprite(100,200);
        car4 = createSprite(100,200);

        cars = [car1, car2, car3, car4];
    }

    play(){
        form.myHide();
        textSize (30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
       // console.log(allPlayers);

       if(allPlayers != undefined){

            var ind = 0;
            var mx = 0;
            var my;

            //var displayPosition = 130;
            for(var plr in allPlayers){
                ind = ind + 1;
                mx = mx + 200;
                my = displayHeight - allPlayers[plr].distance;

                cars[ind - 1].x = mx;
                cars[ind -1].y = my;

                if(ind == player.index){
                    cars[ind - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[ind - 1].y;
                }
                /*if(plr == "player" + player.index){
                    //fill ("red");
                }
                else{
                    fill("black");
                }
                displayPosition = displayPosition + 40;
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, displayPosition);*/
            }
        }
        if(keyIsDown(UP_ARROW) && player.index != null){
            player.distance = player.distance +50;
            player.update();
        }
        drawSprites();
    }



}