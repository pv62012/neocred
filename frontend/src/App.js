import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import EditorArea from "./components/EditorArea";
import Preview from "./components/Preview";

function App() {
  const [markdown, setMarkdown] = useState("");

  return (
    <div
    className="mainContainer"
    >
      {/* heading  */}
      <h1>Real-time Markdown Editor. </h1>

      {/* markdown editor and preview section  */}
      <div style={{ display: "flex", width: "100%", margin: "20px 0", justifyContent: 'space-between' }}>
        {/* markdown editor  */}
        <EditorArea markdown={markdown} setMarkdown={setMarkdown} />

        {/* markdown preview  */}
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
