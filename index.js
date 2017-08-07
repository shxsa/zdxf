define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("cordova!cordova-plugin-inappbrowser");
	require("res!./img");
	var Model = function() {
		this.callParent();
	};

	Model.prototype.button1Click = function(event) {
		cordova.InAppBrowser.open("http://www.xinfang.gov.cn/trilink/onlineCompl_Complain_addPage_WeiXin_n.action?orgCode=421303");
		
	};

	Model.prototype.button2Click = function(event) {
		 cordova.InAppBrowser.open("http://www.suizhou.gov.cn/col/col921/index.html");
		
	};

	Model.prototype.button3Click = function(event) {
		cordova.InAppBrowser.open("http://www.xinfang.gov.cn/trilink/jsp/weixin/search.jsp");
		
	};

	Model.prototype.button4Click = function(event) {
		cordova.InAppBrowser.open("http://www.xinfang.gov.cn/trilink/jsp/weixin/search.jsp");
		
	};

	return Model;
});