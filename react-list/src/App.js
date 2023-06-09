import React, { useEffect, useState } from 'react';
import response from './api/mock';
import './style.css';

export default function App() {
  return (
    <div>
      <h2>To Do List</h2>
      <p>
        Your task is to implement a React component that renders a nested list
        of things to do. Please see example here.
        <br />
        <ul>
          <li>Bring over API data from the json file asynchronously</li>
          <li>
            Render To Do List on each Card that includes tasks, subtasks, and
            additional subtasks. Please note that subtasks can have nested
            subtasks.
          </li>
          <li>Make sure that subtasks are listed with letters in order.</li>
          <li>
            Add a Search bar and implement a Search functionality to search for
            tasks.
          </li>
        </ul>
      </p>
      <div className="card">
        <h3>Groceries</h3>
        <div>
          <div>Milk</div>
          <ul>
            <li>A. 2% Reduced Fat</li>
            <ul>
              <li>B. Organic</li>
            </ul>
            <li>A. Whole Milk</li>
            <ul>
              <li>B. Horizon</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
