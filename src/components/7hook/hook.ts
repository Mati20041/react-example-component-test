import {useState} from "react";

export const useMyHook = () => {
    const [state, setState] = useState(1)
    return {myAge: state, increment: () => setState(curr => curr + 1)}
}
