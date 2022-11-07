export interface Token {
    id: string;
    username: string;
    isAdmin: boolean;
    iat: number;
    exp: number;
}

export interface DecodedToken {
    valid: boolean;
    expired: boolean;
    decoded: Token;
}