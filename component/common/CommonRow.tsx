/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import { PropsWithChildren } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h4 style={Style.gray}>{left.title}</h4>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? <h4>{right.title}</h4> : ''}
          {right.subTitle ? <i style={Style.gray}>{right.subTitle}</i> : ''}
          {right.descriptions && (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          )}
          {/* Skill Keywords 렌더링 추가 */}
          {right.skillKeywords && right.skillKeywords.length > 0 && (
            <ul className="pt-2">
              <li>
                <strong>Skill Keywords</strong>
                <div
                  style={{
                    display: 'inline-flex',
                    flexWrap: 'wrap',
                    gap: '0.25rem',
                    marginTop: '0.5rem',
                  }}
                >
                  {right.skillKeywords.map((keyword, index) => (
                    <Badge
                      key={index}
                      color="secondary"
                      style={{ ...Style.skillKeywordBadge, fontWeight: 300 }}
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </li>
            </ul>
          )}
        </Col>
      </Row>
    </div>
  );
}
