import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'timer-in' },
    { type: 'source', position: Position.Right, id: 'timer-out' }
  ];

  return (
    <BaseNode label="Timer" handles={handles}>
      <input type="number" placeholder="Seconds" style={{ width: '100%' }} />
    </BaseNode>
  );
};