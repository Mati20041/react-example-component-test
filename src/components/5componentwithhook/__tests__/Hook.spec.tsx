import {Hook} from "../Hook";
import {render, screen} from "@testing-library/react";
import {useMyDomainLogic} from "../useMyDomainLogic";

jest.mock('../useMyDomainLogic', () => ({useMyDomainLogic: jest.fn()}))

describe('Hook', () => {

    beforeEach(() => {
        jest.resetAllMocks()
    });

    it('should render ok', () => {
        // Arrange & Act
        (useMyDomainLogic as jest.Mock).mockReturnValue({loading: true})
        const {querySpinner, queryUser} = renderHook()
        const spinner = querySpinner();
        const user = queryUser();

        // Assert
        expect(spinner).toBeInTheDocument()
        expect(user).not.toBeInTheDocument()
    });

    it('should show spinner on click', () => {
        // Arrange & Act
        (useMyDomainLogic as jest.Mock).mockReturnValue({loading: false, user: {username: 'Test'}})
        const {querySpinner, queryUser} = renderHook()
        const spinner = querySpinner();
        const user = queryUser();

        // Assert
        expect(spinner).not.toBeInTheDocument()
        expect(user).toHaveTextContent('User: Test')
    });
});

const renderHook = () => {
    render(<Hook/>)

    return {
        querySpinner: () => screen.queryByTestId('spinner'),
        queryUser: () => screen.queryByTestId('username')
    }
}
