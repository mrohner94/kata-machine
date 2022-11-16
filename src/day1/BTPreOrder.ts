const walk = (curr: BinaryNode<number> | null, path: number[]): number[] => {
    if(!curr) { //base case - this is the point where we no longer want to recurse
        return path;
    }

    //recurse
    //pre
    path.push(curr.value);
    //recurse
    walk(curr.left, path);
    walk(curr.right, path);
    
    //post

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}