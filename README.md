# AI Pipeline Builder & DAG Validator

This is a full-stack web application designed to create modular AI workflows. Users can drag and drop nodes, connect them to define data flow, and validate the logic through a backend DAG checker.

## 🔗 Live Deployment Links
- **Frontend (Live Site):** [https://no-code-workflow-validator-1.onrender.com](https://no-code-workflow-validator-1.onrender.com)
- **Backend API:** [https://no-code-workflow-validator.onrender.com](https://no-code-workflow-validator.onrender.com)

## 🚀 Key Features
- **Visual Interface**: Built with React Flow for an intuitive drag-and-drop experience.
- **Dynamic Handles**: Text nodes automatically detect `{{variable}}` syntax and create input handles in real-time.
- **Backend Validation**: FastAPI server uses **Kahn's Algorithm** for cycle-detection to ensure the pipeline is a Directed Acyclic Graph (DAG).
- **Modular Design**: Custom nodes for Inputs, LLMs, Outputs, and Text processing.

## 🛠️ Tech Stack
- **Frontend**: React.js, React Flow
- **Backend**: Python, FastAPI, Uvicorn
- **Deployment**: Render (Monorepo Setup)

## 📂 Project Structure
- `/frontend`: React application with custom node components and state management.
- `/backend`: FastAPI server containing the pipeline parsing and DAG validation logic.

## ⚙️ Local Development Setup

### Backend
1. Go to the backend directory: `cd backend`
2. Install dependencies: `pip install -r requirements.txt`
3. Run the server: `uvicorn main:app --reload`

### Frontend
1. Go to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the app: `npm start`
