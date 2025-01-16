function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function sortedInsert(head, data) {
    data = new Node(data);
    if (!head) return data;
    if (data.data < head.data) {
        data.next = head;
        return data
    }
    let current = head;
    while(current.next && current.next.data < data.data) {
        current = current.next
    }
    data.next = current.next;
    current.next = data;
    return head;
  }