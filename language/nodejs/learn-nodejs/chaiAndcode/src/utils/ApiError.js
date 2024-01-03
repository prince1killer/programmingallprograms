class ApiError extends Error{
    constructor(
        statusCode,
        messages = "Something went wrong",
        errors = [],
        statck = ""
        ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = messages
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = statck
        }
        else{
            Error.captureStackTrace(this,this.consstructor)
        }

    }
}
export { ApiError }