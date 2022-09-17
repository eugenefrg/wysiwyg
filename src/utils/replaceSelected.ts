/**
 * Currently not in use. This replaces the selected text with the `html` param.
 */
function replaceSelected(html: string, select?: boolean) {
  const sel: Selection | null = window.getSelection();
  const range: Range | undefined = sel?.getRangeAt(0);
  let documentFragment: DocumentFragment;

  // If there is actually anything selected
  if (sel?.getRangeAt && sel?.rangeCount && range) {
    range.deleteContents();

    // // Check if `range.createContextualFragment` exists.
    // if (range?.createContextualFragment) {
    //   documentFragment = range.createContextualFragment(html);
    // } else {
    //   // without it, we can insert it this way.
    let div = document.createElement("div");
    let child: ChildNode | null;

    // modify the created div.
    div.innerHTML = html;

    // update the documentFragment.
    documentFragment = document.createDocumentFragment();

    // organize the correct children
    while ((child = div.firstChild)) {
      documentFragment.appendChild(child);
    }
    // }

    // hold the first and last nodes
    const firstInsertedNode: ChildNode | null = documentFragment.firstChild;
    const lastInsertedNode: ChildNode | null = documentFragment.lastChild;

    // actually replace the selected
    range.insertNode(documentFragment);

    if (select) {
      if (firstInsertedNode) {
        range.setStartBefore(firstInsertedNode);
        lastInsertedNode && range?.setEndAfter(lastInsertedNode);
      }
      sel.removeAllRanges();
      range && sel.addRange(range);
    }
  }
}

export default replaceSelected;
