import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-4xl font-bold">Programming Language With Novel Type Inference</h1>
        <h2 className="text-2xl mt-2">Supervisor(s): Professor Oliveira, Bruno</h2>
        <h2 className="text-2xl">Students: Dave Matthew, Karan, Agrim, Shaheer</h2>
        <p className="mt-4">
          This project aims to develop a realistic implementations of state-of-the-art type inference algorithms.
        </p>
      </header>
      <section className="p-6">
        <h2 className="text-3xl font-semibold">Project Progress</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Initial Planning - Completed</li>
          <li>Design Phase - In Progress</li>
          <li>Implementation - Pending</li>
          <li>Testing - Pending</li>
          <li>Final Review - Pending</li>
        </ul>
      </section>
      <section className="p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold">Documentation</h2>
        <ul className="list-disc list-inside mt-4">
          <li><a href="/docs/project-plan.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Project Plan</a></li>
          <li><a href="/docs/intermediate-report.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Intermediate Report</a></li>
          <li><a href="/docs/final-report.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Final Report</a></li>
        </ul>
      </section>
      <section className="p-6">
        <h2 className="text-3xl font-semibold">Links to Methodologies and Results</h2>
        <ul className="list-disc list-inside mt-4">
          <li><a href="https://example.com/methodology" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Methodology</a></li>
          <li><a href="https://example.com/results" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Results</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;