"use client";

import { useState } from "react";

type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [watchList, setWatchList] = useState<string[]>([]);

  const searchVideos = async () => {
    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=8&key=${apiKey}`
    );

    const data = await res.json();

    setVideos(data.items || []);
  };

  const addToWatch = (videoId: string) => {
    if (watchList.includes(videoId)) return;

    setWatchList([...watchList, videoId]);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-5xl font-bold mb-8 text-center">
        NSN MultiWatch
      </h1>

      <div className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Search YouTube..."
          className="flex-1 p-3 rounded text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={searchVideos}
          className="bg-red-600 px-6 py-3 rounded"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="bg-zinc-900 rounded overflow-hidden"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />

            <div className="p-3">
              <p className="text-sm mb-3">
                {video.snippet.title}
              </p>

              <button
                onClick={() => addToWatch(video.id.videoId)}
                className="bg-red-500 px-3 py-2 rounded w-full"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-4">
        Watching Now
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {watchList.map((videoId) => (
          <iframe
            key={videoId}
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full aspect-video rounded"
            allowFullScreen
          />
        ))}
      </div>
    </main>
  );
}