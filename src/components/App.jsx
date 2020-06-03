import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia";

function createEmoji(emojis) {
  return <Entry
    key={emojis.id}
    emoji={emojis.emoji}
    name={emojis.name}
    meaning={emojis.meaning}
  />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
