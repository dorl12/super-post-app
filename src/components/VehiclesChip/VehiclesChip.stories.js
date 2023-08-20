import { VehiclesChip } from ".";

export default {
  title: "Components/VehiclesChip",
  component: VehiclesChip,
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
