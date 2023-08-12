import './mylabel.css';
export interface MyLabelProps {
    /**
     * How large should the label be?
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Label contents
     */
    label?: string;
    /**
     * Optional color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Optional font color
     */
    fontColor?: string;
    /**
     * Optional background color
     */
    backgroundColor?: string;
    /**
     * Optional all caps
     */
    allCaps?: boolean;
}
export declare const MyLabel: ({ size, label, color, fontColor, backgroundColor, allCaps, ...props }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
