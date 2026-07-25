import { Row, Col, Alert } from 'reactstrap';
import { PropsWithChildren } from 'react';
import ProfileContact from './contact';
import ProfileImage from './image';
import { EmptyRowCol } from '../common';
import { IProfile } from './IProfile';
import { Style } from '../common/Style';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProfile.Payload;

export const Profile = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { image, contact, name, notice } = payload;
  return (
    <div className="mt-5">
      <Row className="profile-row">
        <Col md={3} sm={12} className="profile-image-col">
          <ProfileImage src={image} />
        </Col>
        <Col md={9} sm={12}>
          {createNameArea(name)}
          {createProfileContactMap(contact)}
          {createNoticeArea(notice)}
        </Col>
      </Row>
      <style jsx global>{`
        @media print {
          .profile-row {
            display: flex !important;
            align-items: stretch !important;
          }
          .profile-image-col {
            display: flex !important;
          }
          .profile-image-col > div {
            display: flex !important;
            width: 100%;
          }
          .profile-image-col img {
            height: 100% !important;
            width: auto !important;
            max-height: none !important;
            object-fit: cover !important;
          }
        }
      `}</style>
    </div>
  );
}

function createNameArea(name: Payload['name']) {
  return (
    <Row>
      <Col className="text-center text-md-left">
        <h1 style={Style.blue}>
          {name.title} <small>{name.small || ''}</small>
        </h1>
      </Col>
    </Row>
  );
}

function createProfileContactMap(contacts: Payload['contact']) {
  return (
    <Row>
      <Col className="pt-2">
        {contacts.map((contact, index) => (
          <ProfileContact key={index.toString()} payload={contact} />
        ))}
      </Col>
    </Row>
  );
}

function createNoticeArea(notice: Payload['notice']) {
  return (
    <EmptyRowCol>
      <Alert color="secondary" role="alert" className="mt-2" style={Style.bold}>
        {notice.title}
      </Alert>
    </EmptyRowCol>
  );
}
