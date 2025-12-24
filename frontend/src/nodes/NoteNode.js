import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode label="Note" handles={[]}>
      <textarea 
        placeholder="Type your notes..." 
        style={{ width: '100%', border: '1px solid #ddd', borderRadius: '4px' }}
      />
    </BaseNode>
  );
};