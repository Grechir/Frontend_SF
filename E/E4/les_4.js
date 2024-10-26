// -------------- Parent func --------------
function ElectronicDevice (name) {
    this.name = name;
    this.isOn = `device is OFF`;
}

ElectronicDevice.prototype.plugIn = function() {
    this.isOn = 'device is ON';
    console.log(`${this.name} - ${this.isOn}`);
}

ElectronicDevice.prototype.plugOut = function() {
    this.isOn = `device is OFF`;
    console.log(`${this.name} - ${this.isOn}`);
}

// ------------------ Lamp ------------------
function Lamp (name, energy_usage, brightness) {
    ElectronicDevice.call(this, name);  // наследование name
    this.energy_usage = energy_usage;
    this.brightness = brightness;
    this.color = 'black'; // Все экземпляры класса будут черного цвета. Минус гибкость, но так захотелось
}

// делегирующая связь
Lamp.prototype = new ElectronicDevice();

// уникальный метод для Lamp
Lamp.prototype.setBrightness = function (level) {
    this.brightness = level;
    console.log(`Now brightness set in: ${this.brightness}`);
}

// экземпляр
const tabletop_lamp = new Lamp('tabletop_lamp', 12, 'high');

// ---------------- Computer ----------------
function Computer (name, energy_usage, memory_gb) {
    ElectronicDevice.call(this, name);  // наследование name
    this.energy_usage = energy_usage;
    this.processor = 'intel CORE i7' // аналогичная ситуация как с color в Lamp
    this.memory_gb = memory_gb
}

// делегирующая связь
Computer.prototype = new ElectronicDevice();

// уникальный метод для Computer
Computer.prototype.process = function () {
    console.log(`Computer name is: ${this.name}, Computer processor is: ${this.processor}`);
}

// экземпляр
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
