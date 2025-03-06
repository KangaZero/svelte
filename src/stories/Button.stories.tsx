import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Check } from "lucide-react";
import React from "react";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    animation: {
      control: "select",
      options: ["none", "pulse", "bounce", "spin"],
    },
    logoLeft: { control: false },
    logoRight: { control: false },
    logoClassName: { control: "text" },
    asChild: { control: "boolean" },
    text: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    onClick: fn(),
    onHover: fn(),
    onFocus: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button variants
export const Default: Story = {
  args: {
    text: "Default Button",
  },
};

export const Primary: Story = {
    args: {
      variant: "default",
      text: "Primary Button",
    },
  };
  
  export const Secondary: Story = {
    args: {
      variant: "secondary",
      text: "Secondary Button",
    },
  };
  
  export const Destructive: Story = {
    args: {
      variant: "destructive",
      text: "Destructive Button",
    },
  };
  
  export const Outline: Story = {
    args: {
      variant: "outline",
      text: "Outline Button",
    },
  };
  
  export const Ghost: Story = {
    args: {
      variant: "ghost",
      text: "Ghost Button",
    },
  };
  
  export const Link: Story = {
    args: {
      variant: "link",
      text: "Link Button",
    },
  };
  
  export const Small: Story = {
    args: {
      size: "sm",
      text: "Small Button",
    },
  };
  
  export const Large: Story = {
    args: {
      size: "lg",
      text: "Large Button",
    },
  };
  

export const WithLeftIcon: Story = {
  render: (args) => <Button {...args} text="Search" logoLeft={<Search />} />,
};

export const WithRightIcon: Story = {
  render: (args) => <Button {...args} text="Next" logoRight={<ArrowRight />} />,
};

export const WithBothIcons: Story = {
  render: (args) => (
    <Button
      {...args}
      text="Confirmed"
      logoLeft={<Check />}
      logoRight={<ArrowRight />}
    />
  ),
};

export const WithAnimation: Story = {
  render: (args) => (
    <Button
      {...args}
      text="Loading..."
      logoLeft={<Search />}
      animation="pulse"
    />
  ),
};

export const Disabled: Story = {
  args: {
    text: "Disabled Button",
    disabled: true,
  },
};

export const IconOnly: Story = {
  render: (args) => (
    <Button {...args} size="icon" logoLeft={<Search />} aria-label="Search" />
  ),
};
