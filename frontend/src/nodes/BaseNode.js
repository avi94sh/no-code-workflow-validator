import { Handle } from 'reactflow';

export const BaseNode = ({ label, children, handles = [] }) => {
  return (
    <div style={{ 
      background: '#fff', 
      border: '2px solid #7c3aed', 
      borderRadius: '10px', 
      padding: '12px', 
      minWidth: '160px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ 
        fontWeight: 'bold', 
        color: '#4c1d95',
        borderBottom: '1px solid #ddd', 
        marginBottom: '10px',
        paddingBottom: '5px'
      }}>
        {label}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        {children}
      </div>

      {/* Dynamic Handles */}
      {handles.map((h, idx) => (
        <Handle
          key={idx}
          type={h.type}
          position={h.position}
          id={h.id}
          style={{ 
            background: '#7c3aed', 
            width: '8px', 
            height: '8px',
            ...h.style 
          }}
        />
      ))}
    </div>
  );
};