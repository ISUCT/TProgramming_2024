function Node(data) {
  this.data = data;
  this.next = null;
  return this
}

function sortedInsert(head, data) {
  let node = head
  if (head == null){
    head = Node(data)
    return head
  }
  if (data < head.data){
    let newNode = Node(data)
    newNode.next = head
    return newNode
  }
  while (node.next != null){
    let nextNode = node.next
    if ((data > node.data)&&(data < nextNode.data)){
      let newNode = Node(data)
      node.next = newNode
      newNode.next = nextNode
      return head
    }
    else{
      node = nextNode
    }
  }
  node.next = Node(data)
  return head
}
