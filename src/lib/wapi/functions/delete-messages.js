export async function deleteMessages(chatId, messageArray) {
  if (typeof chatId != 'string') {
    return WAPI.scope(
      null,
      true,
      404,
      'enter the chatid variable as an string'
    );
  }
  const chat = await WAPI.sendExist(chatId);
  if (chat && chat.status != 404) {
    if (!Array.isArray(messageArray)) {
      return WAPI.scope(
        chat,
        true,
        404,
        'enter the message identification variable as an array'
      );
    }

    for (let i in messageArray) {
      let checkID = await WAPI.checkIdMessage(chatId, messageArray[i]);
      if (checkID.erro == true) {
        return checkID;
      }
    }

    let messagesToDelete = (
      await Promise.all(
        messageArray.map(
          async (msgId) => await WAPI.getMessageById(msgId, null, false)
        )
      )
    ).filter((x) => x);

    const To = chat.id;
    const m = { type: 'deleteMessages' };

    let jobs = [
      chat.sendRevokeMsgs(
        messagesToDelete.filter((msg) => msg.isSentByMe),
        chat
      ),
      chat.sendDeleteMsgs(
        messagesToDelete.filter((msg) => !msg.isSentByMe),
        chat
      ),
    ];

    const result = (await Promise.all(jobs))[1];

    if (result >= 0) {
      let obj = WAPI.scope(To, false, result, '');
      Object.assign(obj, m);
      return obj;
    } else {
      let obj = WAPI.scope(To, true, result, '');
      Object.assign(obj, m);
      return obj;
    }
  } else {
    return chat;
  }
}
