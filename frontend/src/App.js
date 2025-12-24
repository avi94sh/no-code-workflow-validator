import { ReactFlowProvider } from 'reactflow';
import { PipelineToolbar } from './toolbar'; // Check karo file name sahi hai?
import { PipelineUI } from './ui';           // Check karo file name sahi hai?
import { SubmitButton } from './submit'; 

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlowProvider>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <PipelineToolbar /> {/* This will bring the toolbar back */}
          <PipelineUI />       {/* This will bring back the area where nodes are dragged */}
          <SubmitButton />     {/* Your button */}
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default App;