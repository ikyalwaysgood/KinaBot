const fs = require('fs')

let handler = async (m, { conn }) => {
let loadd = [
    '*▬▭▭▭▭▭▭▭▭▭  1𝟶٪*',
    '*▬▬▭▭▭▭▭▭▭▭  2𝟶٪*',
    '*▬▬▬▭▭▭▭▭▭▭  3𝟶٪*',
    '*▬▬▬▬▭▭▭▭▭▭  4𝟶٪*',
    '*▬▬▬▬▬▭▭▭▭▭  5𝟶٪*',
    '*▬▬▬▬▬▬▭▭▭▭  6𝟶٪*',
    '*▬▬▬▬▬▬▬▭▭▭  7𝟶٪*',
    '*▬▬▬▬▬▬▬▬▭▭  8𝟶٪*',
    '*▬▬▬▬▬▬▬▬▬▭  9𝟶٪*',
    '*▬▬▬▬▬▬▬▬▬▬  𝟷𝟶𝟶٪*',
    '*𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳. . .*'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '*Loading. . .*'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
  let pfft = `
ubah di bawah!!!
`;
 conn.sendMessage(m.chat, {
      video: { url: "https://btch.pages.dev/file/e3cdfeaf72fd2d4dbd3e0.mp4"},
      gifPlayback: true,
      caption: ' *_"Kemauan adalah kunci sukses. Orang-orang sukses, berusaha keras apa pun yang mereka rasakan dengan menerapkan keinginan mereka untuk mengatasi sikap apatis, keraguan atau ketakutan."_*\n\n❖━━━[ *Kιɳα Bσƚ* ]━━━❖\n*.allmenu*\n*.owner*',     
      contextInfo: {
      externalAdReply: {
      title: `© Kιɳα Bσƚ`,
      body: global.author,
      thumbnailUrl: 'https://telegra.ph/file/da3dd014f4481e4bbd089.jpg',
      sourceUrl: `https://whatsapp.com/channel/0029VaACVbGDuMRk7zy6vI3a`,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})

let vn = "./vn/menu.mp3"
  conn.sendFile(m.chat, vn, "menu.mp3", null, m, true, {
    type: "audioMessage",
    ptt: true,
  });
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i;

module.exports = handler;