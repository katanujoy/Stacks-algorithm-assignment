# HTML Tag Validator (Stack Solution)

## What It Does
This program checks if HTML tags in a string are properly nested using a stack.

## How It Works
1. It uses a stack to track opening tags.
2. Each HTML tag is extracted from the string.
3. Opening tags are pushed to the stack.
4. Closing tags are checked against the stack’s top:
   - If the tag matches the top, it's popped off.
   - If not, the first mismatched tag is returned.
5. If the stack is empty at the end, the tags are properly nested ("true").
6. If not, the first unclosed tag is returned.

## Example Usage
```javascript
console.log(HTMLElements("<div><b><p>Hi</p></b></div>")); // "true"
console.log(HTMLElements("<div><p>Oops</div></p>"));      // "div"
Why This Works
The stack uses Last-In-First-Out (LIFO) to match opening and closing tags.

It runs in O(n) time, as it processes each tag once.

Possible Improvements
Add better error messages for mismatched tags.

Handle self-closing tags like <img />.

Support uppercase tags like <DIV> or <P>.