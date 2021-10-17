import cx from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Contents that appear in the button */
  children: React.ReactNode;
  /** Button color scheme. */
  theme?: 'menu' | 'primary' | 'secondary';
  /** Toggles the active state */
  active?: boolean
  /** Adjusts the size of the button */
  size?: 'small' | 'medium' | 'large'
}

const Button: React.FC<ButtonProps> = ({
  active = false,
  children,
  size = 'small',
  theme = 'menu',
  ...rest
}: ButtonProps) => {

  const className = cx([
    styles.Button,
    styles[theme],
    styles[size],
    {
      [styles.active]: active
    }
  ])


  return (
    <button className={className} {...rest} >
      {children}
    </button>
  )
}

Button.displayName = 'Button';

export default Button;
