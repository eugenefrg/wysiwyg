import replaceSelected from "./replaceSelected";

export enum Emphasis {
  Bold = "b",
  Italic = "i",
  Quote = "p",
  Code = "pre",
}

/**
 * Currently not in use. This is intended to take the selected text and
 * wrap it in the preferred Emphasis based on `emphasisType`.
 */
function setEmphasis(emphasisType: Emphasis) {
  const sel: Selection | null = window.getSelection();
  const range: Range | undefined = sel?.getRangeAt(0);
  const elements = range?.cloneContents().childNodes;

  const elementArray = elements && Array.from(elements);
  elementArray?.forEach(() => {
    const listItem = document.createElement("li");
    // listItem.append(element);
    // listItems.appendChild(listItem);
  });
}

export default setEmphasis;
