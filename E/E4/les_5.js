class ElectronicDevice {
    constructor(name){
        this.name = name;
        this.isOn = `device is OFF`;
    }

    plugIn(){
        this.isOn = 'device is ON';
        console.log(`${this.name} - ${this.isOn}`);
    }

    plugOut(){
        this.isOn = `device is OFF`;
        console.log(`${this.name} - ${this.isOn}`);
    }
}

class Lamp extends ElectronicDevice {
    constructor(name, energy_usage, brightness) {
        super(name);
        this.energy_usage = energy_usage;
        this.brightness = brightness;
        this.color = 'black';
    }
    setBrightness(level) {
        this.brightness = level;
        console.log(`Now brightness set in: ${this.brightness}`);
    }
}

class Computer extends ElectronicDevice {
    constructor(name, energy_usage, memory_gb) {
        super(name);
        this.energy_usage = energy_usage;
        this.memory_gb = memory_gb
        this.processor = 'intel CORE i7'
    }
    process() {
        console.log(`Computer name is: ${this.name}, Computer processor is: ${this.processor}`);
    }
}

// экземпляр Lamp
const tabletop_lamp = new Lamp('tabletop_lamp', 12, 'high');
// экземпляр Computer
const ultrabook = new Computer('ultrabook', 60, 512);


//////////////////////////////////////////////////////////

// tabletop_lamp
console.log(tabletop_lamp.name)
console.log(tabletop_lamp);
console.log(tabletop_lamp.isOn); // проверяем включен ли
tabletop_lamp.plugIn();  // включаем
tabletop_lamp.setBrightness('Low');
console.log(tabletop_lamp.isOn, '\n');  // снова проверяем

// ultrabook
ultrabook.process()
console.log(ultrabook)
ultrabook.plugIn();
ultrabook.plugOut();
console.log(ultrabook.isOn);
