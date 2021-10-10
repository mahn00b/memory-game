/** Because every project needs a button. */

export interface ButtonProps {
  /** Contents that appear in the button */
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} >
      {children}
    </button>
  )
}

Button.displayName = 'Button';

export default Button;
