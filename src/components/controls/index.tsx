import FontFamily from "./font-family";
import Emphasis from "./emphasis";
import Justify from "./justify";
import List from "./list";
import { Space } from "antd";
import { FC } from "react";
import Misc from "./misc";

/**
 * The component that combines all the available controls that are used to
 * run commands for editting the wysiwyg editor.
 */
const Controls: FC = () => (
  <Space>
    <FontFamily />
    <Emphasis />
    <Justify />
    <List />
    <Misc />
  </Space>
);

export default Controls;
