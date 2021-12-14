import React from 'react';
import styles from './Text.module.scss';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'p'

export interface TextProps {
  /** Determines the size style of text */
  level: HeadingLevel;
  /** The text to be rendered */
  children: React.ReactNode;
  /** Used to target the Text component in testing environments. */
  dataTestid?: string
}

const Text: React.FC<TextProps> = ({
  children,
  level
}) => (
  React.createElement(level, {
    className: styles[level]
  }, [children])
)

export default Text;
