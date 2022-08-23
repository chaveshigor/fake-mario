// Components
import mainComponent from "./components/mainComponent.js";
import Floor from "./components/floor.js";
import Player from "./components/player.js";

// Listeners
import KeyBoardEvents from "./commands/keyStroke.js";

class Game {
  renderAll(){
    new Floor(mainComponent).render();
    new Player(mainComponent).render();
    new KeyBoardEvents().listen();
  }
}

export default Game;
