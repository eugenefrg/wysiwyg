import { CodeOutlined, LinkOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { FC } from "react";
import command from "../../utils/command";

/**
 * The component that holds the miscellaneous controls.
 */
const Misc: FC = () => (
  <ButtonGroup>
    <Button onClick={command.quote}>""</Button>
    <Button onClick={command.code}>
      <CodeOutlined />
    </Button>
    <Button onClick={command.link}>
      <LinkOutlined />
    </Button>
  </ButtonGroup>
);

export default Misc;
