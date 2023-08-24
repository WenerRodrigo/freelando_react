import { createContext, useContext } from "react";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";
import http from "../http";


const SessaoUsuarioContext = createContext({
    usuarioEstaLogado: false,
    login: (email, senha) => null,
    logout: () => null,
    perfilUsuario: {}
});



export const useSessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext);
}

export const SessaoUsuarioProvider = ({ children }) => {

    const login = (email, senha) => {
        http.post('auth/login', {
            email,
            senha
        })
            .then(resposta => {
                ArmazenadorToken.definirTokens(
                    resposta.data.acess_token,
                    resposta.data.refresh_token
                )
            })
            .catch(erro => {
                console.error(erro)
            })
    }

    const value = {
        login,
    }


    return (
        <SessaoUsuarioContext.Provider value={value}>
            {children}
        </SessaoUsuarioContext.Provider>
    )
}