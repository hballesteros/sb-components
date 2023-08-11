import { Meta, StoryObj } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel';


const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['normal', 'h1', 'h2', 'h3'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'tertiary'],
            },
        },
        fontColor: { control: 'color' },
    },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        size: 'normal',
        allCaps: false,
    },
};

export const AllCaps: Story = {
    args: {
        size: 'normal',
        allCaps: true,
    },   
};

export const Secondary: Story = {
    args: {
        size: 'normal',
        color: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        size: 'normal',
        color: 'tertiary',
    },
};

export const CustomFontColor: Story = {
    args: {
        size: 'h1',
        fontColor: '#5517ac',
    },
};
