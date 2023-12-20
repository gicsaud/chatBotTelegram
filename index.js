const TelegramBot = require('node-telegram-bot-api');
const token = '6854209702:AAGJkIKoHamDWdVFOpQb1O6Yn5O3CFqygAM';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Obrigado por sua mensagem');
})