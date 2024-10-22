class Node(object):
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
        current = current.next
    
    new_node.next = current.next
    current.next = new_node
    
    return head

def print_list(head):
    current = head
    while current is not None:
        print(current.data, end=" -> ")
        current = current.next
    print("null")

head1 = Node(1)
head1.next = Node(2)
head1.next.next = Node(3)
print_list(sorted_insert(head1, 4))

head2 = Node(1)
head2.next = Node(7)
head2.next.next = Node(8)
print_list(sorted_insert(head2, 5))

head3 = Node(3)
head3.next = Node(5)
head3.next.next = Node(9)
print_list(sorted_insert(head3, 7))