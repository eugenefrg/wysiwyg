/**
 * Currently not in use. Wraps the selected elements in the preferred
 * list type, determined by the `options.ordered` param. This actually
 * works but with a bug - which is why it does not properly support
 * changing list type.
 */
function appendToList(options?: { ordered?: boolean }) {
  const sel = window.getSelection();
  const range = sel?.getRangeAt(0);
  const elements = range?.cloneContents().childNodes;

  // if theer's multiple elements
  if (elements && elements.length) {
    // delete the range
    range.deleteContents();

    // create a new div

    let listOfType = document.createElement(options?.ordered ? "ol" : "ul");

    // if there are elements
    if (elements && elements.length) {
      const listItems = document.createDocumentFragment();
      // convert NodeList to array.
      const elementArray = Array.from(elements);

      elementArray.forEach((element) => {
        const listItem = document.createElement("li");
        listItem.append(element);
        listItems.appendChild(listItem);
      });

      listOfType.append(listItems);
      range.insertNode(listOfType);
    }
  }
}

/**
 * @alpha not really working, parking to allow complete features.
 */
function appendToListWithModifyListType() {
  // appendToList({ ordered: true })
  const sel = window.getSelection();
  const range = sel?.getRangeAt(0);
  const elements = range?.cloneContents().childNodes;
  console.log(elements);
  if (elements && elements.length) {
    // if elements contain only one
    if (elements.length === 1) {
      // check if the element is a list type. OL / UL
      Array.from(elements).some((element) => {
        const mainElementNode = element.childNodes[0];
        const nodeName = mainElementNode.nodeName;

        // if it's any of the list containers
        if (nodeName === "OL" || nodeName === "UL") {
          console.log(mainElementNode.childNodes);
          // Remove previous list
          range.deleteContents();

          let listOfType = document.createElement(
            nodeName === "OL" ? "ol" : "ul"
          );
          const arrayOfNodes = Array.from(mainElementNode.childNodes);
          arrayOfNodes.forEach((node) => {
            listOfType.appendChild(node);
          });
          range.insertNode(listOfType);
        }

        // console.log(element.nodeName);
        // console.log(element.childNodes[0].childNodes);
        // const currentElement = element.firstChild;
        // const listType = element.firstChild?.nodeName;

        // if (listType) {
        //   console.log(currentElement);
        // }
      });
      // if not - turn into a list.
    }

    // create a list if empty

    // update a list if contains multiple elements.
    // if not the same list, change all selected to the new type.
    // if same type, append the contents.
  }
}

export default appendToList;
