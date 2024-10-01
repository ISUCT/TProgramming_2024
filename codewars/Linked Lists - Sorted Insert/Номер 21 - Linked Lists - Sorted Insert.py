""" For your information:
class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None
"""

def sorted_insert(head, data):
    x = head
    print(data)
    print(head)
    if not head:
        return Node(data)
    while True:
        print(head.data)
        if head.data > data:
            head.data, data = data, head.data
            print(head.data, data)
        if head.next is None:
            head.next = Node(data)
            break
        head = head.next
    return x