import React from 'react'

function EditorArea({ markdown, setMarkdown }) {
    return (
        <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
            style={{ width: '48%', minHeight: '80vh', padding: '10px', fontSize: '16px' }}
        />
    );
}

export default EditorArea