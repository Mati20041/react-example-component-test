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

    if (loading) {
        return <div data-testid="spinner">Spinner</div>
    }

    return (<div>
        {user
            ? <p>User: <span>{user.username}</span></p>
            : <p>No User</p>}
        <button onClick={onFetch}>Fetch</button>
    </div>);
};
