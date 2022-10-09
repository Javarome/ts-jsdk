import {JComponent} from "swing/JComponent"
import {TreePath} from "swing/tree/TreePath"
import {TreeModel} from "swing/tree/TreeModel"
import {TreeCellRenderer} from "swing/tree/TreeCellRenderer"
import {TreeNode} from "swing/tree/TreeNode"
import {DefaultTreeCellRenderer} from "swing/tree/DefaultTreeCellRenderer"

export class JTree<T = any> extends JComponent {

  constructor(private model: TreeModel) {
    super()
  }

  private _cellRenderer: TreeCellRenderer = new DefaultTreeCellRenderer()

  get cellRenderer(): TreeCellRenderer {
    return this._cellRenderer
  }

  makeVisible(_path: TreePath) {
  }

  setShowsRootHandles(_b: boolean) {
  }

  putClientProperty(_lineStyle: string, _angled: string) {
  }

  removeAll() {
    this.model.removeAll()
  }

  getPathForLocation(_x: number, _y: number): TreePath {
    return null!
  }

  setCellRenderer(renderer: TreeCellRenderer) {
    this._cellRenderer = renderer
  }

  getLastSelectedPathComponent(): TreeNode<T> {
    return null!
  }
}