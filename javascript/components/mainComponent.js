import { configs } from "../configs.js";

const mainComponent = document.getElementById('mainComponent');
mainComponent.style.display = 'flex';
mainComponent.style.flexWrap = 'wrap';
mainComponent.style.justifyContent = 'flex-start';
mainComponent.style.alignItems = 'flex-start';
mainComponent.style.backgroundColor = '#c3fbf9';
mainComponent.style.width = `${parseInt(configs.blockSize*100)}px`;
mainComponent.style.height = `${parseInt(configs.blockSize*56)}px`;
mainComponent.style.marginBottom = `${parseInt(configs.blockSize*3)}px`;

export default mainComponent;