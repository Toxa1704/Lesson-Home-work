class Tamagochi {
    name: string
    ageDays: number
    healthValue: number
    happinessValue: number
    satietyValue: number
    constructor(name: string, ageDays: number, healthValue: number, happinessValue: number, satietyValue: number) {
        this.name = name;
        this.ageDays = ageDays;
        this.healthValue = healthValue;
        this.happinessValue = happinessValue;
        this.satietyValue = satietyValue;
    }
    healthUp() {
        this.healthValue += 1;
    }
    happyUp() {
        this.happinessValue += 1;
    }
    play() {
        this.satietyValue -= 1;
        this.happinessValue -= 1;
        this.healthValue -= 1;
    }
    feedUp() {
        this.satietyValue += 1;
    }
    clean() {
        this.healthValue += 1;
    }
    shopping() {
        this.happinessValue += 1;
    }
    stateAnalyzer() {
        if (this.ageDays < 1 || this.healthValue < 1) {
            console.log(`${this.name} не живий`);
        } else {
            console.log(`${this.name}  живий`);
        }
    }
}
let tamagochi1: Tamagochi = new Tamagochi("porki", 1, 10, 10, 10);
console.log(tamagochi1);

tamagochi1.healthUp();
console.log(tamagochi1);

tamagochi1.healthUp();
tamagochi1.happyUp();
tamagochi1.play();
tamagochi1.feedUp();
tamagochi1.play();
tamagochi1.shopping();
tamagochi1.clean();

console.log(tamagochi1);
tamagochi1.stateAnalyzer();

let tamagochi2: Tamagochi = new Tamagochi("PussyCat", 1, 5, 5, 5);
console.log(tamagochi2);

tamagochi2.healthUp();
console.log(tamagochi1);

tamagochi2.feedUp();
tamagochi2.healthUp();
tamagochi2.healthUp();
tamagochi2.play();
tamagochi2.healthUp();
tamagochi2.happyUp();
tamagochi2.play();
tamagochi2.healthUp();
tamagochi2.play();
tamagochi2.feedUp();
tamagochi2.play();
tamagochi2.shopping();
tamagochi2.clean();
tamagochi2.healthUp();

tamagochi2.stateAnalyzer();
console.log(tamagochi2);

const tamagochis: Tamagochi[] = [
    new Tamagochi("cat", 0, 10, 10, 10),
    new Tamagochi("mouse", 1, 15, 15, 15),
    new Tamagochi("dog", 3, 25, 25, 25),
];

for (let i = 0; i < tamagochis.length; i++) {
    tamagochis[i].healthUp();
    tamagochis[i].happyUp();
    tamagochis[i].play();
    tamagochis[i].feedUp();
    tamagochis[i].play();
    tamagochis[i].shopping();
    tamagochis[i].clean();
    tamagochis[i].stateAnalyzer();
}
console.log(tamagochis);