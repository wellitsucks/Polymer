var b642uint8 = require("base64-js").toByteArray

function base64decode(str) {
  if(typeof(window)=== "undefined") {
    return new Uint8Array(new Buffer(str, "base64"))
  } else {
    return new Uint8Array(b642uint8(str))
  }
}
module.exports=require('ndarray')(base64decode(
),[512,512,3],[3,1536,1],0)