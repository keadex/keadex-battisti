const materialColors = require("material-colors").default

//---------- generateColors
export function generateColors(numColors:number) : string[] {
  let RGBColor:number[] = [29,59,107];
  let divider = (255-RGBColor[2])/numColors;
  let colors:string[] = [];
  for(let i=0; i<numColors; i++){
    colors.push(rgbToHex(Math.round(RGBColor[0]), Math.round(RGBColor[1]), Math.round(RGBColor[2])));    
    RGBColor[0] += divider;
    RGBColor[1] += divider;
    RGBColor[2] += divider;
  }
  return colors;
}


//---------- generateMaterialPalette
export function generateMaterialPalette(numColors:number) : string[] {
  // if (numColors > Object.keys(materialColors).length) throw "To much colors: " + numColors;
  let keys = Object.keys(materialColors);
  let colors : string[] = [];
  let variants = Math.ceil(numColors/(Object.keys(materialColors).length-6));
  for (var i = 0; i < keys.length && colors.length < numColors; i++){
    var key = keys[i];
    if (key != "darkText" && key != "lightText" && key != "darkIcons" && key != "lightIcons" && key != "white" && key != "black"){
      for (var j = 0; j<variants && colors.length < numColors; j++){
        colors.push(materialColors[key][400+(100*j)]);
      }
    }
  }
  return colors;
}


//---------- componentToHex
export function componentToHex(c:number) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}


//---------- rgbToHex
export function rgbToHex(r:number, g:number, b:number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}