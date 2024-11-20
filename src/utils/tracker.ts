/**
 * 捕获promise错误并返回正确的类型。
 *
 * @param promise
 * @param errorsToCatch
 * @returns
 */
export function catchError<T extends any, E extends new (Message?: string) => Error>(
    promise: Promise<T>,
    errorsToCatch?: E[]
): Promise<[undefined, T] | [InstanceType<E>]> {
    return promise
        .then((data) => {
            return [undefined, data] as [undefined, T]
        })
        .catch((error) => {
            if (errorsToCatch === undefined) {
                return [error]
            }

            if (errorsToCatch.some((e) => error instanceof e)) {
                return [error]
            }

            throw error
        })
}
