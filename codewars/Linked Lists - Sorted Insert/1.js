function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function sortedInsert(head, data) {
    let newNode = new Node(data);
    newNode.next = head;
    
    if(head == null) {
      return newNode;
    }
    
    let currentNode = newNode;
    
    while(true) {
      if(currentNode.next != null && currentNode.data > currentNode.next.data) {
        let oldData = currentNode.data;
        currentNode.data = currentNode.next.data;
        currentNode.next.data = oldData;
        
        currentNode = currentNode.next;
        continue;
      }
      
      return newNode;
    }
  }