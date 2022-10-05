import {FunctionComponent, useState} from 'react'
import {apiCal, UserDto} from "./userApi";

export const Async: FunctionComponent = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<UserDto>()

    const onFetch = () => {
        setLoading(true)
        return apiCal()
            .then(setUser)
            .finally(() => setLoading(false));
    }

    if (loading) {
        return <div data-testid="spinner">Spinner</div>
    }

    return (<div>
        <p>{user
            ? `User: ${user.username}`
            : 'No User'}</p>
        <button onClick={onFetch}>Fetch</button>
    </div>);
};
