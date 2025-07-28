import { Badge, Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { EmptyRowCol } from '../common';
import { Style } from '../common/Style';
import { IExperience } from './IExperience';
import ExperienceRow from './row';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import Util from '../common/Util';

type Payload = IExperience.Payload;

export function getTotalCareerDuration(payload: IExperience.Payload): string {
  const allPositions = payload.list
    .map((item) => item.positions)
    .reduce<IExperience.Position[]>((acc, val) => [...acc, ...val], []);

  if (allPositions.length === 0) return '';

  let totalMonths = 0;

  allPositions.forEach((position) => {
    const startedAt = DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL);
    const endedAt = position.endedAt
      ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
      : DateTime.local();

    const yearDiff = endedAt.year - startedAt.year;
    const monthDiff = endedAt.month - startedAt.month;

    const monthsBetween = yearDiff * 12 + monthDiff + 1; // +1 포함해서 계산
    totalMonths += monthsBetween;
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = '';
  if (years > 0) result += `${years}년 `;
  if (months > 0) result += `${months}개월`;

  return result.trim();
}

export const Experience = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  // 여기는 기간 표시, Skill Keywords 같은 특이 요소가 있어서 CommonSection, CommonRow 로 못바꾸지 않을까..
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>
              EXPERIENCE
              <Badge
                color="info"
                className="ml-2"
                style={{
                  fontSize: '38%',
                  verticalAlign: 'middle',
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: '-6px',
                }}
              >
                총 {getTotalCareerDuration(payload)}
              </Badge>
            </h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}
