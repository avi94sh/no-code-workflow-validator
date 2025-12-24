import React from 'react';
import { useReactFlow } from 'reactflow';

export const SubmitButton = () => {
  // Try-catch block taaki crash na ho
  let getNodes, getEdges;
  try {
    const flow = useReactFlow();
    getNodes = flow.getNodes;
    getEdges = flow.getEdges;
  } catch (e) {
    console.error("SubmitButton must be inside ReactFlowProvider");
  }

  const handleClick = async () => {
    if (!getNodes || !getEdges) {
      alert("Error: ReactFlow context nahi mila!");
      return;
    }

    const nodes = getNodes();
    const edges = getEdges();

    const response = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges }),
    });
    
    const data = await response.json();
    alert(`Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button onClick={handleClick} style={{ padding: '10px 20px', cursor: 'pointer', background: '#7c3aed', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Submit Pipeline
      </button>
    </div>
  );
};