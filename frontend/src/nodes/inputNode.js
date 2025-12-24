import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode'; // Jo humne Step 1 mein banayi thi

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  // For the input node, we need a ‘source’ handle on the right side.
  const handles = [
    { type: 'source', position: Position.Right, id: 'value' }
  ];

  return (
    <BaseNode label="Input" handles={handles}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '12px', color: '#666' }}>
          Field Name:
          <input 
            type="text" 
            value={currName} 
            onChange={(e) => setCurrName(e.target.value)} 
            style={{ 
              width: '100%', 
              padding: '4px', 
              borderRadius: '4px', 
              border: '1px solid #ccc',
              marginTop: '4px'
            }}
          />
        </label>
        
        <label style={{ fontSize: '12px', color: '#666' }}>
          Type:
          <select 
            value={inputType} 
            onChange={(e) => setInputType(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '4px', 
              borderRadius: '4px', 
              border: '1px solid #ccc',
              marginTop: '4px'
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
            <option value="Number">Number</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};