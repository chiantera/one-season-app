import React, { useState } from "react";

export default function OneSeasonApp() {
  const [title, setTitle] = useState("");
  const [rant, setRant] = useState("");

  const shows = [
    {
      title: "True Detective",
      good: "Haunting noir, philosophical dialogue, Rust Cohle monologues",
      bad: "Season 2’s generic corruption arc and tonal mismatch"
    },
    {
      title: "Westworld",
      good: "Elegant loops, sentience arcs, Anthony Hopkins as godlike programmer",
      bad: "Lore-dump hell, bloated seasons, robot uprising fatigue"
    },
    {
      title: "13 Reasons Why",
      good: "Raw emotional impact, closed narrative arc",
      bad: "Unnecessary trauma porn, school shooter arc"
    }
  ];

  const handleSubmit = () => {
    alert(`Thanks for your submission:\n${title}\n\n${rant}`);
    setTitle("");
    setRant("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">🌌 One Season Was Enough</h1>
      <p className="text-lg max-w-2xl mx-auto mb-6 italic">
        A multiverse tribute to TV shows that peaked in Season 1... and should've stopped there.
      </p>

      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {shows.map((show, index) => (
          <div key={index} className="rounded-2xl shadow-xl p-4 bg-white text-left">
            <h2 className="text-2xl font-semibold mb-2">{show.title}</h2>
            <p><strong>✅ What made it great:</strong> {show.good}</p>
            <p className="mt-2"><strong>💥 Where it went wrong:</strong> {show.bad}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 max-w-xl mx-auto text-left">
        <h3 className="text-2xl font-bold mb-2">📮 Submit Your Own</h3>
        <p className="mb-4">What show do you think should’ve ended after Season 1?</p>
        <input
          type="text"
          placeholder="Show title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your rant here..."
          value={rant}
          onChange={(e) => setRant(e.target.value)}
          rows={4}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Submit
        </button>
      </section>
    </div>
  );
}
