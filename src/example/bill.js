class Bill {
    constructor({ tookAdderall }) {
        this.name = 'Bill';
        this.thoughts = tookAdderall ? 'I finished the game logic' : 'duuuuuuuuuude I took a nap';
    }

    speak() {
        return this.thoughts;
    }
}

export default Bill;
