function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function sortedInsert(head, data) {
    const newNode = new Node(data);
  
    if (head === null || data < head.data) {
      newNode.next = head;
      return newNode;
    }
  
    let current = head;
    let previous = null;
  
    while (current !== null && data >= current.data) {
      previous = current;
      current = current.next;
    }
  
    newNode.next = previous.next;
    previous.next = newNode;
  
    return head;
  }