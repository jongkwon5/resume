/* eslint-disable import/no-named-as-default-member */
import { Badge, Col, Row } from 'reactstrap';
import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IExperience } from './IExperience';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IRow } from '../common/IRow';

type PositionWithDates = IExperience.Position & {
  startedAtDate: DateTime;
  endedAtDate: DateTime | null;
  isCurrent: boolean;
};

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  const positionsWithDates: PositionWithDates[] = item.positions.map((position) => ({
    ...position,
    startedAtDate: DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
    endedAtDate: position.endedAt
      ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
      : null,
    isCurrent: !position.endedAt,
  }));

  const sortedPositions = positionsWithDates
    .slice()
    .sort((a, b) => b.startedAtDate.toMillis() - a.startedAtDate.toMillis());

  const minStartedAt = DateTime.min(...sortedPositions.map((position) => position.startedAtDate));
  const isCurrentlyEmployed = sortedPositions.some((position) => position.isCurrent);

  function hasEndedAtDate(
    position: PositionWithDates,
  ): position is PositionWithDates & { endedAtDate: DateTime } {
    return position.endedAtDate !== null;
  }

  const endedAtDates = sortedPositions
    .filter(hasEndedAtDate)
    .map((position) => position.endedAtDate);

  let maxEndedAt: DateTime;
  if (isCurrentlyEmployed) {
    maxEndedAt = DateTime.local();
  } else if (endedAtDates.length > 0) {
    maxEndedAt = DateTime.max(...endedAtDates);
  } else {
    maxEndedAt = DateTime.local();
  }

  const periodTitle = createOverallWorkingPeriod(sortedPositions);
  const hasMultiplePositions = sortedPositions.length > 1;

  return (
    <div>
      {index > 0 && <hr />}
      {/* 최상위 Row: 전체 재직 기간과 회사명 표시 */}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h4 style={Style.gray}>{periodTitle}</h4>
        </Col>
        <Col sm={12} md={9}>
          <h4 style={{ display: 'inline-flex', alignItems: 'center' }}>
            {item.title}{' '}
            <span style={{ fontSize: '65%', display: 'inline-flex', alignItems: 'center' }}>
              {isCurrentlyEmployed && (
                <Badge color="primary" className="ml-1">
                  재직 중
                </Badge>
              )}
              <Badge color="info" className="ml-1">
                {Util.getFormattingDuration(minStartedAt, maxEndedAt)}
              </Badge>
            </span>
          </h4>
        </Col>
      </Row>
      {/* 각 Position을 최신 순으로 반복하여 개별 재직 기간과 직책 표시 */}
      {sortedPositions.map((position, posIndex) => (
        <Row key={posIndex.toString()} className="mt-0">
          <Col sm={12} md={3} className="text-md-right">
            {hasMultiplePositions && (
              <span style={Style.gray}>
                {createWorkingPeriod(position.startedAtDate, position.endedAtDate)}
              </span>
            )}
          </Col>
          <Col sm={12} md={9}>
            <i style={Style.gray}>{position.title}</i>
            <ul className="pt-2">
              {renderDescriptions(position.descriptions)}
              {createSkillKeywords(position.skillKeywords)}
            </ul>
          </Col>
        </Row>
      ))}
    </div>
  );
}

function createOverallWorkingPeriod(positions: PositionWithDates[]) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;
  const startedAt = positions[positions.length - 1].startedAtDate;
  const currentPosition = positions.find((position) => position.isCurrent);

  if (currentPosition) {
    // 종료일이 없는 현재 재직 중
    return `${startedAt.toFormat(DATE_FORMAT)} ~`;
  }

  const endedAtDates = positions
    .filter((p): p is PositionWithDates & { endedAtDate: DateTime } => p.endedAtDate !== null)
    .map((p) => p.endedAtDate!);

  const endedAt = endedAtDates.length > 0 ? DateTime.max(...endedAtDates) : DateTime.local();

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return null;
  }
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          <Badge
            style={Style.skillKeywordBadge}
            key={index.toString()}
            color="secondary"
            className="mr-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}

function createWorkingPeriod(startedAt: DateTime, endedAt?: DateTime | null) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;

  if (!endedAt) {
    return `${startedAt.toFormat(DATE_FORMAT)} ~`;
  }

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}

function getFontWeight(weight?: IRow.FontWeightType): React.CSSProperties['fontWeight'] {
  switch (weight) {
    case 'LIGHT':
      return 300;
    case 'REGULAR':
      return 400;
    case 'MEDIUM':
      return 500;
    case 'BOLD':
      return 700;
    case 'BOLDER':
      return 700;
    default:
      return 300;
  }
}

function renderDescriptions(descriptions: Array<string | IRow.Description>) {
  return descriptions.map((desc, index) => {
    if (typeof desc === 'string') {
      // eslint-disable-next-line react/no-array-index-key
      return <li key={index}>{desc}</li>;
    }

    return (
      // eslint-disable-next-line react/no-array-index-key
      <li key={index} style={{ fontWeight: getFontWeight(desc.weight) }}>
        {desc.content}
        {desc.descriptions && desc.descriptions.length > 0 && (
          <ul>{renderDescriptions(desc.descriptions)}</ul>
        )}
      </li>
    );
  });
}
