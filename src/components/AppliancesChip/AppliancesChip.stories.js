import { AppliancesChip } from ".";

export default {
  title: "Components/AppliancesChip",
  component: AppliancesChip,
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
