'use client';

import { useEffect, useState } from "react";

export default function VideoPlayer() {
    const matchVideos = [
        'BceDgHKz4ss', // Qual 18 - Niagara (Great scoring run)
        'bhlG-D6SnNY', // Qual 2 - Niagara (Solid defense)
    ];
    const [playlist, setPlaylist] = useState('');

    useEffect(() => {
        // Shuffle the array
        const shuffled = [...matchVideos].sort(() => Math.random() - 0.5);
        // Join them into a comma-separated string for the YouTube API
        setPlaylist(shuffled.join(','));
    }, []);

    return (
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-video">
            {playlist && (
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${playlist.split(',')[0]}?autoplay=1&mute=1&loop=1&playlist=${playlist}&controls=0&modestbranding=1&rel=0`}
                    title="CK Cyber Pack Action"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    )
}
