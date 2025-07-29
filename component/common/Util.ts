import _debug from 'debug';

import { DateTime } from 'luxon';

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = 'yyyy-LL-dd',
  YYYY_LL = 'yyyy-LL',
  YY_LL_DD = 'yy-LL-dd',
  YY_DOT_LL_DOT_DD = 'yy. MM. dd.',
  YYYY_DOT_LL = 'yyyy. LL',
  YYYY_DOT_LL_DOT_DD = 'yyyy. LL. dd.',
  KINDNESS_FULL = 'DDDD',

  DURATION_KINDNESS = 'y년 M개월',
  DURATION_KINDNESS_ONLY_MONTH = 'M개월',
}

export function getFormattingDuration(start: DateTime, end: DateTime): string {
  const startYearMonth = start.year * 12 + start.month;
  const endYearMonth = end.year * 12 + end.month;

  let totalMonths = endYearMonth - startYearMonth;

  // 날짜(day) 차이에 따라 1개월 추가 여부 결정
  if (end.day >= start.day) {
    totalMonths += 1;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const result: string[] = [];
  if (years > 0) result.push(`${years}년`);
  if (months > 0) result.push(`${months}개월`);

  return result.length > 0 ? result.join(' ') : '1개월 미만';
}

function debug(channel: string) {
  return _debug(`yosume:${channel}`);
}

const Util = {
  LUXON_DATE_FORMAT,
  getFormattingDuration,
  debug,
};

export default Util;
