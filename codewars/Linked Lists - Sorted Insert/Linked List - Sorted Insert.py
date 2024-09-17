class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
def buildOneTwoThree():
    head = Node(1)
    second =Node(2)
    third = Node(3)
    head.next = second
    second.next = third
    return head
def sorted_insert(head, data):
    newNode = Node(data)
    if head is None or head.data >= data:
        newNode.next = head
        head = newNode
    else:
        current = head
        while current.next is not None and current.next.data < data:
            current = current.next
        newNode.next = current.next
        current.next = newNode
    return head
head = buildOneTwoThree()
sorted_insert(head, 5)
