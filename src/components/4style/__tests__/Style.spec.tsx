import {Style} from "../Style";
import {render, screen} from "@testing-library/react";


describe('Style', () => {
    it('should render ok', () => {
        // Arrange & Act
        const {getContainer} = renderStyle()
        const container = getContainer();

        // Assert
        expect(container).toHaveStyle({'background-color': 'gray'})
    });

    it('should change color', () => {
        // Arrange & Act
        const {getContainer} = renderStyle(true)
        const container = getContainer();

        // Assert
        expect(container).toHaveStyle({'background-color': 'white'})
    });
});

const renderStyle = (selected?: boolean) => {
    render(<Style isSelected={selected}/>)

    return {
        getContainer: () => screen.getByTestId('frame'),
    }
}
