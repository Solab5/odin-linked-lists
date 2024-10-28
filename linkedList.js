class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node();
            this.head.value = value;
        } else {
            let newNode = new Node();
            newNode.value = value;
            let end = this.head;
            while (end.nextNode) {
                end = end.nextNode;
            }
            end.nextNode = newNode
        }
    }

    prepend(value) {
        this.head = new Node();
        this.head.value = value;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node.nextNode;
        }
        return count;
    }

    head() {
        if (this.head) {
            return this.head.value;
        }
    }

    tail() {
        if (this.head) {
            let node = this.head;
            while(node.nextNode) {
                tail = node.nextNode;
            }
        return this.tail;
        }
    }

    at(index) {
        let nodePosition = 0;
        let node =  this.head;
        while (node) {
            if (index === nodePosition) {
                console.log(`Element ${node.value} at index ${index}`)
                return;
            } else {
                node = node.nextNode;
                nodePosition++;
            }
        }
    }

    pop() {
       if (!this.head) {
        return `No elements to pop`;
       } else if (this.head && !this.head.nextNode) {
            this.head = null
       } else {
        let pop = this.head;
        while (pop) {
            if (pop.nextNode && pop.nexNode.nextNode) {
                pop = pop.nexNode;
            } else break;
        }
        pop.nextNode = null
       }
    }

    contains(value) {
        let node = this.head;
        while (node) {
            if (node.value == value) {
                return true;
            }
            node = node.nextNode
        }
        return false;
    }    


    find(value) {
        let index = 0;
        let node = this.head;
        while (node) {
            if (node.value == value) {
                return index;
            }
            node = node.nexNode
            index++
        }
        return null
    }

    tostring() {
        let listPrint = '';
        let list = this.head;
        while(list) {
            listPrint += `(${list.value}) ->`
            list = list.nextNode;
        }
        console.log(listPrint + 'null')
    }
}

class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}

export {LinkedList}