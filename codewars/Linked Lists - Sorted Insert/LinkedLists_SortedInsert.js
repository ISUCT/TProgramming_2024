function Node(data) {
    this.data = data;
    this.next = null;
}

function sortedInsert(head, data) {
    if (head === null || head.data > data) {
        const answer = new Node(data);
        answer.next = head;
        return answer;
    }
    head.next = sortedInsert(head.next, data);
    return head;
}
