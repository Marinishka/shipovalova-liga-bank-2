export const ScreenWidth = {
  MOBILE: `320px`,
  TABLET: `768px`,
  DESKTOP: `1024px`
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
      FEE: 2000000,
      HIGHER_FEE: 15,
      LOWER_FEE: 16,
      CASCO_OR_LIFE_INSURANCE: 8.5,
      CASCO_AND_LIFE_INSURANCE: 3.5
    }
  }
};

export const MATERNAL_CAPITAL = 470000;

export const InitialState = {
  purpose: null,
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
