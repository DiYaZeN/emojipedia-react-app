import React from "react";
import "./App.css";
import Entry from "./components/Entry";
import emojipedia from "./emojipedia";

function createEntry(emojiTerm: {
  id: React.Key | null | undefined;
  emoji:
    | string
    | number
    | boolean
    | React.ReactPortal
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | null
    | undefined;
  name:
    | string
    | number
    | boolean
    | React.ReactPortal
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | null
    | undefined;
  meaning:
    | string
    | number
    | boolean
    | React.ReactPortal
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | null
    | undefined;
}) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
