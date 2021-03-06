/*jslint node: true*/

var pluginHello = function (Bot, regEvent) {
	this.bot = Bot;
	this.regEvent = regEvent;
};

pluginHello.prototype = {
	name  : 'Uptime',
	ver   : '1.0',
	author: 'Jixun',
	desc  : '获取机器人上线时间长度',
	load: function () {
		var that = this;
		
		// 安裝 Hook
		this.regEvent ('msg-cmd-uptime', function (next, reply) {
			var secs = (new Date() - that.bot.mod.boot.time) / 1000;
			reply ('这次欢快的跑了 ' + Math.floor(secs % 86400 / 3600) + '时 ' + Math.floor(secs % 3600 / 60) + '分钟呢~');
		});
	},
	unload: function () {
		// 沒有需要 owo
	}
};

module.exports = pluginHello;