import {TreeNode} from "./TreeNode"

export interface MutableTreeNode<T = any> extends TreeNode<T> {

  add<C = any>(subNode: TreeNode<C>): void

  remove(number: number): void
}
