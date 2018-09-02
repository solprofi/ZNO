let svg = document.getElementById('guitar-svg');

// ANIMATION DURATION IN MS

let DURATION = 2500;
let isActive = false;

svg.addEventListener('load', function() {
    let doc = this.getSVGDocument();
    // let bottomEString = doc.getElementById('Bottom_E');
    // let aString = doc.getElementById('A');
    // let dString = doc.getElementById('D');
    // let gString = doc.getElementById('G');
    // let bString = doc.getElementById('B');
    // let topEString = doc.getElementById('Top_E');

    let bottomEString = doc.getElementById('Bottom_E');
    let aString = doc.getElementById('A');
    let dString = doc.getElementById('D');
    let gString = doc.getElementById('G');
    let bString = doc.getElementById('B');
    let topEstring = doc.getElementById('Top_E');

    let bottomESwitch = doc.getElementById('bottom-e-switch');
    let aSwitch = doc.getElementById('a-switch');
    let dSwitch = doc.getElementById('d-switch');
    let gSwitch = doc.getElementById('g-switch');
    let bSwitch = doc.getElementById('b-switch');
    let topESwitch = doc.getElementById('top-e-switch');
    
    let svgStrings = [
        topEstring,
        bString,
        gString,
        dString,
        aString,
        bottomEString
    ];

    let svgSwitches = [
        topESwitch,
        bSwitch,
        gSwitch,
        dSwitch,
        aSwitch,
        bottomESwitch
    ];

    let switches = document.getElementsByClassName('string-connectors__switch');
    Array.prototype.forEach.call(switches, (value, index) => {
        value.addEventListener('click', () => {

            // if (isActive) {
            //     svgStrings[index].classList.remove('active');
            //     svgSwitches[index].classList.remove('active');
            // } 
            // isActive = true;


            svgStrings[index].classList.add('active');
            svgSwitches[index].classList.add('active');
           

            setTimeout(function(){
                svgStrings[index].classList.remove('active');
                svgSwitches[index].classList.remove('active');
                isActive = false;
            }, DURATION);
            
        });
    });
 });
 