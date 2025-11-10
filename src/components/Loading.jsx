import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-t-cyan-400 border-r-pink-500 border-b-yellow-400 border-l-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;