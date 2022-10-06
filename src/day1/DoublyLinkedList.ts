import { createDebuggerStatement } from "typescript";

type Node<T> = {
    value: T,
    previous?: Node<T>,
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    

    constructor() {
        this.length = 0;
        this.head = undefined;
    }
    prepend(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        let head = this.head;
        if(!head) {
            this.head = node;
            return;
        }

        head.previous = node;
        node.next = head;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        this.length++;
        const node = {value: item} as Node<T>;
        let current = this.head;

        for(let i = 0; i < idx && current; i++) {
            current = current.next;
        }

        if(!current) {
            return;
        }

        let oldPrevious = current.previous;

        if(!oldPrevious) {return;} //typescript jaunt

        current.previous = node;
        node.next = current;
        node.previous = oldPrevious;
        oldPrevious.next = node;
        
    }
    append(item: T): void {
        this.length++;

        const node = { value: item} as Node<T>;
        let current = this.head;
        if(!current) {
            this.head = node;
            return;
        }

        for(let i = 0; i < this.length && current; i++) {
            if(!current.next) {
                current.next = node
                node.previous = current;
                return;
            }
            current = current.next;
        }

    }
    remove(item: T): T | undefined {
        let current = this.head;

        for(let i = 0; i < this.length && current; i++) {
            
            if(current.value === item) {
                console.log('should be 9')
                console.log(current.value)

                //3 cases
                if(i === 0) {
                    let newHead = current.next;
                    if(!newHead) { return undefined; }
                    newHead.previous = undefined;
                    this.head = newHead;
                } else if(i === this.length - 1) {
                    let newTail = current.previous;

                    if(!newTail) {return undefined;}

                    newTail.next = undefined;

                } else {
                    let lo = current.previous;
                    let hi = current.next;
    
                    if(!lo || !hi) {
                        return undefined;
                    }
    
                    lo.next = hi;
                    hi.previous = lo;
                    
                }
                this.length--;
                return current.value;
                
            }
            current = this.head?.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        let current = this.head;

        for (let i = 0; i < idx && current; i++) {
            current = current.next;
        }

        return current?.value;
    }
    removeAt(idx: number): T | undefined {
        if(idx > this.length - 1) {
            return undefined;
        }
        this.length = Math.max(0, this.length - 1);

        let current = this.head;

        for (let i = 0; i < idx && current; i++) {
            current = current.next;
        }

        let lo = current?.previous;
        let hi = current?.next;

        if(idx === 0) {
            if(!hi) {
                if(this.length === 0) {
                    this.head = undefined;
                    return current?.value;
                }
                return undefined;
            }
            hi.previous = undefined;
            this.head = hi;
        } else if(idx === this.length) {
            if(!lo) {return undefined;}
            lo.next = undefined;
        } else {
            if(!lo || !hi) {
                return undefined;
            }
    
            lo.next = hi;
            hi.previous = lo;
        }

        return current?.value;
    }
}