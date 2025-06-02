/* eslint-disable react/no-array-index-key */
import { PropsWithChildren, CSSProperties } from 'react';
import { Badge } from 'reactstrap';
import { IRow } from './IRow';
import { HrefTargetBlank } from '.';

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
}: PropsWithChildren<{ descriptions: IRow.Description[]; option?: { padding?: boolean } }>) {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? 'pt-2' : ''}>
          {descriptions.map((description, descIndex) => {
            return (
              <>
                <Description description={description} key={descIndex.toString()} />
                {description.descriptions ? (
                  <DescriptionRecursion
                    descriptions={description.descriptions}
                    key={descIndex.toString()}
                  />
                ) : (
                  ''
                )}
              </>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  return (
    <ul>
      {descriptions.map((description, index) => {
        return (
          <>
            <Description description={description} key={index.toString()} />
            {description.descriptions ? (
              <DescriptionRecursion
                descriptions={description.descriptions}
                key={index.toString()}
              />
            ) : (
              ''
            )}
          </>
        );
      })}
    </ul>
  );
}

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  const { content, href, postImage, postHref, weight, skillKeywords } = description;

  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} /> <img src={postImage} alt={postImage} />
          {renderSkillKeywords(skillKeywords)}
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} />
          {renderSkillKeywords(skillKeywords)}
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={postImage} />
          {renderSkillKeywords(skillKeywords)}
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />
          {renderSkillKeywords(skillKeywords)}
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={imgStyle}>
          <img src={postImage} alt={postImage} style={aaa} />
        </li>
      );
    }
    return (
      <li style={getFontWeight(weight)}>
        {content}
        {renderSkillKeywords(skillKeywords)}
      </li>
    );
  })();

  return component;
}

// 🔥 skillKeywords 렌더링 함수
function renderSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords || skillKeywords.length === 0) {
    return null;
  }
  return (
    <div>
      {skillKeywords.map((keyword, index) => (
        <Badge key={index} color="secondary" className="mr-1" style={{ fontWeight: 400 }}>
          {keyword}
        </Badge>
      ))}
    </div>
  );
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

// Noto Sans KR Weights: 300, 400, 500, 700
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  LIGHT: 300,
  REGULAR: 300,
  MEDIUM: 500,
  BOLDER: 700,
  BOLD: 500,
};
const imgStyle: CSSProperties = {
  maxHeight: '20rem',
  width: '100%',
  height: 'auto',
  maxWidth: '60em',
  listStyle: 'none',
  marginLeft: '-1.2em',
};
const aaa: CSSProperties = {
  height: 'auto',
  maxHeight: '19.4rem',
  width: '100%',
  maxWidth: '40rem',
  listStyle: 'none',
  marginLeft: '-1.2em',
  border: '2px solid grey',
  marginBottom: '1rem',
  marginTop: '2px',
};
