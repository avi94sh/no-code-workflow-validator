# AI Pipeline Builder & DAG Validator

This is a full-stack web application designed to create modular AI workflows. Users can drag and drop nodes, connect them to define data flow, and validate the logic through a backend DAG checker.

## 🚀 Key Features
- **Visual Interface**: Built with React Flow for an intuitive drag-and-drop experience.
- **Dynamic Handles**: Text nodes automatically detect `{{variable}}` syntax and create input handles in real-time.
- **Backend Validation**: FastAPI server uses a cycle-detection algorithm to ensure the pipeline is a Directed Acyclic Graph (DAG).
- **Modular Design**: Custom nodes for Inputs, LLMs, Outputs, and Text processing.

## 🛠️ Tech Stack
- **Frontend**: React.js, React Flow, Tailwind CSS
- **Backend**: Python, FastAPI, Uvicorn

## 📂 Project Structure
- `/frontend`: React application with custom node components and state management.
- `/backend`: FastAPI server containing the pipeline parsing and DAG validation logic.

## ⚙️ How to Run

### Backend
1. Go to the backend directory: `cd backend`
2. Install dependencies: `pip install -r requirements.txt`
3. Run the server: `uvicorn main:app --reload`

### Frontend
1. Go to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the app: `npm start`
