class ApiError extends Error{
    constructor(
        statusCode,
        message="Some thing went wrong",
        errors=[],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.error = errors
        this.data = null
        this.message = message
        this.success = false

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructore)
        }        
    }
}

export {ApiError}