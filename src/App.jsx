import React from 'react'
import ErrorBoundary from "./components/ErrorBoundary";
import BuggyComponent from './components/BuggyComponent'
import SafeComponent from './components/SafeComponent';
import Counter from './components/Counter';
import ErrorComponent from './components/ErrorComponent';
import EventError from './components/EventError';
import CustomFallback from './components/CustomFallback';
import SecondBuggyComponent from './components/SecondBuggyComponent';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <h2>20 - Error Boundaries</h2>

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      <hr />

      <h2>Example 2 - Safe Component</h2>

      <ErrorBoundary>
        <SafeComponent />
      </ErrorBoundary>
      <hr />
      
      <h2>Example 3 - Counter</h2>

      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <hr />

      <h2>Example 4 - Component Error</h2>

      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <hr />

      <h2>Example 5 - Event Error</h2>

      <ErrorBoundary>
        <EventError />
      </ErrorBoundary>
      <hr />
      
      <h2>Example 6 - Custom Fallback</h2>

      <ErrorBoundary>
        <CustomFallback />
      </ErrorBoundary>
      <hr />

      <h2>Example 7 - Multiple Error Boundaries</h2>

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      <hr />

      <ErrorBoundary>
        <SecondBuggyComponent />
      </ErrorBoundary>
      <hr />

      <h2>Example 9 - User Profile</h2>

      <ErrorBoundary>
        <UserProfile />
      </ErrorBoundary>
      <hr />
      
      <h2>Example 10 - Dashboard</h2>

      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
    </div>
  )
}

export default App
