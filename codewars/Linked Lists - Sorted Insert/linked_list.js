class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function push(head, data) {
    let newNode = new Node(data);
    newNode.next = head;
    return newNode;
}

function buildOneTwoThree() {
    let head = null;
    head = push(head, 3);
    head = push(head, 2);
    head = push(head, 1);
    return head;
}

function sortedInsert(head, data) {
    let newNode = new Node(data);
    
    if (head === null || data < head.data) {
        newNode.next = head;
        return newNode;
    }

    let current = head;
    while (current.next !== null && current.next.data < data) {
        current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    
    return head;
}

let head = buildOneTwoThree();
head = sortedInsert(head, 4);

let current = head;
while (current !== null) {
    process.stdout.write(current.data + " -> ");
    current = current.next;
}
console.log("null");