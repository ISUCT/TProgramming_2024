def sorted_insert(head, data):
    x = head
    if not head:
        return Node(data)
    while True:
        if head.data > data:
            head.data, data = data, head.data
        if head.next is None:
            head.next = Node(data)
            break
        head = head.next
    return x