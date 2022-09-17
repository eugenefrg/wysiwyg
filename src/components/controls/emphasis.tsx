import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { FC } from "react";
import command from "../../utils/command";

/**
 * A Component that contains the controls for text emphasis.
 */
const Emphasis: FC = () => (
  <ButtonGroup>
    <Button onClick={command.bold}>
      <BoldOutlined />
    </Button>
    <Button onClick={command.italic}>
      <ItalicOutlined />
    </Button>
    <Button onClick={command.underline}>
      <UnderlineOutlined />
    </Button>
    <Button onClick={command.strikethrough}>
      <StrikethroughOutlined />
    </Button>
  </ButtonGroup>
);

export default Emphasis;
