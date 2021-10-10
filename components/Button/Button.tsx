import styles from './Button.module.scss';

export interface ButtonProps {
  /** Contents that appear in the button */
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={styles.Button} {...rest} >
      {children}
    </button>
  )
}

Button.displayName = 'Button';

export default Button;
