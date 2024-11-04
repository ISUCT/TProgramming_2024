class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function sortedInsert(head, data) {
    let newNode = new Node(data);

    if (!head || data < head.data) {
        newNode.next = head;
        return newNode;
    }

    let current = head;
    while (current.next && current.next.data < data) {
        current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;

    return head;
}

function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

let list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);

let newHead1 = sortedInsert(list1, 4);
printList(newHead1);

let list2 = new Node(1);
list2.next = new Node(7);
list2.next.next = new Node(8);

let newHead2 = sortedInsert(list2, 5);
printList(newHead2);

let list3 = new Node(3);
list3.next = new Node(5);
list3.next.next = new Node(9);

let newHead3 = sortedInsert(list3, 7);
printList(newHead3);