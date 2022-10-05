import {FunctionComponent} from 'react'
import {useMyDomainLogic} from "./useMyDomainLogic";

export const Hook: FunctionComponent = () => {
    const {loading, user} = useMyDomainLogic()

    if(loading){
        return <div data-testid="spinner">Spinner</div>
    }

    return (<div>
        <p data-testid="username">User: <span>{user.username}</span></p>
    </div>);
};
