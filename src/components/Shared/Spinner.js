
import React, { useState, useEffect } from "react";
const Spinner = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating an asynchronous task
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            {loading ? (
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-900"></div>
            ) : (
                <h1>Content loaded successfully!</h1>
            )}
        </div>
    )
}

export default Spinner