import {useMyHook} from "../hook";
import {act, renderHook} from "@testing-library/react";


describe('useMyHook', () => {
    it('should be ok', () => {
        // Arrange & Act
        const {result} = renderHook(() => useMyHook())

        // Assert
        expect(result.current.myAge).toEqual(1)

    });

    it('should increment', () => {
        // Arrange
        const {result} = renderHook(() => useMyHook())

        // Act
        act(() => {
            result.current.increment()
        })

        // Assert
        expect(result.current.myAge).toEqual(2)
    });
});
