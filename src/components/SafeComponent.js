import React, { useState, useEffect } from 'react';

/**
 * SafeComponent: A wrapper that adds error handling to any component
 * 
 * @param {Object} props
 * @param {React.Component} props.component - The component to render safely
 * @param {Object} props.fallback - Element to show if component fails to render
 * @param {Object} props.props - Props to pass to the component
 */
const SafeComponent = ({ component: Component, fallback, ...props }) => {
  const [hasError, setHasError] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);
  
  // Reset error state when component changes
  useEffect(() => {
    setHasError(false);
    setErrorInfo(null);
  }, [Component]);
  
  try {
    if (hasError) {
      // Show fallback if we previously had an error
      return fallback || (
        <div className="p-4 m-2 bg-red-900 bg-opacity-10 border border-red-500 rounded-md">
          <h3 className="text-lg font-medium mb-2">Component Error</h3>
          {errorInfo && (
            <pre className="text-xs overflow-auto p-2 bg-black bg-opacity-20 rounded max-h-32">
              {errorInfo.toString()}
            </pre>
          )}
        </div>
      );
    }
    
    // Render the component
    return <Component {...props} />;
  } catch (error) {
    // Update error state
    setHasError(true);
    setErrorInfo(error);
    
    console.error("SafeComponent caught error:", error);
    
    // Render fallback
    return fallback || (
      <div className="p-4 m-2 bg-red-900 bg-opacity-10 border border-red-500 rounded-md">
        <h3 className="text-lg font-medium mb-2">Component Error</h3>
        <pre className="text-xs overflow-auto p-2 bg-black bg-opacity-20 rounded max-h-32">
          {error.toString()}
        </pre>
      </div>
    );
  }
};

export default SafeComponent;
