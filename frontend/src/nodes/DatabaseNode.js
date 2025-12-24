import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const handles = [{ type: 'target', position: Position.Left, id: 'db-in' }];

  return (
    <BaseNode label="Database" handles={handles}>
      <select style={{ width: '100%' }}>
        <option>Users Table</option>
        <option>Orders Table</option>
      </select>
    </BaseNode>
  );
};