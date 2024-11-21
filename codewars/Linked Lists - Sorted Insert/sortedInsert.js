function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function sortedInsert(head, data) {
    const newNode = new Node(data);
  
    if (head === null || data <= head.data) {
      newNode.next = head;
      return newNode;
    }
  
    let current = head;
    while (current.next !== null && data > current.next.data) {
      current = current.next;
    }
  
    newNode.next = current.next;
    current.next = newNode;
  
    return head;
  }