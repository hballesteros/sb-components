import './mylabel.css';

interface MyLabelProps {
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
     * Optional all caps
     */
    allCaps?: boolean; 
}  

export const MyLabel = ({ 
    size    = 'normal',
    label   = 'My Label',
    color   = 'primary',
    fontColor,
    allCaps = false,
    ...props
}: MyLabelProps ) => {
  return (
    <span 
        className={`label ${ size } text-${ color } ${ allCaps ? 'all-caps' : '' }`}
        style={{ color: fontColor }}
        { ...props}
    >
        { label }
    </span>
  );
};
