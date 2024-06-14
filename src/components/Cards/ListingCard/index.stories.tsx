import type { Meta, StoryObj } from "@storybook/react";
import { ListingCard } from ".";

const meta: Meta<typeof ListingCard> = {
  title: "ListingCard",
  component: ListingCard,
};

export default meta;

type Story = StoryObj<typeof ListingCard>;

export const Default: Story = {
  args: {
    image: "/assets/images/house1.png",
    bedrooms: 10,
    address: "Frognal, Hampstead, London NW3",
    price: 1000000,
    status: "active",
  },
};
