import api from "../services /API";
import useAuth from './useAuth';


const useRefreshToken = () => {
    // @ts-ignore
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await api.get('/refresh', {
            withCredentials: true
        });
        setAuth((prev: any) => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return{...prev, accessToken: response.data.accessToken}
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;