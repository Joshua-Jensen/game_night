import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";


export class PlayersController {
    constructor() {
        console.log('Players Controller loaded');
        this.drawPlayers()
    }

    drawPlayers() {
        let players = appState.players
        let template = ``
        players.forEach(p => template += p.PlayerTemplate)
        document.getElementById('app').innerHTML = template
        console.log('drawing players', players.template);
    }

    addScore(name) {

    }

    subScore(name) {
        playersService.subScore
        this.drawPlayers()

    }

}