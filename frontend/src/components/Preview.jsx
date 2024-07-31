import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';

function Preview({ markdown }) {
    const [html, setHtml] = useState('');

    useEffect(() => {
        const fetchHtml = async () => {
            const response = await axios.post('http://localhost:4000/convert', { markdown });
            setHtml(response.data.html);
        };

        fetchHtml();
    }, [markdown]);

    return (
        <div style={{ width: '48%', minHeight: '80', padding: '10px', border: '1px solid #ccc', overflow: 'auto' }}>

      
        <Markdown 
        rehypePlugins={[rehypeRaw]}
            children={html}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                        <SyntaxHighlighter style={materialLight} language={match[1]} PreTag="div" {...props}>
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
            style={{ width: '100%', height: '100%' }}
        />
          </div>
    );
}

export default Preview