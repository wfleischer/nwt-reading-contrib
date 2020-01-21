﻿// Language resources
//
// (c) Searchwork.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 2.0.0. Any missing item will fall back to english
//
export default {
    // Name of the language
    me: 'Polski',

    // Pages
    pages: {
        schedule: 'Harmonogram',
        settings: 'Ustawienia',
        help: 'Pomoc',
        storedData: 'Przechowywanie danych',
        privacyPolicy: 'Polityka Prywatności'
    },

    // Schedule page
    //
    plans_header: 'Wybierz plan czytania',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Sekwencyjny',
        // In the order the Bible books were written
        written: 'Jak napisano',
        // In the order the events happened
        chronological: 'Chronologiczny (experymentalny)',
        // Christian Greek Scriptures only
        //greekScriptures: 'Chrześcijańskie Pisma Greckie'
    },
    speed_header: 'Tempo',

    // Settings page 
    //
    english: 'Angielski',
    language: {
        label: 'Język',
        placeholder: 'Język',
        title: 'Wybierz język',
        contribute: 'Przyczyń sie do tłumaczenia'
    },
    startOver: {
        label: 'Zacznij od nowa',
        title: 'Zacznij od nowa',
        description: 'Wyczyść status czytania i ustaw dzisiaj jako datę rozpoczęcia.',
        question: 'Czy chcesz wyczyścić status czytania i ustawić dzisiaj jako datę rozpoczęcia??'
    },
    continueAt: {
        label: 'Kontynuuj od',
        placeholder: '<wybierz>',
        title: 'Wybierz, gdzie kontynuować czytanie',
        description: 'Wszystkie poprzednie sekcje zostaną oznaczone jako przeczytane, a następne jako nieprzeczytane.',
        question: 'Czy chcesz ustawić wszystkie poprzednie sekcje do czytania, a te do nieprzeczytanych??'
    },
    WOLreferences: {
        label: 'Odsyłacze w WOL',
        description: 'Pokaż odsyłacze w BIBLIOTECE INTERNETOWEJ Strażnicy.',
    },
    help: 'Pomoc',
    legal: 'Prawne',
    version: 'Wersja',

    // Bible
    //
    // Ordered list of the Bible books
    books: [
        'Rodzaju', 'Wyjścia', 'Kapłańska', 'Liczb', 'Powtórzonego Prawa',
        'Jozuego', 'Sędziów', 'Rut', '1 Samuela', '2 Samuela',
        '1 Królów', '2 Królów', '1 Kronik', '2 Kronik',
        'Ezdrasza', 'Nehemiasza', 'Estery', 'Hioba',
        'Psalmy', 'Przysłów', 'Kaznodziei', 'Pieśń nad Pieśniami',
        'Izajasza', 'Jeremiasza', 'Lamentacje', 'Ezechiela', 'Daniela',
        'Ozeasza', 'Joela', 'Amosa', 'Abdiasza', 'Jonasza', 'Micheasza', 'Nahuma',
        'Habakuka', 'Sofoniasza', 'Aggeusza', 'Zachariasza', 'Malachiasza',
        'Mateusza', 'Marka', 'Łukasza', 'Jana', 'Dzieje',
        'Rzymian', '1 Koryntian', '2 Koryntian',
        'Galatów', 'Efezjan', 'Filipian', 'Kolosan',
        '1 Tesaloniczan', '2 Tesaloniczan', '1 Tymoteusza', '2 Tymoteusza',
        'Tytusa', 'Filemona', 'Hebrajczyków', 'Jakuba',
        '1 Piotra', '2 Piotra', '1 Jana', '2 Jana', '3 Jana',
        'Judy', 'Objawienie'
    ],
    // Base link to the Bible at jw.org in this language
    // (On the Bible tab open Genesis, chapter 1, and use the link without "/genesis/1/")
    baseURL: 'https://www.jw.org/pl/biblioteka/biblia/nwt/ksiegi-biblijne',


    // ----------  Translating below section is OPTIONAL  vvvvvvvvvv
    //
    // Below information can be found in the WOL at the provided link
    // after switching to your language
    chart: {
        URL: 'https://wol.jw.org/pl/wol/d/r12/lp-p/1101990130#h=252',
        text: 'Zdarzenia oparte na',
        book: '“Całe Pismo natchnione przez Boga i pożyteczne”',
        chapter: 'Studium 3- Umiejscawianie wydarzeń w strumieniu czasu',
        caption: 'Ważne daty historyczne',
    },
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'po.': 'po.',
        'przed.': 'przed.',
        'ok.': 'ok.',
        'n.e.': 'n.e.',
        'p.n.e.': 'p.n.e.'
    },


    // Help
    //
    // Help
    helpPage: [
        'About',
        'NWT Reading helps you to keep track of your reading schedule of the \
            New World Translation of the Holy Scriptures of Jehovah\'s Witnesses.',

        'How it Works',
        'Read right away from the beginning and check each section that you have read.',
        'If you want to start at the current position of your Bible reading, select \
            "Continue at" on the Settings page.',
        'After finishing reading the Bible select "Start Over" on the Settings page.',
    ],

    // Stored Data
    storedDataPage: [
        'This is a dump of all the data that is stored in the app. \
            It can be useful for troubleshooting and privacy checking.'
    ],

    // Legal
    //
    // Privacy Policy
    privacyPolicyPage: [
        'The NWT Reading mobile application (the “PRODUCT”) does not collect \
        any personal information. All data is stored locally.',

        'Searchwork.org, does not allow advertising companies to collect data through \
        our PRODUCT for ad targeting. \
        We do not share data collected by this PRODUCT with other organizations \
        for any purpose.',

        'This privacy policy was last updated on 05/04/2019. \
        Our privacy policy may change from time to time. \
        You are advised to review this Privacy Policy periodically for any changes. \
        Changes to this Privacy Policy are effective when they are posted on this page.'
    ],
    // ^^^^^^^^^^^^  Translating above section is OPTIONAL  ------------
};