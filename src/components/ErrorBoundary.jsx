import React from "react";
import CustomFallback from "./CustomFallback";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught by Error Boundary:", error);
    console.log("Error information:", errorInfo);
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <CustomFallback />

          <p>
            Error: {this.state.error?.message}
          </p>

          <button onClick={this.handleRetry}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;