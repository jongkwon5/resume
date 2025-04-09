import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol, HrefTargetBlank } from '../common';
import { IFooter } from './IFooter';
import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-4">
          <EmptyRowCol>
            <>
              {payload.aa}
              {/* Github 주소는 origin repository 의 주소를 넣는다. */}
              <HrefTargetBlank url="https://jongkwon5.github.io/resume" text="이력서 링크 " />
            </>
            /
            <>
              {payload.aa}
              {/* Github 주소는 origin repository 의 주소를 넣는다. */}
              <HrefTargetBlank
                url="https://drive.google.com/file/d/1-zKsMKU03vWw3vGDpC7ONrLNeDq25ngf/view?usp=drive_link"
                text=" 포트폴리오 링크"
              />
            </>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
}
