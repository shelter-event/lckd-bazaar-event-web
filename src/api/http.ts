import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { NavigateFunction } from "react-router-dom";

const APPLICATION_JSON = "application/json"
const CHARSET = "charset=utf-8"

enum StatusCode {
  BadRequest = 400,
  InternalServerError = 500,
}

const host = process.env.REACT_APP_HOST as string
const port = Number(process.env.REACT_APP_PORT)

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: APPLICATION_JSON,
  "Content-Type": `${APPLICATION_JSON}; ${CHARSET}`,
}

class Http {
  private instance: AxiosInstance | null = null
  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }

  private navigate: NavigateFunction | undefined
  setNavigate(navigate: NavigateFunction) {
    this.navigate = navigate
  }

  initHttp() {
    const http = axios.create({
      headers,
      baseURL: process.env.REACT_APP_PROXY_HOST,
      withCredentials: false,
      proxy: { host, port },
    })

    http.interceptors.response.use(this.success,(error: AxiosError) => this.handleError(error))

    this.instance = http
    return http
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config)
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config)
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config)
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config)
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config)
  }

  postForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this.http.postForm<T, R>(url, data, config)
  }

  private handleError(error: AxiosError) {
    const status = error.response?.status;
    console.error(error.response?.data)

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break
      }
      case StatusCode.BadRequest: {
        // Handle BadRequest
        break
      }
      default: {
        break
      }
    }

    return Promise.reject(error)
  }

  private success = (response: AxiosResponse<any>): AxiosResponse<any> => {
    return response
  }
}

export const http = new Http()