
export var help = `
/start - Начать проходить тест
/skip - Пропустить вопрос
/next - Пропустить вопрос
/help - Справочная информация

Связаться с автором по ссылке @frontdevops
`;

export function hello(botInfo, username) {
	return `
💡 Привет, ${username}!

Познакомься с нашим ботом ${botInfo.name}.

Он может побеседовать с тобой на тему ${botInfo.description}:

Во время общения с ботом действуют следующие правила:
 - Вопросы можно пропускать, но вы не сможете вернуться к ним позже
 - Пройти тест можно только 1 раз за 24 часа.
 - Каждый час будут разыгрываться призы среди участников бота.
   Поэтому нужно оставить свой email и номер мобильного для связи.
 
Пользуйся командой /help, в любой непонятной ситуации.

Сегодня, 04.10.16 по итогам каждого часа будет выбраны победитель.
В другие дни ты сможешь просто проходить тест для души и самообразования.

✨ Удачи! ✨
`
}

export var inputAbout = '❕ Для участия в викторине введите ваш e-mail, пожалуйста';

export const answers = {
	good: [
		'Отличный ответ! 😄',
		'Замечательный ответ! 😄',
		'Хороший ответ! 😄',
		'Превосходно! 😄',
		'Супер! 👍',
		'Умничка! 👍',
		'Ответ засчитан 😄',
		'Принято 👍',
		'Хорошо 😄',
		'Ок, ответ принят 👍',
		'Ок 😄',
	],
	wrong: [
		'Хорошая попытка!',
		'Надо будет перепроверить результат',
		'Думаешь? Ну ок, принято',
		'Ответ принят',
		'Наверное, посмотрю в справочнике',
		'Я бы выбрал другой ответ, но тебе виднее :)',
		'Ответ засчитан',
		'Принято',
		'Хорошо',
		'Ок, ответ принят',
		'Ок',
	]
};

export const errorMessages = {
	mail: [
		'✉️ Введите, пожалуйста, корректный e-mail',
		'Пожалуйста, напишите ваш e-mail ✉️',
		'❗️ Скажите ваш e-mail, пожалуйста',
		'❗️ Пожалуйста, введи правильный e-mail',
		'Ну тебе сложно чтоли? Просто введи свой и-мэйл! ❗️',
		'Прошу тебя, введи имэйл!',
		'Я могу долго с тобой препираться, но в итоге проиграешь ты. Введи емейл, плиз',
		'Упоротость - интересное качество. Но e-mail все же введи, плз',
	],
	phone: [
		'📱 Введите, пожалуйста, номер телефона для оперативной связи с вами',
		'Введите, пожалуйста, корректный номер телефона. Иначе мы не сможем c вами оперативно свзаться и вручить приз 📱',
		'❗️ Ну пожалуйста, введи правильный телефон',
		'Ну тебе сложно чтоли? Просто введи свой ТеЛеФоН!',
		'Do you sepak russian? Input phone, please',
		'Я могу долго с тобой препираться, но в итоге проиграешь ты. Введи нофелет, плиз',
		'Упоротость - интересное качество. Но номерок мобилы все же введи, плз',
	]
};