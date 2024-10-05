class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function sortedInsert(head, data) {
    const newNode = new Node(data);

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
    const result = [];
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(' -> '));
}
