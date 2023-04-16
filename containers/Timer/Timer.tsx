import { useState } from 'react';
import { formatTime } from '../../utils';
import PlayerCard from '../../components/PlayerCard';
import useInterval from '../../hooks/useInterval';

export interface TimerProps {
  /** Start time of the timer in seconds.
   * @default 0
  */
  startTime?: number;
  /** Toggle this boolean to pause/resume the timer.
   * @default false
   */
  pause?: boolean
}

const Timer = ({
  startTime = 0,
  pause = false
}: TimerProps) => {
  const [time, setTime] = useState(startTime);

  useInterval(() => {
    if (!pause)
      setTime(time + 1)

  }, 1000)

  const formattedTime = formatTime(time);

  return (
    <PlayerCard
      label="Time"
      info={formattedTime}
      ariaLabel={`The amount of time that has elapsed is ${formattedTime}`}
    />
  )
}

export default Timer;
