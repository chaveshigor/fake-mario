import { configs } from "../configs.js"

class FloorSprite {
  constructor() {
    this.width = configs.blockSize;
    this.height = configs.blockSize;
    this.color = '#563a2f';
  }

  create() {
    const sprite = document.createElement('div');

    sprite.style.width = `${this.width}px`;
    sprite.style.height = `${this.height}px`;
    sprite.style.backgroundColor = this.color;
    sprite.style.boxSizing = 'border-box';
    sprite.style.border = 'solid 1px gray';

    return sprite;
  }
}

export default FloorSprite;
