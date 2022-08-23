import { configs } from "../configs.js";

class PlayerSprite {
  constructor() {

  }

  create() {
    const sprite = document.createElement('div');

    sprite.style.width = `${configs.blockSize*4}px`;
    sprite.style.height = `${configs.blockSize*8}px`;
    sprite.style.backgroundColor = 'black';

    return sprite;
  }
}

export default PlayerSprite;
