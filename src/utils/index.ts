export const falsy = (value: any): boolean => value === 0 ? false : !value;

export const cleanObject = (object: object) => {
    const result = {...object};
    Object.keys(result).forEach((key) => {
        // @ts-ignore
        const value = result[key];
        if (falsy(value)) {
            // @ts-ignore
            delete result[key];
        }
    });
    return result;
}