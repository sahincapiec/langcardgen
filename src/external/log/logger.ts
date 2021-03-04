const logLevel = process.env.LOG_LEVEL || 0

export default {
    ERROR: 0,
    INFO: 1,
    DEBUG: 2,
    debug: function(params: string){
        if (logLevel >= this.DEBUG){
            console.debug(new Date(), params);
        }
    },
    error: function(params: string){
        console.error(new Date(), params);
    },
    info: function(params: string){
        if (logLevel >= this.INFO){
            console.info(new Date(), params);
        }
    },
}