import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LogNode = ({ id, data }) => {
  const handles = [{ type: 'target', position: Position.Left, id: 'log-in' }];

  return (
    <BaseNode label="Logger" handles={handles}>
      <div style={{ fontSize: '12px', fontStyle: 'italic' }}>Logs data to console.</div>
    </BaseNode>
  );
};