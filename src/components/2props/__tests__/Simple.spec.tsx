import {Simple} from "../Simple";
import {render, screen} from "@testing-library/react";

const CONTENT = 'DoCkErCoMpOsE'

describe('Simple', function () {
    it('should render ok', function () {
        // Arrange & Act
        const {getContent} = renderSimple()

        // Assert
        expect(getContent()).toHaveTextContent(CONTENT)
    });
});

const renderSimple = () => {
    render(<Simple content={CONTENT}/>)

    return {
        getContent: () => screen.getByRole('article')
    }
}
