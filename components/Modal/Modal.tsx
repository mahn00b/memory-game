import cx from 'classnames';
import styles from './Modal.module.scss';

export interface ModalProps {
  /** Toggles the appearance of the Modal. */
  isOpen: boolean;
  /** Contents of the Modal are rendered as children */
  children?: React.ReactNode;
  /** Any custom classes that get appended to the modal's in Container. */
  containerStyles?: string;
  /** Used to target the Modal in testing environments. */
  dataTestid?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  containerStyles = '',
  dataTestid
}: ModalProps) => {
  return (
    <div className={cx(styles.Modal, { [styles.isOpen]: isOpen }, containerStyles)} data-testid={dataTestid}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

Modal.displayName = 'Modal';

export default Modal;
