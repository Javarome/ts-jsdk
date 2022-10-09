import {JComponent} from "swing/JComponent"

export class JTextField extends JComponent {

  protected value = ""

  constructor(name: string) {
    super(name)
  }

  getText(): string {
    return this.value
  }

  requestFocusInWindow(): boolean {
    return true
  }
}