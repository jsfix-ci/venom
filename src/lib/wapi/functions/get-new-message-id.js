export async function getNewMessageId(chatId) {
  const chat = await WAPI.sendExist(chatId);
  if (chat.id) {
    const newMsgId = new Object();
    newMsgId.fromMe = true;
    newMsgId.id = await WAPI.getNewId().toUpperCase();
    newMsgId.remote = await new Store.WidFactory.createWid(chat.id);
    newMsgId._serialized = `${newMsgId.fromMe}_${newMsgId.remote}_${newMsgId.id}`;
    const Msgkey = await new Store.MsgKey(newMsgId);
    return Msgkey;
  } else {
    return false;
  }
}
