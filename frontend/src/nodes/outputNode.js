import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  // For the output node, only a target (input) handle is needed on the left side
  const handles = [
    { type: 'target', position: Position.Left, id: 'value' }
  ];

  return (
    <BaseNode label="Output" handles={handles}>
      <label style={{ fontSize: '12px', display: 'block', marginBottom: '5px' }}>
        Name:
        <input 
          type="text" 
          value={currName} 
          onChange={(e) => setCurrName(e.target.value)} 
          style={{ width: '100%', marginTop: '3px' }}
        />
      </label>
      <label style={{ fontSize: '12px', display: 'block' }}>
        Type:
        <select 
          value={outputType} 
          onChange={(e) => setOutputType(e.target.value)} 
          style={{ width: '100%', marginTop: '3px' }}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};