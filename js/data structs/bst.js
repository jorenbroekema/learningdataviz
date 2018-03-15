function BST(value){
    this.value = value;
    this.left = null
    this.right = null;
}

BST.prototype.insert = function(value){
    if(!this.value) this.value = value;

    if (value > this.value){
        if(!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }else{
        if(!this.left){
            this.left = new BST(value);
        }else{
            this.left.insert(value);
        }
    }
}

BST.prototype.contains = function(value){
    if(this.value === value){
        return true;
    }else{
        if(value > this.value){
            if(!this.right) return false;
            else return this.right.contains(value);
        }else{
            if(!this.left) return false;
            else return this.left.contains(value);
        }
    }
}

BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
    if(order === 'pre-order') iteratorFunc(this.value);
    if(this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if(order === 'in-order') iteratorFunc(this.value);
    if(this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if(order === 'post-order') iteratorFunc(this.value);
}

BST.prototype.breadthFirstTraversal = function(iteratorFunc){
    var queue = [this];
    while(queue.length){
        var treeNode = queue.shift();
        iteratorFunc(treeNode.value);
        if(treeNode.left) queue.push(treeNode.left);
        if(treeNode.right) queue.push(treeNode.right);
    }
}

BST.prototype.getMinVal = function(){
    if(this.left) return this.left.getMinVal();
    else return this.value;
}

BST.prototype.getMaxVal = function(){
    if(this.right) return this.right.getMaxVal();
    else return this.value;
}

var values = [50, 30, 20, 10, 45, 35, 70, 60, 100, 59, 85, 105];
var bst = new BST();

for(var i = 0; i < values.length; i++){
    bst.insert(values[i]);
}

//bst.breadthFirstTraversal(log);
console.log('MIN: ', bst.getMinVal());
console.log('MAX: ', bst.getMaxVal());

function log(value){
    console.log(value);
}
