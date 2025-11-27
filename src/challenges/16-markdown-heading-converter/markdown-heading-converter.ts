/*
Given a string representing a Markdown heading, return the equivalent HTML heading.

A valid Markdown heading must:

Start with zero or more spaces, followed by
1 to 6 hash characters (#) in a row, then
At least one space. And finally,
The heading text.
The number of hash symbols determines the heading level. For example, one hash symbol corresponds to an h1 tag, and six hash symbols correspond to an h6 tag.

If the given string doesn't have the exact format above, return "Invalid format".

For example, given "# My level 1 heading", return "<h1>My level 1 heading</h1>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/

export default function createSignature(name: string, title: string, company: string) {
  const firstLetter = name[0].toUpperCase();
  let prefix;

  if (firstLetter >= 'A' && firstLetter <= 'I') {
    prefix = '>>';
  } else if (firstLetter >= 'J' && firstLetter <= 'R') {
    prefix = '--';
  } else {
    prefix = '::';
  }

  return `${prefix}${name}, ${title} at ${company}`;
}