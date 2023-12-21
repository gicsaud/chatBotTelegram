const TelegramBot = require('node-telegram-bot-api');
const dialogflow = require('./dialogflow');
const youtube = require('./youtube')

const token = '6854209702:AAGJkIKoHamDWdVFOpQb1O6Yn5O3CFqygAM';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);

    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);


    let responseText = dfResponse.text;

    if(dfResponse.intent === 'Treino especifico'){
        responseText = await youtube.searchVideoURL(responseText, dfResponse.fields.corpo.stringValue)
    }

    bot.sendMessage(chatId, responseText);
});