const walk = (curr: BinaryNode<number> | null, path: number[]): number[] => {
    if(!curr) { //base case - this is the point where we no longer want to recurse
        return path;
    }

    //recurse
    //pre
    
    //recurse
    walk(curr.left, path);    
    path.push(curr.value);
    walk(curr.right, path);
    
    //post

    return path;
}


export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}