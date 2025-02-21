import { CSSProperties } from 'react';

/** Style 추론을 위하여.. */
type TStyleKey =
  | 'blue'
  | 'gray'
  | 'global'
  | 'sign'
  | 'profileImg'
  | 'footerCover'
  | 'footer'
  | 'skillKeywordBadge'
  | 'bold';

export const Style: Record<TStyleKey, CSSProperties> = {
  blue: {
    color: '#3c78d8',
  },

  bold: {
    fontSize: '1.2em',
    color: 'black',
    fontWeight: 500,
  },

  gray: {
    color: 'gray',
    fontSize: '1.35em',
  },

  global: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 350,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.9,
  },

  sign: {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em',
    marginTop: '0.5em',
    marginBottom: '1em',
  },

  profileImg: {
    maxHeight: '320px',
  },

  footerCover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginTop: '50px',
    marginBottom: '0px',
    height: '70px',
    fontSize: '1.1em',
  },

  footer: {
    // paddingTop: '10px',
  },

  skillKeywordBadge: {
    fontWeight: 400,
  },
};
