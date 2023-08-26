import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as CSSCascadesBlockRouterMetaData } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as TextFundamentsMetaData } from './TextFundaments/router-data';
import { blockRouterMetaData as StandardTagsMetaData } from './StandardTags/router-data';
import { blockRouterMetaData as GoogleFontsMetaData } from './GoogleFonts/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  CSSCascadesBlockRouterMetaData,
  TextFundamentsMetaData,
  StandardTagsMetaData,
  GoogleFontsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
