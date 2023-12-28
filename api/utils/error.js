export const errorHandler =(statusCode,msg) =>
{
    const error = new Error(msg);
    error.statusCode = statusCode;
    error.message = msg;
    return error;
};