const ACESS_TOKEN = 'acessToken';
const REFRESH_TOKEN = 'refreshToken';


export class ArmazenadorToken {
    static definirTokens(acessToken, refreshToken) {
        sessionStorage.setItem(ACESS_TOKEN, acessToken);
        sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
    }

    static get obterAcessToken() {
        return sessionStorage.getItem(ACESS_TOKEN);
    }

    static get obterRefreshToken() {
        return sessionStorage.getItem(REFRESH_TOKEN);
    }
}