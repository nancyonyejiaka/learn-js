/* 
Define a JavaScript function called logMsg() that can be used to log an error message for 
any object that contains the property errMsg. 
*/
const logger = {
  logMsg: function () {
    return console.log(`Error Message :  ${this.errMsg}`);
  },
};

const error = {
  errMsg: "This is a sample error",
};

const error2 = {
  errMsg: "This is another sample error",
};

logger.logMsg.call(error);
logger.logMsg.call(error2);
