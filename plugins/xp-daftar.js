const _0x2e533c=_0x4c31;(function(_0x29daaf,_0x541516){const _0x2e2210=_0x4c31,_0x2465ee=_0x29daaf();while(!![]){try{const _0x494ac2=-parseInt(_0x2e2210(0xfc))/0x1+parseInt(_0x2e2210(0xf3))/0x2*(-parseInt(_0x2e2210(0x104))/0x3)+parseInt(_0x2e2210(0x10a))/0x4*(-parseInt(_0x2e2210(0xee))/0x5)+parseInt(_0x2e2210(0xed))/0x6+parseInt(_0x2e2210(0xef))/0x7+parseInt(_0x2e2210(0x102))/0x8+parseInt(_0x2e2210(0x105))/0x9;if(_0x494ac2===_0x541516)break;else _0x2465ee['push'](_0x2465ee['shift']());}catch(_0x5ba768){_0x2465ee['push'](_0x2465ee['shift']());}}}(_0x1b46,0x73dbc));function _0x1b46(){const _0x45fd9f=['test','\x0a│\x20Umur:\x20','digest','5382008qSYNnW','Bayi\x20bisa\x20ngetik\x20sesuai\x20format\x20bjir\x20._.','125733EWqAwd','8167950DfYjKY','data','reply','map','update','16TMHJhJ','Umur\x20terlalu\x20tua\x20😂','\x0aDaftar\x20berhasil!\x0a\x0a╭─「\x20Info\x20」\x0a│\x20Nama:\x20','297876XRWZNn','452310pDwLGW','805784jRHfSW','Nama\x20tidak\x20boleh\x20kosong\x20(Alphanumeric)','daftar\x20nama.umur*','command','20swvYQA','sender','name','unreg\x20<SN|SERIAL\x20NUMBER>','registered','\x20<nama>.<umur>','Anda\x20sudah\x20terdaftar\x0aMau\x20daftar\x20ulang?\x20','help','age','489545rsdcYc','md5','crypto'];_0x1b46=function(){return _0x45fd9f;};return _0x1b46();}const {createHash}=require(_0x2e533c(0xfe));function _0x4c31(_0xf5ab67,_0x95e1e5){const _0x1b46ec=_0x1b46();return _0x4c31=function(_0x4c313e,_0x5b3c7d){_0x4c313e=_0x4c313e-0xed;let _0x168f11=_0x1b46ec[_0x4c313e];return _0x168f11;},_0x4c31(_0xf5ab67,_0x95e1e5);}let Reg=/\|?(.*)([.|] *?)([0-9]*)$/i,handler=async function(_0xdaeb73,{text:_0xd90c89,usedPrefix:_0x440800}){const _0x5a55d4=_0x2e533c;let _0x5c31dc=global['db'][_0x5a55d4(0x106)]['users'][_0xdaeb73[_0x5a55d4(0xf4)]];if(_0x5c31dc[_0x5a55d4(0xf7)]===!![])throw _0x5a55d4(0xf9)+_0x440800+_0x5a55d4(0xf6);if(!Reg[_0x5a55d4(0xff)](_0xd90c89))throw'Format\x20salah\x0a*'+_0x440800+_0x5a55d4(0xf1);let [_0x156345,_0x1fa674,_0x2a1183,_0x2587f3]=_0xd90c89['match'](Reg);if(!_0x1fa674)throw _0x5a55d4(0xf0);if(!_0x2587f3)throw'Umur\x20tidak\x20boleh\x20kosong\x20(Angka)';_0x2587f3=parseInt(_0x2587f3);if(_0x2587f3>0x78)throw _0x5a55d4(0x10b);if(_0x2587f3<0x5)throw _0x5a55d4(0x103);_0x5c31dc[_0x5a55d4(0xf5)]=_0x1fa674['trim'](),_0x5c31dc[_0x5a55d4(0xfb)]=_0x2587f3,_0x5c31dc['regTime']=+new Date(),_0x5c31dc[_0x5a55d4(0xf7)]=!![];let _0x423465=createHash(_0x5a55d4(0xfd))[_0x5a55d4(0x109)](_0xdaeb73[_0x5a55d4(0xf4)])[_0x5a55d4(0x101)]('hex');_0xdaeb73[_0x5a55d4(0x107)]((_0x5a55d4(0x10c)+_0x1fa674+_0x5a55d4(0x100)+_0x2587f3+'\x20tahun\x20\x0a╰────\x0aSerial\x20Number:\x20\x0a'+_0x423465+'\x0a')['trim']());};handler[_0x2e533c(0xfa)]=['daftar'][_0x2e533c(0x108)](_0x584537=>_0x584537+_0x2e533c(0xf8)),handler['tags']=['xp'],handler[_0x2e533c(0xf2)]=/^(daftar)$/i,module['exports']=handler;