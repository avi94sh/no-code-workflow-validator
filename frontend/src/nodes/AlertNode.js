import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const AlertNode = ({ id, data }) => {
  const handles = [{ type: 'target', position: Position.Left, id: 'alert-in' }];

  return (
    <BaseNode label="Alert" handles={handles}>
      <div style={{ fontSize: '12px' }}>Triggers a system alert.</div>
    </BaseNode>
  );
};