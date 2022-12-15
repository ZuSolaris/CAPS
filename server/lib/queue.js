'uses strict';


class Queue {
  constructor() {
    this.data = {};
  }


  store(key, object) {
    this.data[key] = value;
    return key;
  }
  read(key){
    return this.data[key];
  }

  remove(key){
    console.log('removed from queue!');
    let value = this.data[key];
    delete this.data[key];
    return value;
  }
}