import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="p-6 m-4 bg-red-900 bg-opacity-20 border border-red-500 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Something went wrong</h2>
          <details className="whitespace-pre-wrap">
            <summary className="text-red-400 cursor-pointer mb-2">View error details</summary>
            <p className="mb-2 text-white">{this.state.error && this.state.error.toString()}</p>
            <p className="text-gray-400 text-sm">
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </p>
          </details>
          <button 
            className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
