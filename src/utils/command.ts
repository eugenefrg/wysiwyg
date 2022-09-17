import { message } from "antd";

/**
 * As we are actually using a deprecated method of `document`
 * let the user know wether the browser can actually use the script.
 */
function checkCommandResult(result: boolean) {
  if (!result)
    message.error("Browser does not support the document.execCommand method.");
}

/**
 * A collection of commands that are based on `document.execCommand`.
 */
const command = {
  /**
   * Set the text to Bold. If the text is already bold, it reverts to normal.
   */
  bold: () => {
    checkCommandResult(document.execCommand("bold"));
  },
  /**
   * Set the text to Italic. If the text is already Italic, it reverts to normal.
   */
  italic: () => {
    checkCommandResult(document.execCommand("italic"));
  },
  /**
   * Underlines the text. If the text is already Underlined, it reverts to normal.
   */
  underline: () => {
    checkCommandResult(document.execCommand("underline"));
  },
  /**
   * Strikes the text. If the text is already Struct, it reverts to normal.
   */
  strikethrough: () => {
    checkCommandResult(document.execCommand("strikethrough"));
  },
  /**
   * Changes the font to `Segoe UI`.
   */
  segoe: () => {
    checkCommandResult(document.execCommand("fontName", false, "Segoe UI"));
  },
  /**
   * Changes the font to `Arial`.
   */
  arial: () => {
    checkCommandResult(document.execCommand("fontName", false, "Arial"));
  },
  /**
   * Changes the font to `Times New Roman`.
   */
  times: () => {
    checkCommandResult(
      document.execCommand("fontName", false, "Times New Roman")
    );
  },
  /**
   * Aligns the line of the selected text to the left.
   */
  justifyLeft: () => {
    checkCommandResult(document.execCommand("justifyLeft"));
  },
  /**
   * Aligns the line of the selected text to the middle.
   */
  justifyCenter: () => {
    checkCommandResult(document.execCommand("justifyCenter"));
  },
  /**
   * Aligns the line of the selected text to the right.
   */
  justifyRight: () => {
    checkCommandResult(document.execCommand("justifyRight"));
  },
  /**
   * Wraps the selected lines in an Unordered List. Triggering this on lines where all lines
   * are wrapped in the Unordered list will remove the list. This will update non-listed lines.
   */
  unorderedList: () => {
    checkCommandResult(document.execCommand("insertUnorderedList"));
  },
  /**
   * Wraps the selected lines in an Ordered List. Triggering this on lines where all lines
   * are wrapped in the Unordered list will remove the list. This will update non-listed lines.
   */
  orderedList: () => {
    checkCommandResult(document.execCommand("insertOrderedList"));
  },
  /**
   * Wraps the selected text in Quotation marks by adding a <q> tag.
   */
  quote: () => {
    const selection = document.getSelection();
    checkCommandResult(
      document.execCommand("insertHTML", false, "<q>" + selection + "</a>")
    );
  },
  /**
   * Wraps the selected lines in a <blockquote>
   */
  code: () => {
    checkCommandResult(
      document.execCommand("formatBlock", false, "<blockquote>")
    );
  },
  /**
   * Creates a clickable link. This will first check if the command is supported.
   * If it is supported, it will ask for a URL to add to the selected text.
   */
  link: () => {
    const isSupported = document.queryCommandSupported("insertHTML");
    checkCommandResult(isSupported);
    if (isSupported) {
      var linkURL = prompt("Enter a URL:", "http://");
      var text = document.getSelection();

      document.execCommand(
        "insertHTML",
        false,
        `<span contentEditable="false"><a href="${linkURL}" target="_blank" rel="noreferrer">${text}</a></span>`
      );
    }
  },
};

export default command;
