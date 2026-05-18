"use client";

import { useState } from "react";
import Image from "next/image";

export default function NSNMultiwatchStream() {
  const streams = [
    {
      title: "Pahrul Reyza",
      channelId: "UCsUhlZAanKWUsZxqbPbjAOw",
    },
    {
      title: "Abanosz",
      channelId: "UCMt0OVcI0tCzm6Qtcy3Lfhg",
    },
    {
      title: "Hendy Ramadhan",
      channelId: "UCIwQP2dkoyj73k0zhD0bnXg",
    },
    {
      title: "Rizki Ferdian",
      channelId: "UCa1Dz1yPj3ZyL9Nwe9cnI0w",
    },
    {
      title: "Nareyy",
      channelId: "UCIy6eevxmIsg_Hwete6KOkQ",
    },
    {
      title: "Lyn Stach",
      channelId: "UC93Nk2n6fWQ_8B0vQu2b81Q",
    },
    {
      title: "Tom Keyt",
      channelId: "UCPYq_0HHYSyHf5keHArEnqA",
    },
    {
      title: "MAMATCHA",
      channelId: "UCuO21nkZB_6HBgcZ0vQqpaw",
    },
    {
      title: "Ciyung Kocak",
      channelId: "UCQdJ9LxdDvElCk9Ex80VEaQ",
    },
    {
      title: "Doeeng",
      channelId: "UCFDNsNSeqrsbQdkFqLZmfeQ",
    },
    {
      title: "EL NEKELINS",
      channelId: "UCB3UUwxXfovWYg2s6cGtBng",
    },
    {
      title: "Zaskiachr",
      channelId: "UCFwabDZK9ncWRBGffXIKcJA",
    },
    {
      title: "IC : CUTEE PIEE",
      channelId: "UC6Y8i9j9EBv6waC4G-8cMfg",
    },
    {
      title: "Khaizurè",
      channelId: "UCn_RIK7MNYfRR79dCj4ZnWg",
    },
    {
      title: "Eyangsihir",
      channelId: "UCCl65jcmEBhnrCPm5_UwoQg",
    },
    {
      title: "N4SRUL",
      channelId: "UCNeNWqNExbtfNoQXrpdaOeg",
    },
    {
      title: "Hunt.969",
      channelId: "UCDImuPELfrIBEynkSMYn0Yw",
    },
    {
      title: "Pobla",
      channelId: "UCgXpvTgB-pbxj90y1xLyKCA",
    },
    {
      title: "ipulsadila",
      channelId: "UCRo_r2XTjJctTxBFpYL5erg",
    },
    {
      title: "claireaja",
      channelId: "UCLtAoc1vH3m_kE1CCKJgtNw",
    },
  ];

  const [selectedStreams, setSelectedStreams] = useState(
    streams.slice(0, 0)
  );

  const toggleStream = (stream: any) => {
    const exists = selectedStreams.find(
      (item) => item.channelId === stream.channelId
    );

    if (exists) {
      setSelectedStreams(
        selectedStreams.filter(
          (item) => item.channelId !== stream.channelId
        )
      );
    } else {
      setSelectedStreams([...selectedStreams, stream]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12),transparent_40%)]" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-3xl font-black tracking-[0.3rem] text-yellow-400 md:text-5xl">
              NSN MULTIWATCH
            </h1>

            <p className="mt-2 animate-pulse text-xs uppercase tracking-[0.25rem] text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] md:text-sm">
              Watch community livestreams in one place
          </p>
          </div>

          {/* NSN LOGO */}
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-yellow-500 shadow-2xl shadow-yellow-500/40">
            <Image
              src="/nsnlogo.png"
              alt="NSN Logo"
              width={64}
              height={64}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl p-4 md:p-8">
        {/* STREAM SELECTOR */}
        <div className="mb-8 rounded-3xl border border-yellow-500/20 bg-zinc-950 p-5 shadow-xl shadow-yellow-500/5">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-black text-yellow-400">
                Select Streams
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Choose streams for multiwatch mode
              </p>
            </div>

            <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-sm font-bold text-yellow-400">
              {selectedStreams.length} Active Streams
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {streams.map((stream, index) => {
              const active = selectedStreams.find(
                (item) => item.channelId === stream.channelId
              );

              return (
                <button
                  key={index}
                  onClick={() => toggleStream(stream)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-bold transition-all duration-300 ${
                    active
                      ? "border-yellow-400 bg-yellow-500 text-black shadow-lg shadow-yellow-500/30"
                      : "border-yellow-500/20 bg-zinc-900 text-yellow-300 hover:border-yellow-400/40 hover:bg-zinc-800"
                  }`}
                >
                  {stream.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* STREAM GRID */}
        <div className="grid gap-8 md:grid-cols-2">
          {selectedStreams.map((stream, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              {/* TOP BAR */}
              <div className="flex items-center justify-between border-b border-yellow-500/10 px-5 py-4">
                <div>
                  <h2 className="font-bold text-yellow-400">
                    {stream.title}
                  </h2>

                  <p className="text-xs text-zinc-500">
                    NSN Community Stream
                  </p>
                </div>

                {/* LIVE BADGE */}
                <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />

                  <span className="text-xs font-semibold uppercase tracking-wide text-red-400">
                    LIVE
                  </span>
                </div>
              </div>

              {/* PLAYER */}
              <div className="aspect-video overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/live_stream?channel=${stream.channelId}&autoplay=1&mute=1`}
                  title={stream.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between px-5 py-4">
                <div className="text-sm text-zinc-400">
                  Multiwatch Mode Active
                </div>

                <div className="flex gap-2">
                  <a
                    href={`https://www.youtube.com/channel/${stream.channelId}/live`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-red-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-400"
                  >
                    Live Chat
                  </a>

                  <a
                    href={`https://www.youtube.com/channel/${stream.channelId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-yellow-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-400"
                  >
                    Like & Subscribe
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER WEBSITE */}
      <footer className="mt-16 border-t border-yellow-500/10 bg-black/80 px-6 py-8 text-center backdrop-blur-xl">
        <p className="text-sm font-medium tracking-wide text-yellow-400">
          © 2026 NSN MULTIWATCH — Nine Six Nine. All Rights Reserved.
        </p>

        <p className="mt-2 animate-pulse text-xs italic tracking-widest text-yellow-200/60">
          ✨ No guts, No glory ✨
        </p>
      </footer>
    </div>
  );
}