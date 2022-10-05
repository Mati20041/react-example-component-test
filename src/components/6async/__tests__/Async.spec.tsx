import {Async} from "../Async";
import {render, screen} from "@testing-library/react";


describe('Async', function () {
    it('should be ok', function () {
        expect(2).toEqual(2)
        render(<Async/>)

        screen.getByText('Spinner')
    });
});
