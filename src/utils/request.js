import axios from 'axios';
import { assert } from '../utils';
import { HTTP_STATUS } from '../consts/statusCode';
import { message } from 'antd';
import { apiBaseUrl } from '../consts/env';
import {ACCESSTOKEN, CORGITOKENENVDATA} from "./env";
import Cookie from "./cookie";

axios.defaults.withCredentials = false;
axios.defaults.timeout = 50000;
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.defaults.baseURL = apiBaseUrl;

// 添加当前的appid
axios.defaults.headers.common.appId = 'null'
axios.defaults.headers.common.tenantId = '6XWFVymtaB68REyRBuf' //KMOS_TENANT_ID
// 中间件 拦截请求-
axios.interceptors.request.use(
  config => {
      if (ACCESSTOKEN) {
        config.headers.Authorization = `Bearer ${ACCESSTOKEN}`;
      }
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (!err.response) {
      return;
    }
    const res = err.response;
    if (res.status === HTTP_STATUS.AUTHENTICATE) {
      logout();
      return Promise.reject(err);
    } else {
      message.error(`${res.data.message}`);
      return Promise.reject(err);
    }
  },
);

function logout() {
  Cookie.delete(CORGITOKENENVDATA, '/', '.kaikeba.com')
  window.location.href = '/login';
}

const exceptionHandling = data => {
  if (!data) {
    return false;
  }

  if (
    data.status === HTTP_STATUS.SUCCESS ||
    data.status === HTTP_STATUS.POST_SUCCESS ||
    data.status === HTTP_STATUS.NOT_MODIFIED
  ) {
    // if (!data.data.data) {
    //   // assert(false, 'api data is empty')
    //   return false
    // }
    return data;
  } else {
    assert(false, data.statusText);
  }
  return false;
};

/**
 * get请求 对象模式
 * @param {*} props 请求args集合
 * @param {string} props.url 请求地址
 * @param {object} props.params 请求参数
 * @param {object} props.headers 请求头
 * @param {string} props.responseType 返回数据类型
 * @returns {Promise} resolve 返回后端原始返回数据 {code: number, data: any, msg: 'string'}
 */
const getObject = ({ url, params, headers, responseType }) => {
  if (!url) {
    return Promise.reject(new Error('url is not found in get props.'));
  }

  params = params || {};
  headers = headers || { 'Content-Type': 'application/json' };
  responseType = responseType || 'json';

  const config = {
    method: 'get',
    url,
    params,
    headers,
    responseType,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(response => {
        resolve(exceptionHandling(response, true));
      })
      .catch(error => {
        reject(error);
      });
  });
};

/**
 * get方式 散列模式
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} headers 请求头
 * @param {string} responseType 返回数据类型
 */
const getHash = (
  url,
  params = {},
  headers = {
    'Content-Type': 'application/json',
  },
  responseType = 'json',
) => {
  const config = {
    method: 'get',
    url,
    params,
    headers,
    responseType,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then(response => {
        resolve(exceptionHandling(response));
      })
      .catch(error => {
        reject(error);
      });
  });
};

/**
 * request.get 请求方法
 * @param {string | object} UrlOrObj URL 或者 get请求参数的对象
 * @param  {...any} props 其他参数
 */
const get = (UrlOrObj, ...props) => {
  let result;
  switch (toString.call(UrlOrObj)) {
    case '[object String]':
      result = getHash.call(null, UrlOrObj, ...props);
      break;
    case '[object Object]':
      result = getObject.call(
        null,
        {
          ...UrlOrObj,
        },
        ...props,
      );
      break;
    default:
      result = Promise.reject(
        new TypeError(
          'request.get params type error. First type is not string or object in params.',
        ),
      );
  }

  return result;
};

/**
 * post
 * @param url
 * @param data
 * @returns {Promise}
 */

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        const res = exceptionHandling(response);
        // const res=response;
        if (res) {
          resolve(response.data);
        } else {
          reject(res.error);
        }
      },
      err => {
        reject(err);
      },
    );
  });
};

/**
 * put
 * @param url
 * @param data
 * @returns {Promise}
 */

const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        const res = exceptionHandling(response);
        if (res) {
          resolve(response.data.data);
        } else {
          reject(res.error);
        }
      },
      err => {
        reject(err);
      },
    );
  });
};

export default {
  get,
  post,
  put,
};
