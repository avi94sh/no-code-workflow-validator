from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    # Poora data ek saath uthao
    data = await request.json()
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # 1. Graph structure
    adj = {n['id']: [] for n in nodes}
    in_degree = {n['id']: 0 for n in nodes}
    for e in edges:
        adj[e['source']].append(e['target'])
        in_degree[e['target']] += 1
        
    # 2. Kahn's Algorithm
    queue = [n for n in in_degree if in_degree[n] == 0]
    count = 0
    while queue:
        u = queue.pop(0)
        count += 1
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    is_dag = (count == num_nodes)
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}