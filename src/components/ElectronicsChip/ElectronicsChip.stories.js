import { ElectronicsChip } from ".";

export default {
  title: "Components/ElectronicsChip",
  component: ElectronicsChip,
  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    className: {},
  },
};
