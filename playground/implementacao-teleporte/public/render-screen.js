export default function renderScreen(screen, game, requestAnimationFrame, currentPlayerId) {
    const context = screen.getContext('2d')
    context.fillStyle = 'white'
    context.clearRect(0, 0, 100, 100)

    for (const playerId in game.state.players) {
        if(playerId != currentPlayerId){
            const player = game.state.players[playerId]
            context.fillStyle = 'grey'
            context.fillRect(player.x, player.y, 5, 5)
        }
    }

    for (const fruitId in game.state.fruits) {
    const fruit = game.state.fruits[fruitId]
    context.fillStyle = 'green'
    context.fillRect(fruit.x, fruit.y, 5, 5)
    }

    const currentPlayer = game.state.players[currentPlayerId]    
    if(currentPlayer) {
        const image = new Image()
        image.src = 'https://avatars.dicebear.com/api/identicon/' + currentPlayerId + '.svg'

        image.addEventListener("load" , draw , false); //Remove = Empty canvas
        
        function draw() {
            context.drawImage(image, currentPlayer.x, currentPlayer.y, 5, 10)
        }

        draw(); 
    }

    requestAnimationFrame(() => {
        renderScreen(screen, game, requestAnimationFrame, currentPlayerId)
    })
}
