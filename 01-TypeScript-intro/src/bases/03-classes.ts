export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com${ this.id }.jpg`;
    }

    constructor(
        public readonly id: number, 
        public name: string,
        // public imageUrl: string,
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }`);
    }
}

export const charmander = new Pokemon( 4, 'Charmander' );
console.log(charmander);

charmander.speak();
charmander.scream();

