import { Badge } from 'reactstrap';
import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IProject } from './IProject';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

export default function ProjectRow({ payload }: PropsWithChildren<{ payload: IProject.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(payload: IProject.Item): IRow.Payload {
  const startedAtDate = DateTime.fromFormat(payload.startedAt, 'yy-LL-dd');
  const endedAtDate = payload.endedAt
    ? DateTime.fromFormat(payload.endedAt, 'yy-LL-dd')
    : DateTime.local();

  const duration = Util.getFormattingDuration(startedAtDate, endedAtDate);

  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = startedAtDate.toFormat(DATE_FORMAT.YYYY_DOT_LL);

  const leftTitle = (() => {
    if (payload.endedAt) {
      const endedAt = endedAtDate.toFormat(DATE_FORMAT.YYYY_DOT_LL);
      return `${startedAt} ~ ${endedAt}`;
    }
    return `${startedAt} ~`;
  })();

  return {
    left: {
      title: leftTitle,
    },
    right: {
      title: (
        <h4 style={{ display: 'flex', alignItems: 'center' }}>
          {payload.title}{' '}
          <span style={{ fontSize: '65%', display: 'inline-flex', alignItems: 'center' }}>
            <Badge color="info" className="ml-1">
              {duration}
            </Badge>
          </span>
        </h4>
      ),
      subTitle: payload.where,
      descriptions: payload.descriptions,
      img: payload.img,
    },
  };
}
