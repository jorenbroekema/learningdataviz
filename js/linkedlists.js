function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function(){
    if(!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if(this.head){
        this.head.next.prev = null;
        this.head.prev = null;
    }
    else this.tail = null;
    return val;
}

LinkedList.prototype.removeTail = function(){
    if(!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail){
        this.tail.next.prev = null;
        this.tail.next = null;
    }
    else this.head = null;
    return val;
}

LinkedList.prototype.search = function(searchValue){
    var currentNode = this.head;
    var counter = 0;
    while(currentNode){
        if(currentNode.value === searchValue) return counter;
        currentNode = currentNode.next;
        counter++;
    }
    return 'not found';
}

LinkedList.prototype.indexOf = function(searchValue){
    var currentNode = this.head;
    var indexArray = [];
    var currentIndex = 0;
    while(currentNode){
        if(currentNode.value === searchValue) indexArray.push(currentIndex);
        currentNode = currentNode.next;
        currentIndex++;
    }
    return indexArray;

}

LinkedList.prototype.deleteWithValue = function(value){
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.value === value) {
            if(currentNode === this.head) this.removeHead();
            else if(currentNode === this.tail) this.removeTail();
            else{
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
            }
        }
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.reverse = function(){
    var currentNode = this.head;
    if(currentNode) this.tail = currentNode;
    while(currentNode){
        if(!currentNode.next) this.head = currentNode;
        var temp = currentNode.prev;
        currentNode.prev = currentNode.next;
        currentNode.next = temp;
        currentNode = currentNode.prev;
    }
}

var LL = new LinkedList();
LL.addToTail('one');
LL.addToTail(2);
LL.addToTail(3);
LL.addToTail('four');
LL.addToTail(5);




