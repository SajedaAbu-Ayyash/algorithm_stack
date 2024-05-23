class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
class SLL:
    def __init__(self):
        self.head = None

    def addFront(self, num):
        new_node = Node(num)
        new_node.next = self.head
        # while(new_node.next != None):
        self.head = new_node
        return self.head
    
    def removeFront(self):
        if not self.head:
            return None
        self.head = self.head.next
    
    def front(self):
        if not self.head:
            return None
        return self.head.data


SLL1 = SLL()
print(SLL1.addFront(18))
print(SLL1.addFront(5))
print(SLL1.addFront(73))
print(SLL1.removeFront())
print(SLL1.front())

