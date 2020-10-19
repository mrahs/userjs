feed.title  = _("Translate");
feed.author = _("Anas H. Sulaiman (AHS.PW)");


const TR_LANGS = {
  'Arabic': 'ar',
  'English': 'en'
};

const TRANSLATOR_LIMIT = 1e4;

CmdUtils.CreateCommand({
	names: ['bingtr'],
	description: "Bing translate from one language to another (based on Ubiquity's built-in command).",
	arguments: ((noun) => ({
    	object : noun_arb_text,
    	source : noun,
    	goal   : noun,
  	}))(CmdUtils.NounType("language", TR_LANGS)),
	preview: function(pblock, {object, goal, source}) {
		var limitExceeded = object.text.length > TRANSLATOR_LIMIT;

	    if (!object.text) {
	      pblock.innerHTML = _('No text selected');
	      return;
	    }

	    if (limitExceeded) {
	      pblock.innerHTML = '<p><em class="error">' +
	        _('The text you selected exceeds the API limit.') +
	        '</em>';
	      return;
	    }
	    
	    var name = goal.text,
	      	phtml = _('Translating:');

	    pblock.innerHTML = phtml + ' ...';
	    this.tr(
	    	object,
	      	source.data || '',
	      	goal.data,
	      	CmdUtils.previewCallback(pblock, function(html) {
	        	pblock.innerHTML = phtml + '<br><br>' + html;
	      	})
	    );
	},
	tr: function(target, from, to, back) {
		if (!to) to = 'ar';
		this.mstr(
			'Detect',
			{
      			text: target.text
    		},
    		function(code) {
      			this.tr(target, from, to, back);
    		}
    	);

    	var {html} = target;
    	// bitbucket#29: The API doesn't like apostrophes HTML-escaped.
    	~html.indexOf('<') || (html = html.replace(/&#39;/g, "'"));

    	this.mstr(
    		'Translate',
    		{
    			contentType: 'text/html',
    			text: html,
    			from: from,
    			to: to
			},
			back
		);
	},
  	mstr: function(method, params, back) {
    	params.appId = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + new Date() % 10;
    	$.ajax({
      		url: 'http://api.microsofttranslator.com/V2/Ajax.svc/' + method,
      		data: params,
      		success: function(json) {
       	 		back(JSON.parse(json));
      		},
      		error: function() {
        		displayMessage({
          			title: 'Bing Translator',
          			text: '(>_<)'
        		});
      		}
    	});
  	}
});



CmdUtils.CreateCommand({
	names: ['googletr'],
	description: "Google translate from one language to another (based on Ubiquity's built-in command and S3.Google Transator addon).",
	arguments: ((noun) => ({
    	object : noun_arb_text,
    	source : noun,
    	goal   : noun,
  	}))(CmdUtils.NounType("language", TR_LANGS)),
  	preview: function(pblock, {object, goal, source}) {
		var limitExceeded = object.text.length > TRANSLATOR_LIMIT;

	    if (!object.text) {
	      pblock.innerHTML = _('No text selected');
	      return;
	    }

	    if (limitExceeded) {
	      pblock.innerHTML = '<p><em class="error">' +
	        _('The text you selected exceeds the API limit.') +
	        '</em>';
	      return;
	    }
	    
	    var name = goal.text,
	      	phtml = _('Translating:');

	    pblock.innerHTML = phtml + ' ...';
	    this.tr(
	    	object,
	      	source.data || '',
	      	goal.data,
	      	CmdUtils.previewCallback(pblock, function(html) {
	        	pblock.innerHTML = phtml + '<br><br>' + html;
	      	})
	    );
	},
  	tr: function(target, from, to, back) {
  		/* Validate Input */
  		if (!to) to = 'ar';
  		if (!from) from = 'auto';

  		/* Prepare URL */
  		var text = target.text,
  			url = 'https://translate.google.com/translate_a/single?client=t&sl=LANG_FROM&tl=LANG_TO&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&otf=2&srcrom=1&ssel=0&tsel=0&kc=1&tk=GOOGLE_TK&q=',
  			i,j;
  		url = url.replace("LANG_FROM", from);
  		url = url.replace(/LANG_TO/g, to);
  		url = url.replace(/GOOGLE_TK/g, this._googleTk(text));
  		url += this._s3gtUrlencode(text);
  		
  		/* POST or GET*/
  		var urlAndParams = url.split('?', 2);
  		var textLen = unescape(encodeURIComponent(text)).length;
  		var req = new XMLHttpRequest();
  		if (textLen > 750) {
  			req.open('POST', urlAndParams[0], false);
			req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			req.send(urlAndParams[1]);
  		} else {
      		req.open('GET', url, false);
      		req.send(null);
		}

		/* Process Resonse */
		var respObj = this._fixResponseJson(req.responseText);
		if (!respObj) {
			back(req.responseText);
			return;
		}

		var result = this._extractDataFromRespObj(respObj);
		if (!result.serverTime) {
			return;
		}

		var resultText = '';
		resultText += result.origText + ': ' + result.best + '<br>';
		resultText += '<h3>Translations of ' + result.origText + '</h3>';
		for (i = result.trans.length - 1; i >= 0; i--) {
          	resultText += '<i>' + result.trans[i].type + '</i><br><ul>';
          	for (j = result.trans[i].data.length - 1; j >= 0; j--) {
            	resultText += '<li>' + result.trans[i].data[j].trans + ': ' + result.trans[i].data[j].origWords.join(', ') + '</li>';
          	}
          	resultText += '</ul>';
        }

        resultText += '<h3>Definitions of ' + result.origText + '</h3>';
        for (i = result.def.length - 1; i >= 0; i--) {
          	resultText += '<i>' + result.def[i].type + '</i><br><ul>';
          	for (j = result.def[i].data.length - 1; j >= 0; j--) {
            	resultText += '<li>' + result.def[i].data[j].def + '<br>"' + result.def[i].data[j].example + '"<br><i>Synonyms:</i> ' + result.def[i].data[j].synonyms.join(', ') + '</li>';
          	}
          	resultText += '</ul>';
        }

        back(resultText);
  	},
  	_s3gtUrlencode: function(str) {
    	str = (str === undefined) ? '' : str;
    	str = (str + '').toString();
    	return encodeURIComponent(str)
    		.replace(/!/g, '%21')
    		.replace(/'/g, '%27')
    		.replace(/\(/g, '%28')
    		.replace(/\)/g, '%29')
    		.replace(/\*/g, '%2A')
    		.replace(/%20/g, '+');
  	},
  	_fixResponseJson: function(json) {
  		while (/,,/.test(json)) {
      		json = json.replace(/,,/g, ',"",');
    	}
    	json = json.replace(/\[,/g, '["",').replace(/,\]/g, ',""]');
    	
    	var respObj;
    	try {
      		respObj = JSON.parse(json);
    	} catch (e) {
    	}

    	return respObj;
  	},
  	_extractDataFromRespObj: function(respObj) {
  		var result = {};
    	result.src = respObj[2];
    	result.serverTime = respObj[6];
    	result.origText = respObj[0][0][1];
    	result.best = respObj[0][0][0];

    	result.trans = [];
    	var transItem, i;

    	if (respObj[1] && respObj[1][0]) {
      		transItem = {};
      		transItem.type = respObj[1][0][0];
      		transItem.data = [];

      		for (i = respObj[1][0][2].length - 1; i >= 0; i--) {
        		transItem.data.push({
          			'trans': respObj[1][0][2][i][0],
          			'origWords': respObj[1][0][2][i][1]
        		});
      		}
      		result.trans.push(transItem);
		}

		if (respObj[1] && respObj[1][1]) {
      		transItem = {};
      		transItem.type = respObj[1][1][0];
      		transItem.data = [];

      		for (i = respObj[1][1][2].length - 1; i >= 0; i--) {
      		  	transItem.data.push({
      		    	'trans': respObj[1][1][2][i][0],
      		    	'origWords': respObj[1][1][2][i][1]
      		  	});
      		}
      		result.trans.push(transItem);
    	}

    	result.def = [];
    	var defItem;

    	if (respObj[12] && respObj[12][1]) {
      		defItem = {};
      		defItem.type = respObj[12][1][0];
      		defItem.data = [];

      		for (i = respObj[12][1][1].length - 1; i >= 0; i--) {
      		  	defItem.data.push({
      		    	'def': respObj[12][1][1][i][0],
      		    	'example': respObj[12][1][1][i][2],
      		    	'synonyms': respObj[11][1][1][i][0]
      		  	});
      		}
      		result.def.push(defItem);
    	}

    	if (respObj[12] && respObj[12][0]) {
      		defItem = {};
      		defItem.type = respObj[12][0][0];
      		defItem.data = [];
		
      		for (i = respObj[12][0][1].length - 1; i >= 0; i--) {
      		  	defItem.data.push({
      		    	'def': respObj[12][0][1][i][0],
      		    	'example': respObj[12][0][1][i][2],
      		    	'synonyms': respObj[11][0][1][i][0]
      		  	});
      		}
      		result.def.push(defItem);
    	}
    	
		return result;
	},
	_googleTk: function(text) {
		var res = (function(text, SL){
			// view-source:https://translate.google.com/translate/releases/twsfe_w_20151214_RC03/r/js/desktop_module_main.js
			var SL = (SL) ? SL : null;
			var QL=function(a){return function(){return a}};
			var cb="&";
			var k="";
			var mf="=";
			var RL=function(a,b){for(var c=0;c<b.length-2;c+=3){var d=b.charAt(c+2),d=d>=t?d.charCodeAt(0)-87:Number(d),d=b.charAt(c+1)==Tb?a>>>d:a<<d;a=b.charAt(c)==Tb?a+d&4294967295:a^d}return a};
			var Vb="+-a^+6";
			var t="a";
			var Tb="+";
			var Ub="+-3^+b+-f";
			var dd=".";
			var TL=function(a){
				var b;
				if(null===SL){
					SL = Math.floor(Math.random() * 1000000);
				}
				b=SL;
				var d=QL(String.fromCharCode(116)),
				c=QL(String.fromCharCode(107)),
				d=[d(),d()];
				d[1]=c();
				for(var c=cb+d.join(k)+mf,d=[],e=0,f=0;f<a.length;f++){
					var g=a.charCodeAt(f);
					128>g?d[e++]=g:(2048>g?d[e++]=g>>6|192:(55296==(g&64512)&&f+1<a.length&&56320==(a.charCodeAt(f+1)&64512)?(g=65536+((g&1023)<<10)+(a.charCodeAt(++f)&1023),d[e++]=g>>18|240,d[e++]=g>>12&63|128):d[e++]=g>>12|224,d[e++]=g>>6&63|128),d[e++]=g&63|128)
				}
				a=b||0;
				for(e=0;e<d.length;e++) { a+=d[e],a=RL(a,Vb); }
				a=RL(a,Ub);
				0>a&&(a=(a&2147483647)+2147483648);
				a%=1E6;

				return a.toString()+dd+(a^b);
			};
			return { 'tk' : TL(text), 'SL' : SL };
		})(text, this._SL);
		this.SL = res.SL;
		return res.tk;
	},
	_SL: null
 });