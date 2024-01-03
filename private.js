class Counter {
    #count = 0;
    #increment() {
        this.#count++;
    }
    getcount() {
        this.#increment();
        return this.#count;
    }
}
 
mycount = new Counter();

console.log(mycount.getcount());