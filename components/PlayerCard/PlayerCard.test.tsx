import { render } from '@testing-library/react';
import PlayerCard, { PlayerCardProps } from './PlayerCard';

const props: PlayerCardProps = {
  ariaLabel: 'test label',
  label: 'another test label',
  info: 'test info',
  active: false,
  testId: 'TEST_ID',
}

describe('PlayerCard', () => {
  it('should be defined', () => {
    expect(PlayerCard).toBeDefined();
  });

  it('should render the label', () => {
    const { getByText } = render(<PlayerCard {...props} />)

    expect(getByText(props.label)).toBeInTheDocument();
  });

  it('should render the info', () => {
    const { getByText } = render(<PlayerCard {...props} />)

    expect(getByText(props.info)).toBeInTheDocument();
  });

  it('should render the ariaLabel property into the parent\'s aria-label attribute', () => {
    const { getByTestId } = render(<PlayerCard {...props} />)


    const card = getByTestId(props.testId as string);

    expect(card).toHaveAttribute('aria-label');
    expect(card.getAttribute('aria-label')).toBe(props.ariaLabel);
  });

  it('should have active in the className string and the triangle should be visible when the component is active', (() => {
    const { getByTestId } = render(<PlayerCard {...props} active={true} />)

    const card = getByTestId(props.testId as string);

    expect(card).toHaveClass('active');

    expect(card.getElementsByClassName('triangle').length).toBe(1);
  }));

  it('should be tabable if the tabable prop is true', () => {
    const { getByTestId } = render(<PlayerCard {...props} tabable={true} />)

    const card = getByTestId(props.testId as string);

    expect(card.getAttribute('tabIndex')).toBe('0');
  })
})
