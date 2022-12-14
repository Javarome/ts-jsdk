import {MutableTreeNode} from "./MutableTreeNode"
import {TreeNode} from "./TreeNode"

export class DefaultMutableTreeNode<T = any> implements MutableTreeNode<T> {

  protected nodes: TreeNode<any>[] = []

  constructor(private userObject: T) {
  }

  add<C = any>(node: TreeNode<C>) {
    this.nodes.push(node)
  }

  remove(index: number): void {
    this.nodes = this.nodes.splice(index, 1)
  }

  getChildCount(): number {
    return this.nodes.length
  }

  getUserObject(): T {
    return this.userObject
  }

  getPath(): TreeNode<T>[] {
    return []
  }
}
