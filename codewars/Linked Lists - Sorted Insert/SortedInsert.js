function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function sortedInsert(head, data) {
    let newNode = new Node(data);
    if (head === null || head.data >= data) {
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