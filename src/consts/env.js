// 判断当前是哪个环境
export const currentEnv = process.env.FIG_ENV;
const ctext = currentEnv !== 'prod' ? `开课吧${currentEnv}` : '开课吧';

// 不要删除，用来识别当前项目环境
console.log(
  `\n %c ${ctext} %c https://kaikeba.com \n`,
  'color: #fff; background: #03a8e8; padding:5px 0; font-size:12px;font-weight: bold;',
  'background: #03a8e8; padding:5px 0; font-size:12px;',
);

export const isDevEnv = currentEnv === 'dev';
export const isPreEnv = currentEnv === 'pre';
export const isTestEnv = currentEnv === 'test';
export const isProdEnv = currentEnv === 'prod';

const apiPrefix = {
  dev: 'test',
  test: 'test',
  pre: 'pre',
  prod: '',
};
export const SENTRY_DSN = `https://b230aa0f62684661963e5cc267184dcd@am.kaikeba.com/48`;
export const getApiPrefix = apiPrefix[currentEnv];
export const apiBaseUrl = `https://open${getApiPrefix}.kaikeba.com/`;
export const API = {
  consoleBaseUrl: `https://console${getApiPrefix}.kaikeba.com`,
  // kuickBaseUrl: `https://deal-api-${getKuickApiPrefix}.kuick.cn`,
  // mos2BaseUrl: `https://mos2${getmos2ApiPrefix}.kaikeba.com/api/v1.7`,
  QINIU_IMG_HOST: `https://img.kaikeba.com/`,
  // UPLOAD: `https://${getQiniuPrefix}mmsapi.kaikeba.com/`,
  // robot: `https://deal-admin-${getKuickApiPrefix}.kuick.cn`,
};
