import { UnorderedListOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { FC } from "react";
import command from "../../utils/command";

/**
 * The component that allows setting list types from ordered to unordered.
 */
const List: FC = () => (
  <ButtonGroup>
    <Button onClick={command.unorderedList}>
      <UnorderedListOutlined />
    </Button>
    <Button onClick={command.orderedList}>
      <OrderedListOutlined />
    </Button>
  </ButtonGroup>
);

export default List;
