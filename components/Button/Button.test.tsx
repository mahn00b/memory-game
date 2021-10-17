import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {

    it('should be defined', () => {
        expect(Button).toBeDefined();
    });

    it('should render a button.', () => {
        const { getByText } = render(<Button>TEST</Button>);

        expect(getByText('TEST')).toBeInTheDocument();
    });

    it('should render the correct theme based on the respective prop', () => {
        const { getByText, rerender } =  render(<Button theme="menu" >TEST</Button>);

        expect(getByText('TEST')).toHaveClass('menu')

        rerender(<Button theme="primary" >TEST</Button>)
        expect(getByText('TEST')).toHaveClass('primary')

        rerender(<Button theme="secondary" >TEST</Button>)
        expect(getByText('TEST')).toHaveClass('secondary')
    });
})