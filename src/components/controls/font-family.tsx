import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { FC } from "react";
import command from "../../utils/command";

/**
 * A Component that contains the controls for changing the font family of the selected text.
 */
const FontFamily: FC = () => (
  <ButtonGroup>
    <Button onClick={command.segoe}>
      <span className="segoe">Segoe UI</span>
    </Button>
    <Button onClick={command.arial}>
      <span className="arial">Arial</span>
    </Button>
    <Button onClick={command.times}>
      <span className="timesNewRoman">Times New Roman</span>
    </Button>
  </ButtonGroup>
);

export default FontFamily;
