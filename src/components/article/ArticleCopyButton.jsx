import { useState } from 'react';

/**
 * Replace a wrapper element with its children (unwrap).
 * Notion treats <header>, <section>, <article> oddly — flattening them
 * gives it a clean stream of block-level elements.
 */
function unwrap(element) {
  const parent = element.parentNode;
  while (element.firstChild) {
    parent.insertBefore(element.firstChild, element);
  }
  parent.removeChild(element);
}

/**
 * Notion's list parser gets confused when a nested <ul>/<ol> sits inside
 * an <li> next to text (or a <strong>). Wrapping the leading text in its
 * own block (or simply ensuring the nested list is the last child on its
 * own line) helps Notion recognise the hierarchy.
 *
 * The most reliable trick: ensure any inline content before a nested list
 * inside an <li> is wrapped, so the nested list is clearly a sublist.
 */
function normaliseNestedLists(root) {
  root.querySelectorAll('li').forEach((li) => {
    const nestedList = li.querySelector(':scope > ul, :scope > ol');
    if (!nestedList) return;

    // Collect everything before the nested list into a wrapper span,
    // ensuring the sublist is clearly separated.
    const before = [];
    let node = li.firstChild;
    while (node && node !== nestedList) {
      const next = node.nextSibling;
      before.push(node);
      node = next;
    }

    if (before.length === 0) return;

    // If the leading content is just inline stuff, leave it as-is in the li
    // but make sure the nested list starts on its own line by inserting
    // a line break right before it. Notion respects this.
    const br = document.createElement('br');
    li.insertBefore(br, nestedList);
  });
}

function prepareCloneForCopy(sourceEl) {
  const clone = sourceEl.cloneNode(true);

  // Remove non-content nodes from the clone
  clone
    .querySelectorAll(
      'script, style, noscript, .sb-article-copy-row, button, nav, footer'
    )
    .forEach((n) => n.remove());

  // Unwrap semantic wrappers that confuse Notion's block detection
  clone.querySelectorAll('header, section, article').forEach(unwrap);

  // Fix nested list structure for Notion
  normaliseNestedLists(clone);

  return clone;
}

function ArticleCopyButton({ contentRef }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!contentRef.current) return;

    const clone = prepareCloneForCopy(contentRef.current);

    // Place the clone in the DOM so the browser computes real styles for it.
    // Hidden offscreen but still laid out (no display:none, no visibility:hidden,
    // since those can strip computed styles from the clipboard payload).
    const host = document.createElement('div');
    host.style.position = 'fixed';
    host.style.left = '-10000px';
    host.style.top = '0';
    host.style.width = '800px';
    host.style.pointerEvents = 'none';
    host.appendChild(clone);
    document.body.appendChild(host);

    const selection = window.getSelection();
    const range = document.createRange();

    try {
      range.selectNodeContents(clone);
      selection.removeAllRanges();
      selection.addRange(range);

      const success = document.execCommand('copy');

      if (!success) {
        await navigator.clipboard.writeText(clone.innerText);
      }
    } catch (error) {
      console.error('Failed to copy article content:', error);
      try {
        await navigator.clipboard.writeText(clone.innerText);
      } catch (e) {
        console.error('Clipboard API failed:', e);
      }
    } finally {
      selection.removeAllRanges();
      host.remove();
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <div className="sb-article-copy-row">
      <button type="button" className="sb-article-copy-button" onClick={handleCopy}>
        {copied ? 'Copied' : 'Copy to Clipboard'}
      </button>
    </div>
  );
}

export default ArticleCopyButton;