const _0x498e41=_0x2eb9;function _0x2eb9(_0x1d1600,_0x1d02b2){const _0x5084ac=_0x5084();return _0x2eb9=function(_0x2eb919,_0x38f848){_0x2eb919=_0x2eb919-0xa9;let _0x5c783c=_0x5084ac[_0x2eb919];return _0x5c783c;},_0x2eb9(_0x1d1600,_0x1d02b2);}function _0x5084(){const _0x1c4947=['4065342IYvSgI','group','exports','3845072TPDBER','result','internet','357bukVZr','thumbnail','tags','author','relayMessage','sender','71430bXNgAI','53880cuEDDD','*Release\x20:*\x20','help','node-fetch','chat','244sxForx','url','*🚩\x20Contoh:*\x20','data','status','limit','\x20https://donghua.web.id/throne-of-seal/','93BeRhdh','json','*Author\x20:*\x20','release','*Url\x20:*\x20','*Status:*\x20','rating','🚩\x20*Gagal\x20Memuat\x20Data!*','4066MaosEY','240557soUdUb','episode','D\x20O\x20N\x20G\x20H\x20U\x20A','eps','*Genre\x20:*\x20','duration','*Title\x20:*\x20','title','*Episode\x20:*\x20','episodes','4677980aQroOe','9tZndBo','*Rating\x20:*\x20'];_0x5084=function(){return _0x1c4947;};return _0x5084();}(function(_0x15f6b3,_0x210918){const _0x458a1b=_0x2eb9,_0x42cad4=_0x15f6b3();while(!![]){try{const _0x4a9096=-parseInt(_0x458a1b(0xb5))/0x1+parseInt(_0x458a1b(0xb4))/0x2*(parseInt(_0x458a1b(0xac))/0x3)+parseInt(_0x458a1b(0xd4))/0x4*(parseInt(_0x458a1b(0xce))/0x5)+-parseInt(_0x458a1b(0xc2))/0x6+parseInt(_0x458a1b(0xc8))/0x7*(parseInt(_0x458a1b(0xcf))/0x8)+-parseInt(_0x458a1b(0xc0))/0x9*(-parseInt(_0x458a1b(0xbf))/0xa)+-parseInt(_0x458a1b(0xc5))/0xb;if(_0x4a9096===_0x210918)break;else _0x42cad4['push'](_0x42cad4['shift']());}catch(_0x2d049a){_0x42cad4['push'](_0x42cad4['shift']());}}}(_0x5084,0x74b86));let fetch=require(_0x498e41(0xd2)),handler=async(_0x4b5580,{text:_0x58fe89,conn:_0x5d274f,usedPrefix:_0x5f598d,command:_0x296ff1})=>{const _0x45b28c=_0x498e41;if(!_0x58fe89)throw _0x45b28c(0xd6)+(_0x5f598d+_0x296ff1)+_0x45b28c(0xab);let _0x532507='';try{const _0x3068d1=await fetch('https://api.botcahx.eu.org/api/download/donghua?url=https://donghua.web.id/throne-of-seal/&apikey='+btc);let _0x223186=await _0x3068d1[_0x45b28c(0xad)](),_0x55c78c=_0x223186['result'][_0x45b28c(0xd7)];_0x532507+=_0x45b28c(0xbb)+_0x55c78c[_0x45b28c(0xbc)]+'\x0a',_0x532507+=_0x45b28c(0xb1)+_0x55c78c[_0x45b28c(0xa9)]+'\x0a',_0x532507+=_0x45b28c(0xb9)+_0x55c78c['genre']+'\x0a',_0x532507+='*Release:*\x20'+_0x55c78c[_0x45b28c(0xaf)]+'\x0a',_0x532507+='*Duration\x20:*\x20'+_0x55c78c[_0x45b28c(0xba)]+'\x0a',_0x532507+='*Type\x20:*\x20'+_0x55c78c['type']+'\x0a',_0x532507+=_0x45b28c(0xbd)+_0x55c78c[_0x45b28c(0xb6)]+'\x0a',_0x532507+=_0x45b28c(0xae)+_0x55c78c[_0x45b28c(0xcb)]+'\x0a',_0x532507+='*Update\x20:*\x20'+_0x55c78c['updated']+'\x0a',_0x532507+=_0x45b28c(0xc1)+_0x55c78c[_0x45b28c(0xb2)]+'\x0a';for(let _0x1e5604 in _0x223186[_0x45b28c(0xc6)][_0x45b28c(0xd7)][_0x45b28c(0xbe)]){let _0x34960c=_0x223186[_0x45b28c(0xc6)]['data']['episodes'][_0x1e5604];_0x532507+='*Eps\x20:*\x20'+_0x34960c[_0x45b28c(0xb8)]+'\x0a',_0x532507+=_0x45b28c(0xbb)+_0x34960c[_0x45b28c(0xbc)]+'\x0a',_0x532507+=_0x45b28c(0xd0)+_0x34960c[_0x45b28c(0xaf)]+'\x0a\x0a',_0x532507+=_0x45b28c(0xb0)+_0x34960c[_0x45b28c(0xd5)]+'\x0a';}await _0x5d274f[_0x45b28c(0xcc)](_0x4b5580[_0x45b28c(0xd3)],{'extendedTextMessage':{'text':_0x532507,'contextInfo':{'externalAdReply':{'title':_0x45b28c(0xb7),'mediaType':0x1,'previewType':0x0,'renderLargerThumbnail':!![],'thumbnailUrl':_0x223186[_0x45b28c(0xc6)][_0x45b28c(0xd7)][_0x45b28c(0xc9)],'sourceUrl':''}},'mentions':[_0x4b5580[_0x45b28c(0xcd)]]}},{});}catch(_0xa7a5d){throw _0x45b28c(0xb3);}};handler['command']=handler[_0x498e41(0xd1)]=['donghuaurl'],handler[_0x498e41(0xca)]=[_0x498e41(0xc7)],handler['premium']=![],handler[_0x498e41(0xc3)]=![],handler[_0x498e41(0xaa)]=!![],module[_0x498e41(0xc4)]=handler;