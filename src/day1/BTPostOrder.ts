const walk = (curr: BinaryNode<number> | null, path: number[]): number[] => {
    if(!curr) { //base case - this is the point where we no longer want to recurse
        return path;
    }

    //recurse
    //pre
    
    //recurse
    walk(curr.left, path);    
    walk(curr.right, path);
     
    //post
    path.push(curr.value);

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);

}