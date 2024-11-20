type ResponseData<T> = {
    code: number
    msg: string
    data: T
}

export function responseOK<T extends Record<string, any> | null>(data: T): ResponseData<T> {
    return {
        code: 200,
        msg: 'OK',
        data: data
    }
}

export function responseError(code: number = 500, msg: string): ResponseData<null> {
    return {
        code,
        msg,
        data: null
    }
}

// 401 Unauthorized
export const responseUnauthorized = responseError(401, 'Unauthorized')

// 403 Forbidden
export const responseForbidden = responseError(403, 'Forbidden')

// 404 Not Found
export const responseNotFound = responseError(404, 'Not Found')

// 判断是否 401 Unauthorized
export function isUnauthorized(headers: any): boolean {
    return !headers?.authorization
}
