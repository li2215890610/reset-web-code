export enum ProxyEnv {
  development = 'development',
  test = 'test',
  production = 'production',
}

const BaseUrl = 'https://apifoxmock.com/m1/4942683-4600276-default'

export type BaseUrlMap = {
  userApi: string;
  categoryApi: string;
  articleApi: string;
};

// https://passport.jinjuxiaodian.com/api/sso/async_login

export const baseUrlMap: BaseUrlMap = {
  [ProxyEnv.development]: {
    userApi: '/userApi',
    categoryApi: '/categoryApi',
    articleApi: '/articleApi',
  },
  [ProxyEnv.test]: {
    userApi:
      `${BaseUrl}/UmiV3/user`,
    categoryApi:
      `${BaseUrl}/UmiV3/category`,
    articleApi:
      `${BaseUrl}/UmiV3/category`,
  },
  [ProxyEnv.production]: {
    userApi:
      `${BaseUrl}/UmiV3/user`,
    categoryApi:
      `${BaseUrl}/UmiV3/category`,
    articleApi:
      `${BaseUrl}/UmiV3/category`,
  },
}[(PROXY_ENV as ProxyEnv) || ProxyEnv.production];
