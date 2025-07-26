class apiError {
    constructor(statusCode, message, success = false, error = null) {
        this.statusCode = statusCode;
        this.message = message;
        this.success = success;
        this.error = error;
        
    }
}

export { apiError };