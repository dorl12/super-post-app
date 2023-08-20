import { RentalsChip } from ".";

export default {
  title: "Components/RentalsChip",
  component: RentalsChip,
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
