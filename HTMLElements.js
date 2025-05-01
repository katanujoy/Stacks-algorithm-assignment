// HTML Tag Validator - by Joy Katanu Kyalo
// Validates proper HTML tag nesting using a stack-based approach

function HTMLElements(str) {
    const stack = [];
    // Extract all HTML tags from the string
    const tags = str.match(/<\/?[a-z]+>/g) || [];

    for (const tag of tags) {
        if (!tag.startsWith('</')) {
            // Opening tag — push to stack
            stack.push(tag.slice(1, -1));
        } else {
            // Closing tag — check for matching opening tag
            if (stack.length === 0) {
                return tag.slice(2, -1); // No opening tag to match
            }

            const lastOpenTag = stack[stack.length - 1];
            const currentClosingTag = tag.slice(2, -1);

            if (lastOpenTag === currentClosingTag) {
                stack.pop(); // Valid pair
            } else {
                return lastOpenTag; // Mismatched pair
            }
        }
    }

    // All tags matched correctly
    return stack.length === 0 ? "true" : stack[0];
}

module.exports = HTMLElements;
