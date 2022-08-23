class KeyBoardEvents {
  constructor() {

  }

  listen() {
    document.addEventListener ('keydown', (event) => {
      const keyName = event.key;
      console.log('keypress event' + keyName);
    });
    
    document.addEventListener ('keyup', (event) => {
      const keyName = event.key;
      console.log('keyup event' + keyName);
    });
  }
}

export default KeyBoardEvents;
