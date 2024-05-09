//Testing out a recursive function transverse through the linked list to find the last node 
//(given you pass the first node as a parameter into the function)

function findNextNodeUntilNoMore(node) {
    if (node.nextNode == null) {
      return node;
    }
    else {
      let next_node = node.nextNode;
      //Recursive call
      return findNextNodeUntilNoMore(next_node);
     
    }
  }
  
  let node1 = {
      value: "1",
        nextNode: node2,
  }
  
  let node2 = {
      value: "2",
        nextNode: node3,
  }
  
  let node3 = {
      value: "3",
        nextNode: null,
  }
  
  
  let test = findNextNodeUntilNoMore(node1);
  console.log(test);