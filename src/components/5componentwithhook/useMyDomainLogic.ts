import {useState} from "react";

const userFixture = {
    username: 'Mati'
}

export const useMyDomainLogic = () => {
    const [loading, setLoading] = useState(true)
    return {loading, user: userFixture}
}
