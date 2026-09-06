"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  totalVotes: number;
}

interface Questionnaire {
  question: string;
  options: {
    label: string;
    explanation: string;
  }[];
}

interface BlogPost {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  likes?: number;
  poll?: Poll;
  questionnaire?: Questionnaire;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [votedPolls, setVotedPolls] = useState<{ [pollId: string]: string }>({});
  const [selectedQuestionnaireOption, setSelectedQuestionnaireOption] = useState<{ [postId: string]: number }>({});
  const [likes, setLikes] = useState<{ [postId: string]: number }>({});

  // Fetch real blog posts and poll states directly from MongoDB database
  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/blog");
        const data = await res.json();
        if (data?.success && data?.posts) {
          setPosts(data.posts);
          const initialLikesMap: { [key: string]: number } = {};
          data.posts.forEach((p: BlogPost) => {
            if (p.likes !== undefined) {
              initialLikesMap[p.id] = p.likes;
            }
          });
          setLikes(initialLikesMap);
        }
      } catch (err) {
        console.error("Error loading blog posts from DB:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();

    // Load persisted voter choices from localStorage
    if (typeof window !== "undefined") {
      const storedVotes: { [pollId: string]: string } = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("voted_poll_")) {
          const pollId = key.replace("voted_poll_", "");
          storedVotes[pollId] = localStorage.getItem(key) || "";
        }
      }
      setVotedPolls(storedVotes);
    }
  }, []);

  const handleVote = async (pollId: string, optionId: string) => {
    if (votedPolls[pollId] || !activePost) return;

    // Optimistic vote update
    setVotedPolls((prev) => {
      const updated = { ...prev, [pollId]: optionId };
      if (typeof window !== "undefined") {
        localStorage.setItem(`voted_poll_${pollId}`, optionId);
      }
      return updated;
    });

    setPosts((prevPosts) =>
      prevPosts.map((p) => {
        if (p.poll && p.poll.id === pollId) {
          return {
            ...p,
            poll: {
              ...p.poll,
              totalVotes: p.poll.totalVotes + 1,
              options: p.poll.options.map((opt) =>
                opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
              ),
            },
          };
        }
        return p;
      })
    );

    if (activePost.poll && activePost.poll.id === pollId) {
      setActivePost((prev) => {
        if (!prev || !prev.poll) return prev;
        return {
          ...prev,
          poll: {
            ...prev.poll,
            totalVotes: prev.poll.totalVotes + 1,
            options: prev.poll.options.map((opt) =>
              opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
            ),
          },
        };
      });
    }

    // Persist real vote to MongoDB Atlas backend
    try {
      const res = await fetch("/api/blog/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: activePost.id, pollId, optionId }),
      });
      const data = await res.json();
      if (data?.success && data?.poll) {
        // Sync with exact authoritative data from MongoDB
        setPosts((prevPosts) =>
          prevPosts.map((p) => (p.poll && p.poll.id === pollId ? { ...p, poll: data.poll } : p))
        );
        setActivePost((prev) => (prev && prev.poll?.id === pollId ? { ...prev, poll: data.poll } : prev));
      }
    } catch (err) {
      console.error("Failed to persist vote to MongoDB:", err);
    }
  };

  const handleLike = async (postId: string) => {
    // Optimistic update
    setLikes((prev) => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1,
    }));

    // Persist to MongoDB
    try {
      const res = await fetch("/api/blog/like", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId }),
      });
      const data = await res.json();
      if (data?.success && data?.likes) {
        setLikes((prev) => ({ ...prev, [postId]: data.likes }));
      }
    } catch (err) {
      console.error("Failed to persist endorsement to MongoDB:", err);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activePost) {
        setActivePost(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePost]);

  return (
    <main className="relative w-full min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans-clean">
      {/* Plain Return Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="text-xs font-mono-tech text-zinc-400 hover:text-zinc-950 transition-colors flex items-center gap-2 cursor-pointer group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span>RETURN</span>
        </Link>
      </div>

      {/* Full-Width Header */}
      <header className="w-full border-b border-zinc-200 px-6 sm:px-10 md:px-16 pt-24 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter text-zinc-950 uppercase">
              Blog
            </h1>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs font-mono-tech text-zinc-400">
              {isLoading ? "Loading articles..." : `${posts.length} Articles`}
            </span>
          </div>
        </div>
      </header>

      {/* Clean Full-Width Grid: Edge-to-Edge Panels from MongoDB */}
      {isLoading ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-zinc-200">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 md:border-r border-zinc-200 last:border-r-0 min-h-[460px] animate-pulse"
            >
              <div className="w-full flex justify-between">
                <div className="w-20 h-4 bg-zinc-100 rounded" />
                <div className="w-12 h-12 bg-zinc-100 rounded" />
              </div>
              <div className="w-full h-[180px] my-6 bg-zinc-100 rounded-xl" />
              <div className="space-y-3 w-full">
                <div className="w-3/4 h-6 bg-zinc-100 rounded" />
                <div className="w-full h-4 bg-zinc-100 rounded" />
                <div className="w-1/2 h-3 bg-zinc-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-zinc-200">
          {posts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between items-start transition-all duration-500 hover:bg-[#0c0c0e] hover:text-white cursor-pointer select-none border-b lg:border-b-0 md:border-r border-zinc-200 last:border-r-0 hover:border-zinc-800 min-h-[460px] sm:min-h-[520px]"
            >
              {/* Top: Big Number & Category */}
              <div className="w-full flex justify-between items-start">
                <span className="text-xs font-mono-tech text-zinc-400 group-hover:text-zinc-400 uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-5xl sm:text-6xl md:text-7xl font-black font-heading tracking-tighter text-zinc-200 group-hover:text-white transition-all duration-500 group-hover:scale-105 origin-top-right">
                  {post.num}
                </span>
              </div>

              {/* Middle: Image Preview */}
              <div className="relative w-full h-[180px] sm:h-[200px] my-6 rounded-xl overflow-hidden bg-zinc-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Bottom: Title, Excerpt & Metadata */}
              <div className="w-full">
                <h2 className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-zinc-900 group-hover:text-white transition-colors uppercase mb-2">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm font-sans-clean text-zinc-500 group-hover:text-zinc-400 transition-colors line-clamp-2 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between w-full pt-3 border-t border-zinc-200 group-hover:border-zinc-800 transition-colors text-xs font-mono-tech text-zinc-400">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                    <span>{post.readTime}</span>
                    <span className="text-sm transition-transform group-hover:translate-x-1">↗</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* FULL ARTICLE READING DRAWER WITH LIVE DATABASE POLLS & QUESTIONNAIRES */}
      {activePost && (
        <div
          onClick={() => setActivePost(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-white-fade cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl sm:max-w-3xl h-full bg-white overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shadow-2xl p-6 sm:p-10 md:p-12 flex flex-col justify-between cursor-default"
          >
            <div>
              {/* Header Nav */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-200 mb-8">
                <button
                  onClick={() => setActivePost(null)}
                  className="text-xs font-mono-tech text-zinc-400 hover:text-zinc-950 transition-colors flex items-center gap-2 cursor-pointer group"
                >
                  <span className="transform group-hover:-translate-x-1 transition-transform">
                    ←
                  </span>
                  <span>RETURN</span>
                </button>

                <div className="text-xs font-mono-tech text-zinc-400">
                  {activePost.date} • {activePost.readTime}
                </div>
              </div>

              {/* Title & Subtitle */}
              <span className="text-xs font-mono-tech text-zinc-400 uppercase tracking-wider block mb-2">
                {activePost.category}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-zinc-950 uppercase mb-4 leading-tight">
                {activePost.title}
              </h2>
              <p className="text-base sm:text-lg font-sans-clean text-zinc-600 mb-8 leading-relaxed">
                {activePost.subtitle}
              </p>

              {/* Lead Image */}
              <div className="relative w-full h-[260px] sm:h-[380px] rounded-2xl overflow-hidden mb-10 bg-zinc-100">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed font-sans-clean">
                {activePost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* 1. INLINE LIVE INTERACTIVE POLL (REAL DATA FROM MONGODB) */}
              {activePost.poll && (
                <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono-tech text-zinc-500 uppercase tracking-wider">
                      Live Community Poll
                    </span>
                    <span className="text-xs font-mono-tech text-zinc-900 font-bold bg-white px-2.5 py-1 rounded-full border border-zinc-200">
                      {activePost.poll.totalVotes} Total Votes
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold font-heading text-zinc-950 mb-5">
                    {activePost.poll.question}
                  </h4>

                  <div className="space-y-3">
                    {activePost.poll.options.map((opt) => {
                      const hasVoted = !!votedPolls[activePost.poll!.id];
                      const isSelected = votedPolls[activePost.poll!.id] === opt.id;
                      const total = activePost.poll!.totalVotes;
                      const percentage = total > 0 ? Math.round((opt.votes / total) * 100) : 0;

                      return (
                        <button
                          key={opt.id}
                          disabled={hasVoted}
                          onClick={() => handleVote(activePost.poll!.id, opt.id)}
                          className={`relative w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer overflow-hidden ${isSelected
                              ? "border-zinc-950 bg-zinc-900 text-white shadow-sm"
                              : hasVoted
                                ? "border-zinc-200 bg-white text-zinc-800 cursor-default"
                                : "border-zinc-200 bg-white hover:border-zinc-400 text-zinc-800"
                            }`}
                        >
                          {/* Live percentage fill */}
                          {hasVoted && (
                            <div
                              className={`absolute inset-y-0 left-0 transition-all duration-700 ease-out ${isSelected ? "bg-zinc-800" : "bg-zinc-100"
                                }`}
                              style={{ width: `${percentage}%` }}
                            />
                          )}

                          <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm">
                            <span className="font-medium pr-4">{opt.text}</span>
                            {hasVoted ? (
                              <div className="flex items-center gap-2 font-mono-tech">
                                <span className={`text-[11px] ${isSelected ? "text-zinc-300" : "text-zinc-400"}`}>
                                  {opt.votes} {opt.votes === 1 ? "vote" : "votes"}
                                </span>
                                <span className="font-bold text-xs">
                                  {percentage}%
                                </span>
                              </div>
                            ) : (
                              <span className="text-xs font-mono-tech text-zinc-400 opacity-0 group-hover:opacity-100">
                                Vote →
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 2. INLINE PERSPECTIVE QUESTIONNAIRE */}
              {activePost.questionnaire && (
                <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white">
                  <span className="text-xs font-mono-tech text-zinc-400 uppercase tracking-wider block mb-2">
                    Perspective Questionnaire
                  </span>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-white mb-4">
                    {activePost.questionnaire.question}
                  </h4>

                  <div className="space-y-2.5">
                    {activePost.questionnaire.options.map((opt, idx) => {
                      const isSelected = selectedQuestionnaireOption[activePost.id] === idx;

                      return (
                        <div key={idx}>
                          <button
                            onClick={() =>
                              setSelectedQuestionnaireOption((prev) => ({
                                ...prev,
                                [activePost.id]: idx,
                              }))
                            }
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between ${isSelected
                                ? "bg-white text-zinc-950 border-white font-medium"
                                : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-600"
                              }`}
                          >
                            <span>{opt.label}</span>
                            <span className="text-xs font-mono-tech opacity-60">
                              {isSelected ? "Selected ✓" : "Choose →"}
                            </span>
                          </button>

                          {isSelected && (
                            <div className="p-3 mt-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 animate-white-fade font-sans-clean leading-relaxed">
                              💡 {opt.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Endorsement Claps connected to MongoDB */}
              <div className="mt-10 pt-6 border-t border-zinc-200 flex items-center justify-between">
                <button
                  onClick={() => handleLike(activePost.id)}
                  className="px-4 py-2 rounded-full border border-zinc-200 hover:border-zinc-950 text-xs font-mono-tech text-zinc-800 hover:bg-zinc-950 hover:text-white transition-all cursor-pointer flex items-center gap-2 active:scale-95"
                >
                  <span>👏 Endorse Essay</span>
                  <span className="font-bold">+{likes[activePost.id] ?? activePost.likes ?? 0}</span>
                </button>
                <span className="text-xs font-mono-tech text-zinc-400">
                  Amandi Dassanayaka
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-10 mt-10 border-t border-zinc-200 flex items-center justify-between text-xs font-mono-tech text-zinc-400">
              <span>{activePost.date}</span>
              <button
                onClick={() => setActivePost(null)}
                className="text-zinc-950 font-bold hover:underline cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
