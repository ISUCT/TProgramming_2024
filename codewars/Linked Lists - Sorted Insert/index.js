function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  let prev = new Node(); // To exclude 'null' checks.
  let curr = head;
  while(curr) {
    if(data < curr.data)
      break;
    
    prev = curr;
    curr = curr.next;
  }
  
  let instance = new Node();
  instance.data = data;
    
  prev.next = instance;
  instance.next = curr;
  return curr === head ? instance : head;
}