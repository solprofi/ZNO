

let svg = document.getElementById('guitar-svg');

// ANIMATION DURATION IN MS

let DURATION = 2500;
let isActive = false;

svg.addEventListener('load', function() {
    let doc = this.getSVGDocument();
    let eString = doc.getElementById('E');
    let aString = doc.getElementById('A');
    let dString = doc.getElementById('D');
    let gString = doc.getElementById('G');
    
    let eSwitch = doc.getElementById('e-switch');
    let aSwitch = doc.getElementById('a-switch');
    let dSwitch = doc.getElementById('d-switch');
    let gSwitch = doc.getElementById('g-switch');
    
    let svgStrings = [
        eString,
        aString,
        dString,
        gString
    ];
    
    let svgSwitches = [
        eSwitch,
        aSwitch,
        dSwitch,
        gSwitch
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
