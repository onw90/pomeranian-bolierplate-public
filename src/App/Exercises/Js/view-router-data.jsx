import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataifSwitch } from './ifSwitch/router-data';
import { blockRouterMetaData as blockRouterMetaDataNumbers } from './Numbers/router-data';
import { blockRouterMetaData as blockRouterMetaJsNumbersTraining } from './JsNumberTraining/router-data';
import { blockRouterMetaData as blockRouterMetaJsComplexTypes } from './Exercise-js-complex-types/router-data';
import { blockRouterMetaData as blockRouterMetaJsFunctionBasics } from './JsFunctionBasics/router-data';
import { blockRouterMetaData as blockRouterMetaBlok22Warmup } from './Blok22Warmup/router-data';
import { blockRouterMetaData as blockRouterMetaSetTimeout } from './SetTimeout/router-data';
import { blockRouterMetaData as blockRouterMetaVanishString } from './VanishString/router-data';
import { blockRouterMetaData as blockRouterMetaTimer } from './Timer/router-data';
import { blockRouterMetaData as blockRouterMetaBanner } from './Banner/router-data';
import { blockRouterMetaData as blockRouterMetaHitTheMoleGame } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as blockRouterMetaFunctionsZad } from './FunctionsZad/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBoolean,
  blockRouterMetaDataifSwitch,
  blockRouterMetaDataNumbers,
  blockRouterMetaJsNumbersTraining,
  blockRouterMetaJsComplexTypes,
  blockRouterMetaJsFunctionBasics,
  blockRouterMetaBlok22Warmup,
  blockRouterMetaSetTimeout,
  blockRouterMetaVanishString,
  blockRouterMetaTimer,
  blockRouterMetaBanner,
  blockRouterMetaHitTheMoleGame,
  blockRouterMetaFunctionsZad,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
