import React from 'react';

export default function DecorativeBubbles() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Decorative Bubbles */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute top-1/2 -right-24 h-64 w-64 rounded-full bg-purple-300/20 blur-2xl" />
            <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

            {/* Floating Bubbles */}
            <div className="absolute top-10 left-10 h-12 w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs" />
            <div className="absolute top-40 right-20 h-20 w-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm" />
            <div className="absolute top-2/3 right-1/4 h-8 w-8 rounded-full border border-white/10 bg-white/5" />
        </div>
    );
}
