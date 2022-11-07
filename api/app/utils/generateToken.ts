import jwt from "jsonwebtoken";

interface IToken {
    id: string;
    username: string;
    isAdmin: boolean;
    expirationTime: string;
}

const generateToken = ({id, username, isAdmin, expirationTime}: IToken) => {
    return jwt.sign({id, username, isAdmin}, `${process.env.ACCESS_TOKEN_KEY}`, {expiresIn: expirationTime});
}

export default generateToken;