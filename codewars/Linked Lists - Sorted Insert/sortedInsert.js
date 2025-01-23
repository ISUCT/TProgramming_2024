function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  
   let newNode = new Node(data);

  // Если список пуст или новый узел нужно вставить перед первым элементом
  if (head === null || head.data >= newNode.data) {
    newNode.next = head;
    return newNode;
  }

  // Поиск места для вставки нового узла
  let current = head;
  while (current.next !== null && current.next.data < newNode.data) {
    current = current.next;
  }

  // Вставка нового узел в найденное место
  newNode.next = current.next;
  current.next = newNode;

  return head;
  
}