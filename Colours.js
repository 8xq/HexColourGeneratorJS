/*  
This is the function that sets the new background according to the "HEX"
This will also change the "RGB" & "HEX" codes on the main page
*/
const ChangeColour = () => {
    var colour_use = RandomColour();
    console.log(colour_use);
    document.body.style.backgroundColor = colour_use;
    document.body.style.backgroundColor = "#fffff";
    document.getElementById('value_hex').innerHTML = 'Hex: ' + colour_use;
    document.getElementById('value_RGB').innerHTML = 'RGB: ' + hexToRgb(colour_use);
}

/*   
This is a simple function to return a random HEX value
Maximum value -> 16777215 "ffffff" (so random is from x -> 16777215)
*/
const RandomColour = () => {
    var randomColours = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColours
}

/*   
This function will simply return the RGB value of the "HEX"
Credits to: https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
*/
function hexToRgb(hex) {
    if (/^#([a-f0-9]{3}){1,2}$/.test(hex)) {
        if (hex.length == 4) {
            hex = '#' + [hex[1], hex[1], hex[2], hex[2], hex[3], hex[3]].join('');
        }
        var c = '0x' + hex.substring(1);
        return 'rgb(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ')';
    }
}
