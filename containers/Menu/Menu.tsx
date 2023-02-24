import { useState } from 'react';
import { Button, Modal } from '../../components'
import styles from './Menu.module.scss';

export interface MenuProps {
  /** Triggers this callback when the user clicks restart. */
  onRestartGame?: () => void;
  /** Triggers this callback when the user clicks set up new game. */
  onRequestNewSetup?: () => void;
  /** Triggers this callback when the modal is toggled. */
  onToggleMenu?: (isOpen: boolean) => void;
  /** An ID set to reach the component wrapper. */
  dataTestid?: string;
  /** An ID set to reach the Modal during testing */
  modalTestid?: string;
}

function Menu ({
  onRequestNewSetup = () => {},
  onRestartGame = () => {},
  onToggleMenu = () => {},
  dataTestid,
  modalTestid
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  const handleMenuToggle = () => {
    toggleModal();
    onToggleMenu(!isOpen);
  }

  return (
    <div className={styles.Menu} data-testid={dataTestid}>
      <Button size="medium" theme="primary" onClick={handleMenuToggle}>
        menu
      </Button>
      <Modal isOpen={isOpen} dataTestid={modalTestid}>
        <div className={styles.wrapper}>
          <Button className={styles.button} size="medium" theme="primary" onClick={onRestartGame}>
            restart
          </Button>
          <Button className={styles.button} size="medium" theme="secondary" onClick={onRequestNewSetup}>
            new game
          </Button>
          <Button className={styles.button} size="medium" theme="secondary" onClick={handleMenuToggle}>
            resume
          </Button>
        </div>
      </Modal>
    </div>
  )
}

Menu.displayName = 'Menu'

export default Menu;
