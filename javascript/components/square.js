function createSquare (width, height, color) {
  const square = document.createElement('div');
  
  square.style.width = `${width}px`;
  square.style.height = `${height}px`;
  square.style.backgroundColor = color;
  
  return square
}

export default createSquare;
