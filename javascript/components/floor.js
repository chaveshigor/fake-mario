import { configs } from "../configs.js";
import FloorSprite from "../sprites/floorSprite.js";

class Floor {
  constructor(mainComponent) {
    this.mainComponent = mainComponent;
    this.elementWidth = mainComponent.style.width;
    this.elementRows = 4;
    this.sprite = new FloorSprite();
    this.element = document.createElement('div');
    this.setStyles()
  }

  render() {
    const { sprite, mainComponent, element } = this;
    const blocksPerLine = parseInt(mainComponent.style.width)/configs.blockSize;
    const interactions = blocksPerLine * this.elementRows;

    for(var i = 0; i < interactions; i++){
      element.appendChild(sprite.create());
    }

    mainComponent.appendChild(element);
  }

  setStyles() {
    this.element.style.display = 'flex';
    this.element.style.flexDirection = 'row';
    this.element.style.flexWrap = 'wrap';
    this.element.style.width = mainComponent.style.width;
    this.element.style.position = 'absolute';
    this.element.style.bottom = 0;
    this.element.style.marginBottom = mainComponent.style.marginBottom;
  }
}

export default Floor;
