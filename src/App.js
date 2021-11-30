import React from "react";
import Entry from "./components/Entry";
import emojipedia from "./emojipedia";

function createEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      name={emoji.name}
      meaning={emoji.meaning}
      emoji={emoji.emoji}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;

