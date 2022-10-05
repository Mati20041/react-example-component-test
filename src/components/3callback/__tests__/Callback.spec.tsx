import {Callback} from "../Callback";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


const callback = jest.fn();

describe('Callback', function () {

    beforeEach(() => {
        jest.resetAllMocks()
    });

    it('should render ok', function () {
        // Arrange & Act
        const {getContent, getButton} = renderCallback('content')
        const button = getButton();
        const content = getContent();

        // Assert
        expect(button).toBeInTheDocument()
        expect(content).toHaveTextContent('content')
    });

    it.each([
        'content a',
        'content b'
    ])('should display content from prop', (content) => {
        // Arrange & Act
        const {getContent} = renderCallback(content)
        const contentComponent = getContent();

        // Assert
        expect(contentComponent).toHaveTextContent(content)
    });

    it.each([
        'content a',
        'content b'
    ])('should return content on click', (content) => {
        // Arrange
        const {getButton} = renderCallback(content)

        // Act
        userEvent.click(getButton())

        // Assert
        expect(callback).toHaveBeenCalledWith(content)
    });
});

const renderCallback = (content: string) => {
    render(<Callback content={content} callback={callback}/>)

    return {
        getContent: () => screen.getByRole('article'),
        getButton: () => screen.getByRole('button', {name: 'Click me!'})
    }
}
