import { createContext, Dispatch, SetStateAction } from 'react'

interface GameContext {
  settings?: GameConfig
  setSettings?: Dispatch<SetStateAction<GameConfig | undefined>>
}

export default createContext<GameContext>({})
