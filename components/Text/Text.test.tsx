import { render } from '@testing-library/react'
import Text from './Text';

describe('Typography', () => {
  it('should be defined.', () => {
    expect(Text).toBeDefined();
  })

  test.each`
    heading | level
    ${'Heading 1'} | ${'h1'}
    ${'Heading 2'} | ${'h2'}
    ${'Heading 3'} | ${'h3'}
    ${'Body'} | ${'p'}
  `('should apply $heading text styles by passing $level into the level prop.', ({ level }) => {
    const { getByText } = render(
      <Text
        level={level}
      >
        TEST
      </Text>);

      expect(getByText('TEST')).toHaveClass(level);
  });
})
