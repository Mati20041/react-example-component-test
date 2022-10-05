import {FunctionComponent, useState} from 'react'
import {apiCal, UserDto} from "./userApi";

export const Async: FunctionComponent = () => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<UserDto>()

    const onFetch = () => {
        return apiCal()
            .then(setUser)
            .finally(() => setLoading(false));
    }


    return (<div>
        {loading
            ? <div data-testid="spinner">Spinner</div>
            : <div>User: {user?.username}</div>}
        <button onClick={onFetch}>Fetch</button>
    </div>);
};
