import "antd/dist/antd.min.css";
import "./App.scss";
import { Col, Layout, Row, Typography } from "antd";
import Controls from "./components/controls";
import DummyText from "./components/dummy-text";

function App() {
  return (
    <Layout className="App">
      <Layout.Header>
        <Row justify="space-between">
          <Col>
            <Typography.Title>Eugene's Wysiwyg Editor</Typography.Title>
          </Col>
          <Col>
            <Controls />
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content>
        <div className="edit-space" contentEditable spellCheck={false}>
          <DummyText />
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default App;
