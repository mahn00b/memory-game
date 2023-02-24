import { useContext } from "react";
import { Text } from "../../components";
import Settings from "../../containers/Settings";
import GameContext from "../../context/game/GameContext";
import styles from './SettingsPage.module.scss';

function SettingsPage() {
  const { setSettings } = useContext(GameContext);

  return (
    <div className={styles.SettingsPage}>
      <div className={styles.title}>
        <Text level="h1">memory</Text>
      </div>
      <Settings open={true} onSelectSettings={setSettings} />
    </div>
  )
}

SettingsPage.displayName = 'SettingsPage'

export default SettingsPage;
