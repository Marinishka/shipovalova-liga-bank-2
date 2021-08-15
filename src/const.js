export const ScreenWidth = {
  MOBILE: `320px`,
  TABLET: `768px`,
  DESKTOP: `1024px`
};

export const Purposes = {
  'initial': `Выберите цель кредита`,
  'mortgage': `Ипотечное кредитование`,
  'automotive': `Автомобильное кредитование`
};

export const TabsTitles = {
  CONTRIBUTION: `Вклады`,
  CREDITS: `Кредиты`,
  INSURANCE: `Страхование`,
  ONLINE_SERVICES: `Онлайн-сервисы`
};

export const KeyCodes = {
  ESC: 27,
  ENTER: 13
};

export const Words = {
  MORTGAGE: {
    PURPOSE: `Ипотека`,
    PRICE: `ипотеки`,
    SUM: `ипотеки`,
    DOES_NOT_ISSUE: `ипотечные кредиты`
  },
  AUTOMOTIVE: {
    PURPOSE: `Автокредит`,
    PRICE: `автомобиля`,
    SUM: `автокредита`,
    DOES_NOT_ISSUE: `автокредиты`
  }
};

export const Values = {
  MORTGAGE: {
    VALUE: `mortgage`,
    TITLE: `Стоимость недвижимости`,
    PRICE: {
      MIN: `1200000`,
      MAX: `25000000`,
      STEP: `100000`
    },
    MIN_PERCENT: `10`,
    MIN_CREDIT: 500000,
    INTEREST_RATE: {
      FEE: 15,
      HIGHER_FEE: 8.5,
      LOWER_FEE: 9.4
    }
  },
  AUTOMOTIVE: {
    VALUE: `automotive`,
    TITLE: `Стоимость автомобиля`,
    PRICE: {
      MIN: `500000`,
      MAX: `5000000`,
      STEP: `50000`
    },
    MIN_PERCENT: `20`,
    MIN_CREDIT: 200000,
    INTEREST_RATE: {
      CASCO_AND_LIFE_INSURANCE: 3.5,
      CASCO_OR_LIFE_INSURANCE: 8.5,
      HIGHER_FEE: 15,
      LOWER_FEE: 16,
      FEE: 2000000
    }
  }
};

export const MATERNAL_CAPITAL = 470000;

export const InitialState = {
  purpose: `initial`,
  values: null,
  property: 0,
  fee: 0,
  isMaternalCapital: false,
  isCasco: false,
  isLifeInsurance: false,
  percent: 0,
  term: 5,
  amountOfCredit: 0,
};

export const Coordinates = {
  MOSCOW: [55.558741, 37.378847],
  SARATOV: [51.5406, 46.0086],
  KAZAN: [55.7887, 49.1221],
  TYUMEN: [57.15, 65.54],
  OMSK: [54.9924, 73.3686]
};

export const MAP_ICON_SIZE = [32, 40];

export const PrefixTel = {
  RUS: `+7`
};

export const PREFIX_APPLICATION_NUMBER = `0`;

export const ERROR_MSG = `Некорректное значение`;

export const TermYears = {
  MIN: `5`,
  MAX: `30`
};

export const WordForms = {
  RUB: [` рубль`, ` рубля`, ` рублей`],
  YEAR: [` год`, ` года`, ` лет`]
};

export const NavigationItems = {
  HEADER: {
    'Услуги': `#`,
    'Рассчитать кредит': `/calculator`,
    'Конвертер валют': `/converter`,
    'Контакты': `#`
  },
  FOOTER: {
    'Услуги': `#`,
    'Рассчитать кредит': `/calculator`,
    'Контакты': `#`,
    'Задать вопрос': `#`
  }
};

export const ImgLogo = {
  WIDTH: `116`,
  HEIGHT: `19`,
  ALT: `Логотип Лига Банк`
};

export const IconLogin = {
  WIDTH: `14`,
  HEIGHT: `16`,
  ALT: `Войти в Интернет-банк`
};

export const ImgLogoModal = {
  WIDTH: `151`,
  HEIGHT: `31`,
  ALT: `Логотип Лига Банк`
};

export const ImgsSlider = {
  WHITE_CARD: {
    WIDTH: `335`,
    HEIGHT: `228`,
    ALT: `Белая карта банка`
  },
  BLACK_CARD: {
    WIDTH: `335`,
    HEIGHT: `228`,
    ALT: `Черная карта банка`
  }
};

export const BACKEND_URL = `https://www.cbr-xml-daily.ru/daily_json.js`;

export const REQUEST_TIMEOUT = 5000;

export const BASE_URL = `https://www.cbr-xml-daily.ru`;

export const NUMBER_OF_DAYS = 7;

export const INITIAL_TABLE = [];

export const TIMEOUT = 5000;

export const StatusCodes = {
  OK: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  SERVER_ERROR_FIRST: 500,
  SERVER_ERROR_LAST: 509
};

export const Routes = {
  MAIN: `/`,
  CONVERTER: `/converter`,
  NOT_FOUND: `/not_found`,
  CALCULATOR: `/calculator`
};

export const CORRENCY_CALCULATION_RATIO = 1000;

export const CONNECTION_ERROR = `Network Error`;

export const Valutes = {
  RUB: `RUB`,
  USD: `USD`,
  EUR: `EUR`,
  GBR: `GBP`,
  CNY: `CNY`
};
