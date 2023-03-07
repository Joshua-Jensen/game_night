import { Player } from "./Models/Players.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  players = [
    new Player('josh', 'https://randompicturegenerator.com/img/people-generator/g5f414fcfc17f5cfb64508b4535bb83fef117c6e75afb1a138753a82b458f7ad98909fa79ede825f63ddfa6d754e02d9a_640.jpg'),
    new Player('tim', 'https://randompicturegenerator.com/img/people-generator/g5b697ab469f8775e5f7b506c021049dc9642d3e99bbc3cc7642b1d3c2382287f24cbcc37a4f00e521933c07c09e73216_640.jpg'),
    new Player('zach', 'https://randomwordgenerator.com/img/picture-generator/5fe3dd42425bb10ff3d8992cc12c30771037dbf85254794075277ad79345_640.jpg'),
  ]
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

console.log(appState.players);