class Stack{

    constructor(){
        this.item=[]; //initialize empty stack
    }

    push(element){

        this.item.push(element); //push new element in stack
    }
    printStack(){

        for(let i=0;i<this.item.length;i++)  //printing all elements in stack
        {
            console.log(this.item[i]); 
        }
    }
    pop(){

        this.item.pop(); //deleting top element from stack
}

    peek(){

        console.log(this.item[this.item.length-1]) //return top element from stack
    }

    isEmpty(){

     if( this.item.length===0) //cheack whetheater stack is empty or not 
     {
        console.log("stack is empty")
     }
     else{
         console.log("stack is not empty")
     }
    }

}


let stack = new Stack(); // class object created 

//stack operations 
stack.push(100);
stack.push(300);
stack.push(200);
stack.printStack()
stack.pop();
stack.printStack()
stack.peek();
stack.isEmpty();
