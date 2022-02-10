
function formatHtml(html) {
    html = html.replaceAll('hf-wrapper', getRandomName(4, 6));
    html = html.replaceAll('hf-', getRandomName(4, 6));

    var tagArr = html.match(/<\w+\s/ig);
    for (var i in tagArr) {
        if (tagArr[i] !== '<img ' && tagArr[i] !== '<svg ' && tagArr[i] !== '<use ') {
            var tag = tagArr[i];
            var tagEnd = '</' + tag.slice(1, -1) + '>';
            var newTag = getRandomName(4, 6, 'tag');
            html = html.replaceAll(tag, '<' + newTag + ' ');
            html = html.replaceAll(tagEnd, '</' + newTag + '>');
        }
    }
    var wpdiv = '', wparr = [], wplen = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
    for (var j = 0; j < wplen; j++) {
        var wptag = getRandomName(4, 6, 'tag');
        wparr.push(wptag)
        wpdiv += '<' + wptag + '>';
    }
    html = wpdiv + html;
    for (var k = wparr.length - 1; k >= 0; k--) {
        html += '</' + wparr[k] + '>';
    }
    return html;
}
function getRandomName(min, max, type) {
    var rule1 = 'bcefghijklmnopqrstuvwxyz';
    var rule2 = 'bcefghijklmnopqrstuvwxyzBCEFGHIJKLMNOPQRSTUVWXYZ';
    var rule3 = 'bcefghijklmnopqrstuvwxyzBCEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var len = Math.floor(Math.random() * (max - min + 1)) + min;
    if (type == 'tag') {
        var cname = '';
        for (var i = 0; i < len; i++) {
            cname += rule1.charAt(Math.random() * (rule1.length - 1))
        }
    } else {
        var cname = rule2.charAt(Math.random() * (rule2.length - 1))
        for (var i = 0; i < len; i++) {
            cname += rule3.charAt(Math.random() * (rule3.length - 1))
        }
    }
    return cname;
}

String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}

function createApp(){
    var html = '<style> .hf-wp { display: flex; position: relative; box-sizing: border-box; height: 60px; padding: 10px; margin: 0px 0; border-top: #DDD 1px solid; border-bottom: #DDD 1px solid; background-color: #FFFFFF; justify-content: space-between; align-items: center; max-width: 1024px; margin: 0 auto; animation:mymove 20s infinite; -webkit-animation:mymove 20s infinite; } @keyframes mymove { 0% {background: #fff;} 50% {background: #b8efb8;} 100% {background: #fff;} } @-webkit-keyframes mymove { 0% {background: #fff;} 50% {background: #b8efb8;} 100% {background: #fff;} }  .hf-wp * { display: block; } .hf-wp .hf-info { line-height: 20px; padding-left: 12px; flex: 1; } .hf-wp .hf-logo { width: 40px; height: 40px; line-height: 40px; border-radius: 4px;font-size: 24px; color: #fff; text-align: center; font-style: normal; font-family: PingHei,"Helvetica Neue",Helvetica,Arial,"Microsoft Yahei";-webkit-font-smoothing: antialiased; background: #68aac2; position: relative;} .hf-v {position: absolute; bottom: -5px; right: -5px; font-style: normal; font-size: 12px; border: 1px solid #fff; border-radius: 50%; width: 14px; height: 14px; line-height: 12px; text-align: center; font-family: monospace; background: #2fb0f7; -webkit-font-smoothing: auto;} .hf-wp .hf-btn { height: 30px; line-height: 30px; font-size: 14px; padding: 0 18px; text-align: center; color: #fff; border-radius: 4px; background-color: #68aac2; box-shadow: 0 2px 0 #4b879c; position: relative; } .hf-wp .hf-btn:after { content: ""; width: 8px; height: 8px; border-radius: 50%; background: #f00; position: absolute; top: -3px; right: -3px;} .hf-wp .hf-down {display: inline-block;vertical-align: middle;width: 13px;height: 13px;position: relative;margin-right: 3px;} .hf-wp .hf-down::before {content: "";width: 0;height: 0;border: 4px solid #fff;border-color: transparent #fff #fff transparent;transform: rotate(45deg);position: absolute;top: 3px;left: 3px;} .hf-wp .hf-down::after {content: "";width: 2px;height: 7px;background: #fff;position: absolute;top: 0px;left: 6px;} .hf-wp .hf-h { font-size: 14px;color: #33373d; } .hf-wp .hf-p { font-size: 12px; color: #969ba3; }</style> <section class="aznav"> <figure class="hf-wp" onClick="window.location.href=\'https://mgzs.cdn.bcebos.com/appdown.html?w=tg7\'"><span class="hf-btn"><i class="hf-down"></i>涓嬭浇</span><div class="hf-info"> <h3 class="hf-h">璇峰畨瑁呮垜浠殑瀹㈡埛绔�</h3> <p class="hf-p">鐪嬫洿澶氬ソ涔� 绂荤嚎涓嬭浇 鏃犵綉闃呰</p> </div><span class="hf-logo">绗�<i class="hf-v">v</i></span> </figure></section>'

    html = formatHtml(html);
    document.write(html);
}






