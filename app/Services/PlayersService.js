import { appState } from "../AppState.js";

class PlayersService {
    addScore(name) {
        let player = appState.players.find(p => p.name == name)
        player.score++
    }

    subScore(name) {
        let player = appState.players.find(p => p.name == name)
        player.score--

    }
}

export const playersService = new PlayersService();