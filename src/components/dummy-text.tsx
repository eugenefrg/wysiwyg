import { FC } from "react";

/**
 * This is the initial text contained by the main ContentEditable Div.
 */
const DummyText: FC = () => (
  <>
    <div>
      Hello, This is my attempt at a WYSIWYG Editor using the <b>deprecated </b>
      <q>document.executeCommand()</q> method.
    </div>
    <div>
      This has only been tested on{" "}
      <u>
        <b>
          <i>Firefox 104</i>
        </b>
      </u>{" "}
      and{" "}
      <u>
        <b>
          <i>Chrome 105</i>
        </b>
      </u>{" "}
      on Windows 10 and it is <s>super perfect</s> not without flaws
      <u>
        <b>
          <i>
            <br />
          </i>
        </b>
      </u>
    </div>
    <div style={{ textAlign: "center" }}>
      Feel free to play around, although I am still not without bugs.
    </div>
    <div style={{ textAlign: "center" }}>
      I appreciate your time looking at how this thing works.
    </div>
    <div>
      <br />
    </div>
    <blockquote>
      <div>
        {`// Here is an example of how the dummyText is inserted to the app.`}
      </div>
      <div>{`//`}</div>
      <div>import "antd/dist/antd.css";</div>
      <div>{`import "./App.scss";`}</div>
      <div>{`import { Layout } from "antd";`}</div>
      <div>{`import Controls from "./components/controls";`}</div>
      <div>{`import DummyText from "./components/dummy-text";`}</div>
      <div>
        &nbsp;
        <br />
      </div>
      <div>{`function App() {`}</div>
      <div>{`  return (`}</div>
      <div>{`    <Layout className="App">`}</div>
      <div>{`      <Layout.Header>`}</div>
      <div>{`        <Controls />`}</div>
      <div>{`      </Layout.Header>`}</div>
      <div>{`      <Layout.Content>`}</div>
      <div>{`        <div className="edit-space" contentEditable>`}</div>
      <div>{`          <DummyText />`}</div>
      <div>{`        </div>`}</div>
      <div>{`      </Layout.Content>`}</div>
      <div>{`    </Layout>`}</div>
      <div>{`  );`}</div>
      <div>{`}`}</div>
      <div>
        &nbsp;
        <br />
      </div>
      <div>{`export default App;`}</div>
    </blockquote>
    <div>
      <br />
    </div>
    <div style={{ textAlign: "right" }}>Some more text for Demonstration.</div>
    <div style={{ textAlign: "center" }}>
      - Made by{" "}
      <span contentEditable="false">
        <a href="https://github.com/eugenefrg" target="_blank" rel="noreferrer">
          Eugene R.
        </a>
      </span>
    </div>
    <div style={{ textAlign: "center" }}>
      and you can view my Portfolio -&gt;{" "}
      <span contentEditable={false}>
        <a
          href="https://eugenefrancisr.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          here{" "}
        </a>
      </span>
      &lt;-
    </div>
  </>
);

export default DummyText;
