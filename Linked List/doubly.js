// Doubly Linked List in Javascript

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null
    }

    // Add an item at start of Doubly LinkedList
    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
    }

    // Add an item at end of Doubly LinkedList
    addLast(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        newNode.prev = current;
        current.next = newNode;
    }

    // size of the Doubly LinkedList
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Add an item of Doubly LinkedList
    addAt(index, data) {
        if (index < 0 || index > this.size()) {
            console.error("Invalid Index");
            return;
        }

        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode;
            }
            this.head = newNode;
        }

        let  current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.prev = current;
        newNode.next = current.next;
        if (current.next) {
            current.next.prev = newNode;
        }

        current.next = newNode
    }

    // Remove an item from the end of Doubly LinkedList
    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        }
    }

    // Remove an item from the end of Doubly LinkedList
    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }

        current.next = null;
    }

    // Remove an item from the given index of Doubly LinkedList
    removeAt(index) {
        if (index < 0 || index > this.size()) {
            console.error("Invalid Index");
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            
            if (this.head) {
                this.head.prev = null;
            }
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;

            if (current.next) {
                current.next.prev = current;
            }
        }
    }

    // Print
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedlist = new DoublyLinkedList();
  
  linkedlist.addFirst(5);
  linkedlist.addFirst(3);
  linkedlist.addFirst(8);
  linkedlist.addLast(6);

  linkedlist.addAt(2, 8);

  linkedlist.removeLast();
  linkedlist.removeAt(2);
  
  linkedlist.print();
  console.log("size = " + linkedlist.size())
