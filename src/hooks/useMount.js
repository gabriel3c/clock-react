import {useState, useEffect} from 'react'

function useMount(){
    const [isMount, setIsMount] = useState (false)

    useEffect(() =>{
        if(!isMount) setIsMount(true)
        // eslint-disable-next-line
    }, [])

    return isMount
}

export default useMount