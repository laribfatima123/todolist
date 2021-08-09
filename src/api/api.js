/* eslint-disable */

let language;

export default {
  //Get Data
  GET_BRANDS: language => `/api/${language}/all-brands`,
  GET_CATEGORIES: '/api/en/all-categories',
  GET_PRODUCTS: '/api/en/all-products',

  GET_NAVBAR_CATEGORY: '/api/en/all-categories-with-products',

  //ProductApi
  GET_SINGLE_PRODUCT: '/api/en/single-product/',
  GET_FILTERS: 'api/en/filter/products/conditions',
  POST_PRODUCTS: '/api/en/all-products',

  //Register
  REGISTER_USER: 'api/en/user/register',
  REGISTER_VENDOR: 'api/en/vendor/register',

  //Login
  LOGIN_USER: 'api/en/user/login',
  GOOGLE_LOGIN: '/api/en/user/social-login',

  RESEND_EMAIL: 'api/en/user/email/resend',
  FORGOT_PASSWORD: 'api/en/user/forget/password',
  CHANGE_PASSWORD: 'api/en/user/change/password',

  //Get Settings
  GET_SHIPPING_METHODS: 'api/en/site/settings/supported_shipping_methods',
  GET_PAYMENT_METHODS: 'api/en/site/settings/active_payment_methods',
  GOOGLE_CLIENT_ID: '/api/en/site/settings/google_login_client_id',

  //Checkout
  GUEST_CHECKOUT: 'api/api/checkout/guest/order',
  LOGIN_CHECKOUT: 'api/api/checkout/order',
  BUY_NOW_CHECKOUT: '/api/en/buy-now/order',

  //Cart Crud for logged in user
  VIEW_CART: 'api/en/cart',
  ADD_TO_CART: 'api/en/cart/add/item',
  ADD_SHIPPING_METHOD: 'api/en/cart/add/shipping-method',
  UPDATE_ITEM_IN_CART: '/api/en/cart/update/item',
  REMOVE_ITEM_FROM_CART: '/api/en/cart/delete/item',

  //Orders
  TRACK_ID: '/api/user/orders/track/',
  VIEW_ALL_ORDER: '/api/user/orders',
  VIEW_RECENT_ORDER: '/api/user/recent/orders',
  VIEW_SINGLE_ORDER: '/api/user/orders/',

  //User
  UPDATE_PROFILE: '/api/en/user/update/profile',
  UPDATE_PASSWORD: '/api/en/user/update/password',
  GET_DETAILS: '/api/en/user/details',

  //Quote
  SEND_QUOTE_GUEST: '/api/en/quote/add/item/guest-user',
  SEND_QUOTE_LOGIN: '/api/en/quote/add/item',
  VIEW_ALL_QUOTES: '/api/en/quote',
  VIEW_SINGLE_QUOTE: '/api/en/quote/',
  SEND_QUOTE_MESSAGE: '/api/en/quote/send/message',
  UPDATE_QUOTE: '/api/en/quote/update/item',

  //Address
  ADD_ADDRESS: '/api/en/addresses/store',
  GET_ADDRESS: '/api/en/addresses',
  GET_SINGLE_ADDRESS: '/api/en/addresses/edit/',
  UPDATE_ADDRESS: '/api/en/addresses/',
  DELETE_ADDRESS: '/api/en/addresses/delete/',

  //Filter
  GET_FILTERS_DUPLICATE: '/api/en/filter/products/duplicate/conditions',

  NEWSLETTER: '/api/en/newsletter/store',

  //Address
  GET_COUNTRIES: '/api/settings/countries',
  GET_STATE: '/api/settings/countries/states/',
  GET_CITY: '/api/settings/countries/states/cities/',
};
