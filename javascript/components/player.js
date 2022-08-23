import PlayerSprite from "../sprites/playerSprite.js";

class Player {
  constructor(mainComponent) {
    this.mainComponent = mainComponent;
    this.element = document.createElement('div');
    this.setStyles();
  }
  
  render() {
    const { element } = this;

    element.appendChild(new PlayerSprite().create());
    mainComponent.appendChild(element);
  }

  setStyles() {
    const { element } = this;

    element.style.position = 'absolute';
    element.style.bottom = '70px';
  }
}

export default Player;
