// Linked List in Javascript

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add an item at start of LinkedList
    addFirst(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Add an item at end of LinkedList
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
  
      current.next = newNode;
    }
  
    // Size of an LinkedList
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    // Add an item at given index of LinkedList
    addAt(index, data) {
      if (index < 0 || index > this.size()) {
        console.error("Invalid Index");
        return;
      }
  
      const newNode = new Node(data);
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
  
      newNode.next = current.next;
      current.next = newNode;
    }
  
    // Remove an item from the start of LinkedList
    removeTop() {
      if (!this.head) {
        return;
      }
  
      this.head = this.head.next;
    }
  
    // Remove an item from the end of LinkedList
    removeLast() {
      if (!this.head) {
        return;
      }
  
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
  
      current.next = null;
    }
  
    // Remove an item from the given index of LinkedList
    removeAt(index) {
      if (index < 0 || index > this.size()) {
        console.error("Invalid Index");
        return;
      }
  
      if (index === 0) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
      }
    }
  
    // Print the Linked List
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }

  }
  
  const linkedlist = new LinkedList();
  
  linkedlist.addFirst(5);
  linkedlist.addFirst(3);
  linkedlist.addFirst(8);
  linkedlist.addLast(6);

  linkedlist.removeTop();

  linkedlist.addAt(2, 8);

  linkedlist.removeLast();
  linkedlist.removeAt(2);
  
  linkedlist.print();
  console.log("size = " + linkedlist.size())
