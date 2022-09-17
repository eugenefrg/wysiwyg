import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { FC } from "react";
import command from "../../utils/command";

/**
 * The component that allows modifying the alignment of the selected line.
 */
const Justify: FC = () => (
  <ButtonGroup>
    <Button onClick={command.justifyLeft}>
      <AlignLeftOutlined />
    </Button>
    <Button onClick={command.justifyCenter}>
      <AlignCenterOutlined />
    </Button>
    <Button onClick={command.justifyRight}>
      <AlignRightOutlined />
    </Button>
  </ButtonGroup>
);

export default Justify;
