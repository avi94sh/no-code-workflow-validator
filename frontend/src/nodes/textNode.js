import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]); // Yahan 'variables' kar diya
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  }, [text]);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...text.matchAll(regex)].map(m => m[1]);
    setVariables([...new Set(matches)]); // Yahan 'setVariables' use ho raha hai
  }, [text]);

  const dynamicHandles = [
    { type: 'source', position: Position.Right, id: 'output' },
    ...variables.map((v, i) => ({ // Yahan bhi 'variables' hai
      type: 'target', 
      position: Position.Left, 
      id: `${id}-${v}`,
      style: { top: `${(i + 1) * 20}px`, background: '#7c3aed' } 
    }))
  ];

  return (
    <BaseNode label="Text" handles={dynamicHandles}>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', resize: 'none', border: '1px solid #ccc', borderRadius: '4px', outline: 'none' }}
      />
    </BaseNode>
  );
};