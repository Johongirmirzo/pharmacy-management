interface ILoginData {
    email: string;
    password: string;
    rememberMe: boolean;
}   


const getToken = ()=>{
    return JSON.parse(localStorage.getItem("pharmacist-token") || "null")
}
const setToken = (accessToken: string, refreshToken: string)=>{
    localStorage.setItem(
        "pharmacist-token",
        JSON.stringify({
          accessToken,
          refreshToken,
        })
      );
}
const removeToken = ()=>{
    localStorage.removeItem("pharmacist-token")
}

const getPharmacistLoginData = ()=>{
    return JSON.parse(
        localStorage.getItem("login-remember-pharmacist") || "{}"
      )
}

const setPharmacistLoginData = (loginData: ILoginData)=>{
    localStorage.setItem("pharmacist-login-data", JSON.stringify(loginData))
}
const removePharmacistLoginData = ()=>{
    localStorage.removeItem("pharmacist-login-data")
}

export {
    getToken,
    setToken,
    removeToken,
    getPharmacistLoginData,
    setPharmacistLoginData,
    removePharmacistLoginData
}