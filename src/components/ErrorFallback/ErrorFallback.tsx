import {FallbackProps} from "react-error-boundary";

export const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
    const typedError = error as Error;
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{color: "red"}}>{typedError.message}</pre>
            <button onClick={resetErrorBoundary}>
                Retry
            </button>
        </div>
    )
}
