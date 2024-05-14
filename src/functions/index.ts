
type Log = (message: string, userId?: string) => void;

let log: Log = (
    message: string,
    userId = 'Not signed in'
) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
};

function times(
    f: (index: number) => void,
    n: number
) {
    for (let i = 0; i < n; i++) {
        f(i)
    }
}

times(n => console.log(n), 4)


type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

let names = [
    {firstName: 'beth'},
    {firstName: 'caitlyn'},
    {firstName: 'xin'}
]

function map<T, U>(array: T[], f: (item: T) =>
    U): U[] {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i])
    }
    return result
}


type MyEvent<T> = {
    target: T
    type: string
}

interface HTMLButtonElement {
}

type ButtonEvent = MyEvent<HTMLButtonElement>

type TimedEvent<T> = {
    event: MyEvent<T>
    from: Date
    to: Date
}

type TreeNode = {
    value: string
}

type LeafNode = TreeNode & {
    isLeaf: true
}

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}
function mapNode<T extends TreeNode>(
 node: T,
 f: (value: string) => string
): T {
 return {
     ...node,
     value: f(node.value)
 }
}

let l: TreeNode = {value: 'l'}
let b: LeafNode = {value: 'b', isLeaf: true}
let c: InnerNode = {value: 'c', children: [b]}

let a1 = mapNode(l, _ => _.toUpperCase()) // TreeNode
let b1 = mapNode(b, _ => _.toUpperCase()) // LeafNode
let c1 = mapNode(c, _ => _.toUpperCase()) // InnerNode


