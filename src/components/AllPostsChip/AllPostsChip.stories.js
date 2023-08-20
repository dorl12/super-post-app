import { AllPostsChip } from ".";

export default {
  title: "Components/AllPostsChip",
  component: AllPostsChip,
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
