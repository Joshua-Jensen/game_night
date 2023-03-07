export class Player {
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.score = 0;
    }

    greeting() {
        console.log(`${this.name} has joined the game`);
    }

    get PlayerTemplate() {
        return `
        <div class="d-flex">

                <img src="${this.img}" alt="" class="profile-img">
                <h3 class="text-light p-2"> ${this.name}</h3>
              </div>
              <div>

                <img src="assets\img\plusCircle.png" alt="" class="button-img" onclick="app.PlayersController.subScore('${this.name}')">
                <span class="text-light"> ${this.score}</span>
                <img src="assets\img\plusCircle.png" alt="" class="button-img" onclick="app.PlayersController.addScore('${this.name}')>
              </div>
        `
    }
}