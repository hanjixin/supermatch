// 当前环境
import Cookie from "./cookie";

export const currentEnv = process.env.FIG_ENV;

// 当前获取到的token
export const CORGITOKENENVDATA = `corgi-token-${currentEnv}-data`;

export const ACCESSTOKEN = Cookie.get(CORGITOKENENVDATA);

export const LOGINURL = function(url) {
    return {
        dev: 'https://devmps.kaikeba.com/passport/#login?scope=dd&redirect='+url,
        test: 'https://testmps.kaikeba.com/passport/#login?scope=dd&redirect='+url,
        pre: 'https://premps.kaikeba.com/passport/#login?scope=dd&redirect='+url,
        prod: 'https://mps.kaikeba.com/passport/#login?scope=dd&redirect='+url
    }[currentEnv];
}
