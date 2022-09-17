# Wysiwyg editor

Made with React, Typescript, and AntD. This is a wysiwyg editor that uses a div with the `contenteditable` property set to true.
This is not a full fledged WYSIWYG and is being done as a challenge which warrants describing the Minimum Viable Product.

## The WYSIWYG should be able to

- Edit as you would a WYSIWYG editor.
- Supports the following features:
  - Font Family Changes
  - Currently with only the three system fonts available.
  - Font Emphasis - Bold, Italic, Underlined, Strikethrough.
  - Lists - Unordered and Ordered.
  - Quotes
  - Code Blocks
  - Hyperlinks.

Issues to note:

- This is only tested on Firefox 104 and Chrome 105 on Windows 10. This most definitely not going to work in IE.
- ~~Hyperlinks cannot be clicked - instead may be navigated to using right click.~~ this is now fixed
- due to time constraints, I used https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#examples to save time and allow me to make the UI look more pleasing.
- Quote will not unquote on click.
- Only have ~~two~~ three fonts.
- Will be unable to exit a `Code` block if it's the last block.

I tried to run with creating my own script to emulate the `document.execCommand()` script but I felt I will not be able to finish this on time if I do this.
