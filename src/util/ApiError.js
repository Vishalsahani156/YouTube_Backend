// ApiError class to hand the error from the api function calling 
class ApiError extends Error{
    constructor(
        statusCode,
        message="Something_wend_ronng",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
    }
}
export {ApiError}
