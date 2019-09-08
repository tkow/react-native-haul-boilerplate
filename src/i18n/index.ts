import dic from './dic';
import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';
import memoize from 'lodash.memoize';

const translationGetters: {[lang: string]:() => any} = {
  // lazy requires (metro bundler does not support symlinks)
  ja: () => dic.ja
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: 'ja', isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  if(translate.cache.clear) translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

setI18nConfig();

i18n.fallbacks = true;
i18n.defaultLocale = 'ja';

export default i18n;
