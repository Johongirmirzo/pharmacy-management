import jwt from "jsonwebtoken";

const decodeToken = (token: string)=>{
    try {
        const decoded = jwt.verify(token, `${process.env.ACCESS_TOKEN_KEY}`);
        return {valid: true, expired: false, decoded}
    }catch(err: any){
        return {valid: false, expired: err.message === "jwt expired", decoded: null}
    }
}
export default decodeToken