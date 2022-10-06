import {BigSubComponent} from "../BigSubComponent";
import {render, screen} from "@testing-library/react";

jest.mock("../SubComponent", () => ({
    SubComponent: (props: { projectId: number }) => <div data-testid="sub-component">{props.projectId}</div>
}))

describe('BigSubComponent', () => {
    it('should be ok', () => {
        // Arrange & Act
        const {getSubComponent} = renderBigSubComponent()
        const subComponent = getSubComponent();

        // Assert
        expect(subComponent).toHaveTextContent('5')
    });
});

const renderBigSubComponent = () => {
    render(<BigSubComponent/>)

    return {
        getSubComponent: () => screen.getByTestId('sub-component')
    }
}
