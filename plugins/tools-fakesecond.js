function _0x31fb(_0x1bea0f,_0x2d3992){const _0x487a23=_0x487a();return _0x31fb=function(_0x31fbf2,_0x49f07b){_0x31fbf2=_0x31fbf2-0x128;let _0x861e9f=_0x487a23[_0x31fbf2];return _0x861e9f;},_0x31fb(_0x1bea0f,_0x2d3992);}function _0x487a(){const _0x556de3=['sendMessage','18366OCygpN','864672LDDoGZ','../lib/uploadImage.js','test','4241908uTkSgs','fakesecond','length','kirim\x20video/audio\x20dengan\x20caption\x20.fakesecond\x20<angka>','35PIiCpX','node-fetch','1359eDBScK','1489844OdJyLC','Ukuran\x20media\x20tidak\x20boleh\x20melebihi\x2015MB','tools','4cbjwiV','help','chat','2989357YUdzYe','3VZtPPQ','msg','mediaType','*\x20<angka>\x20atau\x20tag\x20audio/video\x20yang\x20sudah\x20dikirim.','reply','Kirim\x20audio/video\x20dengan\x20caption\x20*','quoted','mimetype','206977TOuVjk','command','limit','9370zcVKzx','Reply\x20video/audio'];_0x487a=function(){return _0x556de3;};return _0x487a();}const _0xa545c1=_0x31fb;(function(_0x87f435,_0x35251a){const _0x39588f=_0x31fb,_0x19dc94=_0x87f435();while(!![]){try{const _0x254177=-parseInt(_0x39588f(0x12a))/0x1*(parseInt(_0x39588f(0x13e))/0x2)+parseInt(_0x39588f(0x142))/0x3*(-parseInt(_0x39588f(0x13b))/0x4)+-parseInt(_0x39588f(0x138))/0x5*(-parseInt(_0x39588f(0x130))/0x6)+parseInt(_0x39588f(0x141))/0x7+parseInt(_0x39588f(0x131))/0x8+parseInt(_0x39588f(0x13a))/0x9*(parseInt(_0x39588f(0x12d))/0xa)+parseInt(_0x39588f(0x134))/0xb;if(_0x254177===_0x35251a)break;else _0x19dc94['push'](_0x19dc94['shift']());}catch(_0x55a89c){_0x19dc94['push'](_0x19dc94['shift']());}}}(_0x487a,0x4892e));const fetch=require(_0xa545c1(0x139)),uploadImage=require(_0xa545c1(0x132));async function handler(_0x447bcf,{conn:_0x4169c5,usedPrefix:_0xc3e6e2,command:_0x31dabf,args:_0x24b008,text:_0x3fe844}){const _0xa50edd=_0xa545c1;if(!_0x3fe844)return _0x447bcf['reply'](_0xa50edd(0x137));const _0x16732e=_0x24b008['join']` `,_0x37825a=_0x447bcf[_0xa50edd(0x128)]?_0x447bcf['quoted']:_0x447bcf,_0x53d7d3=(_0x37825a[_0xa50edd(0x143)]||_0x37825a)[_0xa50edd(0x129)]||_0x37825a[_0xa50edd(0x144)]||'';if(!_0x53d7d3)throw _0xa50edd(0x12e);const _0x4eaa17=await _0x37825a['download'](),_0x2b0449=await uploadImage(_0x4eaa17);let _0x27319c=0xf*0x400*0x400;if(_0x4eaa17[_0xa50edd(0x136)]>_0x27319c)throw _0xa50edd(0x13c);if(/^video/[_0xa50edd(0x133)](_0x53d7d3))_0x4169c5[_0xa50edd(0x12f)](_0x447bcf['chat'],{'video':_0x4eaa17,'gifPlayback':![],'seconds':_0x16732e});else/^audio/[_0xa50edd(0x133)](_0x53d7d3)?_0x4169c5[_0xa50edd(0x12f)](_0x447bcf[_0xa50edd(0x140)],{'audio':_0x4eaa17,'seconds':_0x16732e}):_0x447bcf[_0xa50edd(0x146)](_0xa50edd(0x147)+(_0xc3e6e2+_0x31dabf)+_0xa50edd(0x145));}handler[_0xa545c1(0x13f)]=['fakesecond\x20<angka>'],handler['tags']=[_0xa545c1(0x13d)],handler[_0xa545c1(0x12b)]=[_0xa545c1(0x135)],handler['premium']=![],handler[_0xa545c1(0x12c)]=![],module['exports']=handler;