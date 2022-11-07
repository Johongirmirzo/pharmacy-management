import {DecodedToken} from "../types/types";
import decodeToken from "./decodeToken";
import generateToken from "./generateToken";

const reissueAccessToken = (token: string)=>{
    const {decoded} = decodeToken(token) as DecodedToken;
    if(!decoded){
        return false
    }
    const accessToken = generateToken({id: decoded.id, username: decoded.username, isAdmin: decoded.isAdmin, expirationTime: `${process.env.ACCESS_TOKEN_EXPIRATION_TIME}`})
    return accessToken;
}

export default reissueAccessToken;