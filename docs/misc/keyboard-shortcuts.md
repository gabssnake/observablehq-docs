# Keyboard shortcuts

This reference notebook covers nearly every command available in Observable! It’s a big list, but many should be familiar to you, being provided by your operating system. If you have trouble with any of these shortcuts, please let us know in the Observable GitHub [feedback repository](https://github.com/observablehq/feedback/issues/new/choose).

## Navigating between cells

Use the keyboard to focus cells for editing.

<dl>
    <dt><Keys mac="Alt-Tab" set="Alt-Shift-Down" /></dt>
    <dd>Focus next cell</dd>
    <dt><Keys mac="Alt-Shift-Tab" set="Alt-Shift-Up" /></dt>
    <dd>Focus previous cell</dd>
    <dt><Keys set="Mod-J" /></dt>
    <dd>At cell reference, jump to definition</dd>
    <dt><Keys mac="Shift-Cmd-J" set="Shift-Ctrl-J" /></dt>
    <dd>Jump to previously-focused cell</dd>
    <dt><Keys set="Ctrl-Shift-Down" /></dt>
    <dd>Move cell down</dd>
    <dt><Keys set="Ctrl-Shift-Up" /></dt>
    <dd>Move cell up</dd>
    <dt><Keys set="Escape" /></dt>
    <dd>Blur cell</dd>
</dl>

## Inserting and deleting cells {#editingCells}

With a cell focused, add cells by inserting or splitting. Remove cells by merging them.

<dl>
    <dt><Keys set="Mod-Enter" /></dt>
    <dd>Insert cell below</dd>
    <dt><Keys mac="Shift-Cmd-Enter" set="Shift-Ctrl-Enter" /></dt>
    <dd>Insert cell above</dd>
    <dt><Keys set="Alt-Enter" /></dt>
    <dd>Split cell, then focus below</dd>
    <dt><Keys set="Alt-Shift-Enter" /></dt>
    <dd>Split cell, then focus above</dd>
    <dt><Keys set="Alt-Backspace" /></dt>
    <dd>At cell start, merge with cell above</dd>
    <dt><Keys set="Ctrl-Alt-D" /></dt>
    <dd>At cell end, merge with cell below</dd>
    <dt><Keys set="Alt-Shift-Cmd-Down" /></dt>
    <dd>Copy cell and insert it below</dd>
    <dt><Keys set="Alt-Shift-Cmd-Up" /></dt>
    <dd>Copy cell and insert it above</dd>
</dl>


## Editing text

Write text or code with contextual suggestions, indenting, commenting, and more.

<dl>
    <dt><Keys set="Shift-Enter" /><br /><Keys set="Mod-S" /></dt>
    <dd>Run cell</dd>
    <dt><Keys set="Shift-Mod-U" /></dt>
    <dd>Upload a file</dd>
    <dt><Keys set="Ctrl-Space" /></dt>
    <dd>Show code suggestions</dd>
    <dt><Keys set="Tab" /></dt>
    <dd>Accept code suggestion</dd>
    <dt><Keys set="Ctrl-Shift-P" /><br /><Keys set="Mod-." /></dt>
    <dd>Pin or unpin editor</dd>
    <dt><Keys set="Mod-," /></dt>
    <dd>Show or hide output</dd>
    <dt><Keys set="Alt-Shift-F" /></dt>
    <dd>Format code automatically</dd>
    <dt><Keys set="Shift-Tab" /></dt>
    <dd>Indent automatically</dd>
    <dt><Keys set="Mod-]" /></dt>
    <dd>Indent more</dd>
    <dt><Keys set="Mod-[" /></dt>
    <dd>Indent less</dd>
    <dt><Keys set="Mod-/" /></dt>
    <dd>Comment lines</dd>
    <dt><Keys set="Backspace" /><br /><Keys set="" mac="Ctrl-H" /></dt>
    <dd>Delete character before cursor</dd>
    <dt><Keys mac="Fn-Backspace" set="Delete" /><br /><Keys set="" mac="Ctrl-D" /></dt>
    <dd>Delete character after cursor</dd>
    <dt><Keys mac="Alt-Backspace" set="Ctrl-Backspace" /></dt>
    <dd>Delete to start of word before cursor</dd>
    <dt><Keys mac="Ctrl-Alt-Backspace" set="Ctrl-Delete" /><br /><Keys set="" mac="Alt-Fn-Backspace" /></dt>
    <dd>Delete to start of word after cursor</dd>
    <dt><Keys set="" mac="Cmd-Backspace" /></dt>
    <dd>Delete to start of line.</dd>
    <dt><Keys set="" mac="Cmd-Fn-Backspace" /></dt>
    <dd>Delete to end of current line.</dd>
    <dt><Keys set="Enter" /></dt>
    <dd>Insert a new line, and indent</dd>
</dl>

## Editing prose

In Markdown cells, use additional shortcuts for formatting rich text.

<dl>
    <dt><Keys set="Mod-B" /></dt>
    <dd>Bold</dd>
    <dt><Keys set="Mod-I" /></dt>
    <dd>Italic</dd>
    <dt><Keys mac="Shift-Mod-X" set="Alt-Shift-5" /></dt>
    <dd>Strikethrough</dd>
    <dt><Keys set="Mod-K" /></dt>
    <dd>Link</dd>
    <dt><Keys set="Shift-Mod-7" /></dt>
    <dd>Numbered list</dd>
    <dt><Keys set="Shift-Mod-8" /></dt>
    <dd>Bulleted list</dd>
    <dt><Keys set="Alt-Mod-1…6" /></dt>
    <dd>Heading 1 (or 2, 3, etc.)</dd>
    <dt><Keys set="Alt-Mod-0" /></dt>
    <dd>Clear heading</dd>
    <dt><Keys set="Shift-Mod-F" /></dt>
    <dd>Monospaced font (code)</dd>
</dl>

## Navigating text

Text is inserted at the caret, or cursor. You can have multiple carets at the same time.

<dl>
    <dt><Keys set="Left" /><br /><Keys set="" mac="Ctrl-B" /></dt>
    <dd>Move the caret one character backward.</dd>
    <dt><Keys set="Right" /><br /><Keys set="" mac="Ctrl-F" /></dt>
    <dd>Move the caret one character forward.</dd>
    <dt><Keys set="Up" /><br /><Keys set="" mac="Ctrl-P" /></dt>
    <dd>Move the caret up one line.</dd>
    <dt><Keys set="Down" /><br /><Keys set="" mac="Ctrl-N" /></dt>
    <dd>Move the caret down one line.</dd>
    <dt><Keys mac="Alt-Right" set="Ctrl-Right" /></dt>
    <dd>Start of next word</dd>
    <dt><Keys mac="Alt-Left" set="Ctrl-Left" /></dt>
    <dd>Start of previous word</dd>
    <dt><Keys mac="Fn-Left" set="Home" /><br /><Keys mac="Ctrl-A" set="Alt-Left" /></dt>
    <dd>Start of line</dd>
    <dt><Keys mac="Fn-Right" set="End" /><br /><Keys mac="Ctrl-E" set="Alt-Right" /></dt>
    <dd>End of line</dd>
    <dt><Keys set="Cmd-Left" /></dt>
    <dd>Start of line, without wrapping</dd>
    <dt><Keys set="Cmd-Right" /></dt>
    <dd>End of current line, without wrapping</dd>
    <dt><Keys mac="Cmd-Up" set="Ctrl-Home" /></dt>
    <dd>Start of cell</dd>
    <dt><Keys mac="Cmd-Down" set="Ctrl-End" /></dt>
    <dd>End of cell</dd>
    <dt><Keys mac="Fn-Up" set="PageUp" /></dt>
    <dd>Previous screen</dd>
    <dt><Keys mac="Fn-Down" set="PageDown" /><br /><Keys set="" mac="Ctrl-V" /></dt>
    <dd>Next screen</dd>
</dl>


### Multiple carets
<dl>
    <dt><Keys set="Mod-Click" /></dt>
    <dd>Add caret</dd>
    <dt><Keys set="Escape" /></dt>
    <dd>Clear additional carets</dd>
</dl>

## Selecting text

Add the Shift key to the shortcuts above to turn a caret into a text selection. You can have multiple  selections at the same time.

<dl>
    <dt><Keys set="Shift-Left" /><br /><Keys set="" mac="Shift-Ctrl-B" /></dt>
    <dd>Extend the selection one character backwards.</dd>
    <dt><Keys set="Shift-Right" /><br /><Keys set="" mac="Shift-Ctrl-F" /></dt>
    <dd>Extend the selection one character forwards.</dd>
    <dt><Keys set="Shift-Up" /></dt>
    <dd>Extend the selection up one line.</dd>
    <dt><Keys set="Shift-Down" /><br /><Keys set="" mac="Shift-Ctrl-N" /></dt>
    <dd>Extend the selection down one line.</dd>
    <dt><Keys mac="Shift-Fn-Left" set="Shift-Ctrl-Left" /></dt>
    <dd>Start of previous word</dd>
    <dt><Keys mac="Shift-Fn-Right" set="Shift-Ctrl-Right" /></dt>
    <dd>End of next word</dd>
    <dt><Keys mac="Shift-Fn-Left" set="Shift-Home" /><br /><Keys mac="Shift-Ctrl-A" set="Shift-Alt-Left" /></dt>
    <dd>Start of current line</dd>
    <dt><Keys mac="Shift-Fn-Right" set="Shift-End" /><br /><Keys mac="Shift-Ctrl-E" set="Shift-Alt-Right" /></dt>
    <dd>Extend the selection to the end of the current line.</dd>
    <dt><Keys set="Shift-Cmd-Left" /></dt>
    <dd>Start of current line without wrapping</dd>
    <dt><Keys set="Shift-Cmd-Right" /></dt>
    <dd>End of the current line without wrapping</dd>
    <dt><Keys mac="Shift-Cmd-Up" set="Shift-Ctrl-Home" /></dt>
    <dd>Start of current cell</dd>
    <dt><Keys mac="Shift-Cmd-Down" set="Shift-Ctrl-End" /></dt>
    <dd>End of current cell</dd>
    <dt><Keys mac="Shift-Fn-Up" set="Shift-PageUp" /></dt>
    <dd>Previous screen</dd>
    <dt><Keys mac="Shift-Fn-Down" set="Shift-PageDown" /><br /><Keys set="" mac="Shift-Ctrl-V" /></dt>
    <dd>Next screen</dd>
    <dt><Keys set="Mod-A" /></dt>
    <dd>Select all</dd>
    <dt><Keys set="Escape" /></dt>
    <dd>Clear selection</dd>
</dl>

### Multiple selections

<dl>
    <dt><Keys set="Mod-Drag" /></dt>
    <dd>Add range selection</dd>
    <dt><Keys set="Alt-Mod-Drag" /></dt>
    <dd>Add box selection</dd>
    <dt><Keys set="Alt-Drag" /></dt>
    <dd>Replace selection with box selection</dd>
    <dt><Keys set="Escape" /></dt>
    <dd>Clear additional selections</dd>
</dl>

## Selecting cells

Select cells with these page-level shortcuts to perform bulk actions on multiple cells.

<dl>
    <dt><Keys set="J" /></dt>
    <dd>Select next cell</dd>
    <dt><Keys set="K" /></dt>
    <dd>Select previous cell</dd>
    <dt><Keys set="Shift-J" /></dt>
    <dd>Select next and current cell</dd>
    <dt><Keys set="Shift-K" /></dt>
    <dd>Select previous and current cell</dd>
    <dt><Keys set="X" /></dt>
    <dd>Select or unselect current cell</dd>
    <dt><Keys set="Shift-Enter" /></dt>
    <dd>Run cells</dd>
    <dt><Keys set="Alt-Up" /></dt>
    <dd>Move cells up</dd>
    <dt><Keys set="Alt-Down" /></dt>
    <dd>Move cells down</dd>
    <dt><Keys set="Alt-Shift-Up" /></dt>
    <dd>Copy cells up</dd>
    <dt><Keys set="Alt-Shift-Down" /></dt>
    <dd>Copy cells down</dd>
    <dt><Keys set="." /></dt>
    <dd>Pin or unpin cells</dd>
    <dt><Keys set="," /></dt>
    <dd>Show or hide outputs</dd>
    <dt><Keys set="D" /><br /><Keys set="Alt-Backspace" /></dt>
    <dd>Delete cells</dd>
    <dt><Keys set="C" /></dt>
    <dd>Add comment</dd>
    <dt><Keys set="O" /><br /><Keys set="Mod-Enter" /></dt>
    <dd>Insert cell below</dd>
    <dt><Keys set="Shift-O" /><br /><Keys set="Shift-Mod-Enter" /></dt>
    <dd>Insert cell above</dd>
    <dt><Keys set="Alt-Enter" /></dt>
    <dd>Insert cell of same type below</dd>
    <dt><Keys set="Shift-Alt-Enter" /></dt>
    <dd>Insert cell of same type above</dd>
    <dt><Keys set="Shift-A" /></dt>
    <dd>Select all</dd>
    <dt><Keys set="Escape" /></dt>
    <dd>Clear selection</dd>
</dl>

## Find and Replace

Use the Find and Replace pane (magnifying glass icon) to find and replace text or code on the page.

<dl>
    <dt><Keys set="Shift-Mod-F" /></dt>
    <dd>Open the Find pane</dd>
    <dt><Keys set="Mod-G" /></dt>
    <dd>Find next occurrence</dd>
    <dt><Keys set="Shift-Mod-G" /></dt>
    <dd>Find previous occurrence</dd>
    <dt><Keys set="Enter" /></dt>
    <dd>In Find input, find next occurrence</dd>
    <dt><Keys set="Shift-Enter" /></dt>
    <dd>In Find input, find previous occurrence</dd>
    <dt><Keys set="Enter" /></dt>
    <dd>In Replace input, replace current occurrence</dd>
</dl>

## Clipboard

You can copy-and-paste code either within or across cells.

<dl>
    <dt><Keys set="Mod-C" /></dt>
    <dd>Copy the selected text. If there is no selection, copy the current line.</dd>
    <dt><Keys set="Mod-X" /></dt>
    <dd>Cut the selected text. If there is no selection, cut the current line.</dd>
    <dt><Keys set="Mod-V" /></dt>
    <dd>Paste the current clipboard contents. If the previous cut or copy was done without selecting (see the previous Clipboard key definitions), paste at the start of the next line rather than at the caret.</dd>
    <dt><Keys set="Ctrl-K" /></dt>
    <dd>Kill (cut) the selected text. If there is no selection, kill the text between the caret and the end of the current line.</dd>
    <dt><Keys set="Ctrl-Y" /></dt>
    <dd>Yank (paste) the previously killed text.</dd>
</dl>

## History

You can undo and redo changes to code; each cell maintains a separate history. (Observable doesn’t yet support undo and redo to [cell-level commands](#editingCells), but you can revert unwanted changes in the notebook menu.)

<dl>
    <dt><Keys set="Mod-Z" /></dt>
    <dd>Undo the last change.</dd>
    <dt><Keys mac="Shift-Cmd-Z" set="Ctrl-Y" /></dt>
    <dd>Redo the last undone change.</dd>
</dl>

## Other

<dl>
    <dt><Keys set="?" /></dt>
    <dd>If a cell is not focused, show keyboard shortcuts. Be sure text is not selected and the Search form is not in use.</dd>
    <dt><Keys set="/" /></dt>
    <dd>If a cell is not focused, display the Search form.</dd>
    <dt><Keys set="F" /></dt>
    <dd>Enter full screen.</dd>
    <dt><Keys set="T" /></dt>
    <dd>Enter Tinker mode.</dd>
</dl>

<style scoped>
    dt {
        padding-top: .5em;
    }
</style>