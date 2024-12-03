class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
def sorted_insert(head, data):
    new_node = Node(data)
    if head is None or data < head.data:
        new_node.next = head
        return new_node
    current = head
    while current.next is not None and current.next.data < data:
        current = current.nex
    new_node.next = current.next
    current.next = new_node
    return head