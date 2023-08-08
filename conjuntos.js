class Conjuntos {
  constructor() {
    this.items = {}
  }

  has(element) {
    debugger
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  
  add(element) {
    if(!this.has(element)) {
      this.items[element] = element
      debugger
      return true
    }
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  union(otherSet) {
    const unionSet = new Conjuntos()
    debugger
    this.values().forEach(value => unionSet.add(value))
    debugger
    otherSet.values().forEach(value => unionSet.add(value))
    debugger
    return unionSet
  }

  intersectionUnion(otherSet) {
    const intersection = new Conjuntos()
    const values = this.values()
    debugger

    for (let i=0; i< values.length; i++) {
      if (otherSet.has(values[i])) {
        intersection.add(values[i])
      }
    }

    debugger

    return intersection
  }

}

const setA = new Conjuntos()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Conjuntos()
setB.add(2)
setB.add(3)
setB.add(4)

const intersectionAB = setA.intersectionUnion(setB)
console.log(intersectionAB.values())