import { StoryObj } from '@storybook/react';
import { MyLabelProps } from '../../components/MyLabel';
declare const meta: {
    title: string;
    component: ({ size, label, color, fontColor, backgroundColor, allCaps, ...props }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
        color: {
            control: {
                type: string;
                options: string[];
            };
        };
        fontColor: {
            control: string;
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const CustomFontColor: Story;
export declare const CustomBackgroundColor: Story;
