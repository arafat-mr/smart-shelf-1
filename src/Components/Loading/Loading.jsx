import { useState } from "react";
import { RingLoader } from "react-spinners";

function LoadingSpinner() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {loading && (
        <RingLoader 
          color="#6b7280" 
          loading={loading} 
          size={80} 
          aria-label="Loading Ring" 
        />
      )}
    </div>
  );
}

export default LoadingSpinner