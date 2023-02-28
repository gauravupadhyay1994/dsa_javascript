class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    if (typeof key !== "string") {
      key = key.toString();
    }
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      bucket = [];
      bucket.push([key, value]);
      this.table[index] = bucket;
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
        this.table[index] = bucket;
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        return true;
      }
    }
    return false;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          console.log(this.table[i][j][0], " ", this.table[i][j][1]);
        }
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "bruce");
table.set("mane", "john");

table.set("age", 25);
table.display();

console.log(table.get("name"));
table.remove("name");

table.display();
