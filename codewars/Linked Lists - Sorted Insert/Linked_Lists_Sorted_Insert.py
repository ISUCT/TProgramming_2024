def sorted_insert(head, data):
    V = [data]
    temp = head
    while temp:
        V.append(temp.data)
        temp = temp.next
    head = v = None
    for i in sorted(V):
        if head is None:
            head = Node(i)
            v = head
        else:
            v.next = Node(i)
            v = v.next
    return head