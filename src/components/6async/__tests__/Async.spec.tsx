import {Async} from "../Async";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe('Async', function () {
    it('should render ok', function () {
        // Arrange & Act
        const {querySpinner, getUser, getFetchButton} = renderAsync()
        const spinner = querySpinner();
        const user = getUser();
        const fetch = getFetchButton();


        // Assert
        expect(spinner).not.toBeInTheDocument()
        expect(user).toHaveTextContent('No User')
        expect(fetch).toBeInTheDocument()
    });

    it('should load user on click', async () => {
        // Arrange
        const {querySpinner, getUser, getFetchButton} = renderAsync()

        // Act
        userEvent.click(getFetchButton())
        expect(querySpinner()).toBeInTheDocument()

        // Assert
        await waitFor(() => {
            expect(getUser()).toHaveTextContent('User: Mati')
        })
    });
});

const renderAsync = () => {
    render(<Async/>)

    return {
        querySpinner: () => screen.queryByTestId('spinner'),
        getUser: () => screen.queryByTestId('user'),
        getFetchButton: () => screen.getByRole('button', {name: 'Fetch'})
    }
};