function formatHtml(html) {
    html = html.replaceAll('hf-wrapper', getRandomName(4, 6));
    html = html.replaceAll('hf-', getRandomName(4, 6));

    var tagArr = html.match(/<\w+\s/ig);
    for (var i in tagArr) {
        if (tagArr[i] !== '<img ' && tagArr[i] !== '<svg ' && tagArr[i] !== '<use ') {
            var tag = tagArr[i];
            var tagEnd = '</' + tag.slice(1, -1) + '>';
            var newTag = getRandomName(4, 6, 'tag');
            html = html.replaceAll(tag, '<' + newTag + ' ');
            html = html.replaceAll(tagEnd, '</' + newTag + '>');
        }
    }
    var wpdiv = '', wparr = [], wplen = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
    for (var j = 0; j < wplen; j++) {
        var wptag = getRandomName(4, 6, 'tag');
        wparr.push(wptag)
        wpdiv += '<' + wptag + '>';
    }
    html = wpdiv + html;
    for (var k = wparr.length - 1; k >= 0; k--) {
        html += '</' + wparr[k] + '>';
    }
    return html;
}
function getRandomName(min, max, type) {
    var rule1 = 'bcefghijklmnopqrstuvwxyz';
    var rule2 = 'bcefghijklmnopqrstuvwxyzBCEFGHIJKLMNOPQRSTUVWXYZ';
    var rule3 = 'bcefghijklmnopqrstuvwxyzBCEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var len = Math.floor(Math.random() * (max - min + 1)) + min;
    if (type == 'tag') {
        var cname = '';
        for (var i = 0; i < len; i++) {
            cname += rule1.charAt(Math.random() * (rule1.length - 1))
        }
    } else {
        var cname = rule2.charAt(Math.random() * (rule2.length - 1))
        for (var i = 0; i < len; i++) {
            cname += rule3.charAt(Math.random() * (rule3.length - 1))
        }
    }
    return cname;
}

String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}

function createApp(){
    var html = '<style> .hf-wp { display: flex; position: relative; box-sizing: border-box; height: 60px; padding: 10px; margin: 0px 0; border-top: #DDD 1px solid; border-bottom: #DDD 1px solid; background-color: #FFFFFF; justify-content: space-between; align-items: center; max-width: 1024px; margin: 0 auto; animation:mymove 20s infinite; -webkit-animation:mymove 20s infinite; } @keyframes mymove { 0% {background: #fff;} 50% {background: #b8efb8;} 100% {background: #fff;} } @-webkit-keyframes mymove { 0% {background: #fff;} 50% {background: #b8efb8;} 100% {background: #fff;} }  .hf-wp * { display: block; } .hf-wp .hf-info { line-height: 20px; padding-left: 12px; flex: 1; } .hf-wp .hf-logo { width: 40px; height: 40px; line-height: 40px; border-radius: 4px;font-size: 24px; color: #fff; text-align: center; font-style: normal; font-family: PingHei,"Helvetica Neue",Helvetica,Arial,"Microsoft Yahei";-webkit-font-smoothing: antialiased; background: #68aac2; position: relative;} .hf-v {position: absolute; bottom: -5px; right: -5px; font-style: normal; font-size: 12px; border: 1px solid #fff; border-radius: 50%; width: 14px; height: 14px; line-height: 12px; text-align: center; font-family: monospace; background: #2fb0f7; -webkit-font-smoothing: auto;} .hf-wp .hf-btn { height: 30px; line-height: 30px; font-size: 14px; padding: 0 18px; text-align: center; color: #fff; border-radius: 4px; background-color: #68aac2; box-shadow: 0 2px 0 #4b879c; position: relative; } .hf-wp .hf-btn:after { content: ""; width: 8px; height: 8px; border-radius: 50%; background: #f00; position: absolute; top: -3px; right: -3px;} .hf-wp .hf-down {display: inline-block;vertical-align: middle;width: 13px;height: 13px;position: relative;margin-right: 3px;} .hf-wp .hf-down::before {content: "";width: 0;height: 0;border: 4px solid #fff;border-color: transparent #fff #fff transparent;transform: rotate(45deg);position: absolute;top: 3px;left: 3px;} .hf-wp .hf-down::after {content: "";width: 2px;height: 7px;background: #fff;position: absolute;top: 0px;left: 6px;} .hf-wp .hf-h { font-size: 14px;color: #33373d; } .hf-wp .hf-p { font-size: 12px; color: #969ba3; }</style> <section class="aznav"> <figure class="hf-wp" onClick="window.location.href=\'https://mgzs.cdn.bcebos.com/appdown.html?w=tg7\'"><span class="hf-btn"><i class="hf-down"></i>涓嬭浇</span><div class="hf-info"> <h3 class="hf-h">璇峰畨瑁呮垜浠殑瀹㈡埛绔�</h3> <p class="hf-p">鐪嬫洿澶氬ソ涔� 绂荤嚎涓嬭浇 鏃犵綉闃呰</p> </div><span class="hf-logo">绗�<i class="hf-v">v</i></span> </figure></section>'

    html = formatHtml(html);
    document.write(html);
}