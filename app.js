//app.js
const utils = require('./utils/util.js')
const worker = wx.createWorker('workers/request/index.js')

worker.postMessage({
	msg: 'hello from AppService',
	buffer: utils.str2ab('hello arrayBuffer from AppService')
})

worker.onMessage(function (msg) {
	console.log('[AppService] onWorkerMessage', msg)
	const buffer = msg.buffer
	console.log('[AppService] on worker buffer', utils.ab2str(buffer))
})

console.log(`[AppService] on worker create: ${worker.onMessage}`)

App({
    onLaunch: function (options) {
        console.log("===========onLaunch===========");
    },
    onShow: function(){
        console.log("===========onShow===========");
    },
    onHide: function(){
        console.log("===========onHide===========");
    }
});