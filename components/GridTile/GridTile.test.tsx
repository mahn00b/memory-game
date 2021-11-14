import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GridTile, { GridTileProps } from './GridTile';


const TEST_TEXT = 'TEXT';

const props: GridTileProps = {
  ariaLabel: 'test label',
  disabled: false,
  onClick: jest.fn(),
  state: 'active',
  testId: 'TEST_ID',
}


describe('GridTile', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should be defined.', () => {
    expect(GridTile).toBeDefined();
  });

  it('should render children', () => {
    const { getByText } = render(
      <GridTile
        {...props}
      >
        {TEST_TEXT}
      </GridTile>
    )

    expect(getByText(TEST_TEXT)).toBeInTheDocument();
  })

  it('should render the ariaLabel property into the button\'s aria-label attribute', () => {
    const { getByTestId } = render(
      <GridTile
        {...props}
      >
        {TEST_TEXT}
      </GridTile>);

    const tile = getByTestId(props.testId as string);

    expect(tile).toHaveAttribute('aria-label');
    expect(tile.getAttribute('aria-label')).toBe(props.ariaLabel);
  })

  test.each`
    tile  | className | state
    ${{...props, state: undefined} as GridTileProps} | ${'hidden'} | ${'Default'}
    ${{...props, state: 'active'} as GridTileProps} | ${'active'} | ${'Active'}
    ${{...props, state: 'inactive'} as GridTileProps} | ${'inactive'} | ${'Inactive'}
    ${{...props, state: 'hidden'} as GridTileProps} | ${'hidden'} | ${'Hidden'}
  `('should have $className in the className string when tile is an $state state', ({ tile, className }) => {
    const { getByTestId } = render(
      <GridTile
        {...tile}
      >
        {TEST_TEXT}
      </GridTile>);

      expect(getByTestId(tile.testId)).toHaveClass(className);
  });

  it('should call onClick callback function when gridTile is clicked', () => {
    const copy = { ...props };
    const { getByTestId } = render(
      <GridTile
        {...copy}
      >
        {TEST_TEXT}
      </GridTile>);


    userEvent.click(getByTestId(copy.testId as string))
    expect(copy.onClick).toBeCalled();
  })

  it('should not call onClick callback function when gridTile is clicked if disabled is true', () => {
    const copy = { ...props, disabled: true };
    const { getByTestId } = render(
      <GridTile
        {...copy}
      >
        {TEST_TEXT}
      </GridTile>);


    userEvent.click(getByTestId(copy.testId as string))
    expect(copy.onClick).not.toBeCalled();
  })
})

