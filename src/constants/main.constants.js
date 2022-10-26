import telegrem from '../resources/img/icons-telegram.png';
import facebook from '../resources/img/icons-facebook.png';
import instagram from '../resources/img/icons-instagram.png';

export const sectionTitles = {
    about: "Про мене",
    portfolio: "Портфоліо",
    price: "Послуги",
    contact: "Зв'язатися",
};

export const buttonNames = {
    order: 'Замовити',
    showMore: 'Більше фото',
    orderPhoto: 'Замовити зйомку',
    send: 'Відправити заявку',
}

export const mainInfo = {
    title: "Анастасія Попович",
    subTitle: "Фотографка",
    buttonText: "Замовити",
  };

export const navItems = [
    { name: "Про мене", link: "about", key: 1 },
    { name: "Портфоліо", link: "portfolio", key: 2 },
    { name: "Послуги", link: "price", key: 3 },
    { name: "Написати мені", link: "contact", key: 4 },
];

export const links = [
    { alt: 'telegram icon', url: telegrem, href: 'https://t.me/popovych' },
    { alt: 'facebook icon', url: facebook, href: 'https://fb.com/' },
    { alt: 'instagram icon', url: instagram, href: 'https://instagram.com/popovych' },
];

export const formText = {
    name: "Ім'я",
    nameHint: "Ім'я має складатися хоча б з 2 букв",
    phone: 'Телефон',
    phoneHint: '+38*** *** **** Будь ласка вкажіть телефон починаючи з 0',
    email: 'Email',
    emailHint: 'Вкажіть пошту у форматі *******@*****.***',
    messageText: 'Опишіть ваші побажання щодо фотосесії',
    messageHint: "Поле не має бути пустим але не більше 3500 символів",
    button: 'Відправити заявку',
    buttonHint: 'Будь ласка заповніть форму',
    sent: 'Повідомлення відправлено',
}

export const footerTexts = {
    header: 'Контактна інформація',
    phoneTitle: 'Телефон',
    phoneContent: '+380 12 345 67 89',
    emailTitle: 'E-mail',
    emailContent: 'info@gmail.com',
    adressTitle: 'Адреса',
    adressContent: 'м.Кривий Ріг, вул.Гагаріна',
    socialsTitle: 'Соціальні мережі',
};