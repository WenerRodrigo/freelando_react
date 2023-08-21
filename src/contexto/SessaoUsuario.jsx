import { createContext, useContext } from "react";


const SessaoUsuarioContext = createContext({
    usuarioEstaLogado: false,
    login: () => null,
    logout: () => null,
    perfilUsuario: {}
});



export default sessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext);
}

export const SessaoUsuarioProvider = ({ children }) => {
    return (
        <SessaoUsuarioContext.Provider value={value}>
            {children}
        </SessaoUsuarioContext.Provider>
    )
}