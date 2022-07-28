import  english from"./english";
import  arabic from'./arabic';
// export getResponseMessage          =  getResponseMessage;

const LANGUAGES = {
    ENGLISH             : 'en',
    ARABIAN             : 'ar'
  };
  
  const LANGUAGES_REVERSE_MAP = {
    'en'     : "English",
    'ar'     : "Arabic"
  };
  
  const languageArray = Object.values(LANGUAGES);
 
 export default function getResponseMessage(language) {
  console.log("multilanguage",language)
    switch (language) {
      case LANGUAGES.ENGLISH:
        return english.responseMessages;
      case LANGUAGES.ARABIAN:
        return arabic.responseMessages;

      // case LANGUAGES.FRENCH:
      //   return french.responseMessages[code];
      // 
      // case LANGUAGES.SPANISH:
      //   return spanish.responseMessages[code];
      // case LANGUAGES.MALAY:
      //   return malay.responseMessages[code];
      // case LANGUAGES.SIMPLIFIED_CHINESE:
      //   return simplifiedChinese.responseMessages[code];
      // case LANGUAGES.PORTUGUESE:
      //   return portuguese.responseMessages[code];
      // case LANGUAGES.TRADITIONAL_CHINESE:
      //   return traditionalChinese.responseMessages[code];
      // case LANGUAGES.BENGALI:
      //   return bengali.responseMessages[code];
      // case LANGUAGES.MEXICAN_SPANISH:
      //   return mexicanSpanish.responseMessages[code];
      // case LANGUAGES.KHMER :
      //   return khmer.responseMessages[code];
      // case LANGUAGES.TAMIL :
      //   return tamil.responseMessages[code];
      // case LANGUAGES.SINHALA :
      //   return sinhala.responseMessages[code];
      // case LANGUAGES.SWEDISH :
      //   return swedish.responseMessages[code];
      // case LANGUAGES.GREEK : 
      //   return greek.responseMessages[code];
      // case LANGUAGES.DUTCH : 
      //   return dutch.responseMessages[code];
      // case LANGUAGES.KOREAN : 
      //   return korean.responseMessages[code];
      // case LANGUAGES.BRAZILIAN_PORTUGUESE :
      //   return brazilianPortuguese.responseMessages[code];
      // case LANGUAGES.THAI :
      //   return thai.responseMessages[code];
      default :
        return english.responseMessages;
    }
}
  
