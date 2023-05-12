import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from 'reactstrap';

const FeedData = [
  {
    title: 'Latest consultant ',
    icon: 'bi bi-bell',
    color: 'primary',
    date: '4 days ago',
    id: 1,
  },
  {
    title: 'Dr.Shalini is available',
    icon: 'bi bi-person',
    color: 'info',
    date: '15 minute ago',
    id: 2,
  },
  {
    title: 'Consult at near hospitals',
    icon: 'bi bi-hdd',
    color: 'danger',
    date: '6 minute ago',
    id: 3,
  },
  {
    title: 'New order received.',
    icon: 'bi bi-bag-check',
    color: 'success',
    date: '6 minute ago',
    id: 4,
  },
  {
    title: 'Appointment Remainder',
    icon: 'bi bi-bell',
    color: 'dark',
    date: '6 minute ago',
    id: 5,
  },
  {
    title: 'Track your Health',
    icon: 'bi bi-hdd',
    color: 'warning',
    date: '6 minute ago',
    id: 6,
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Notofications</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Latest Update for you 
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed) => (
            <ListGroupItem
              key={feed.id}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button className="rounded-circle me-3" size="sm" color={feed.color}>
                <i className={feed.icon} />
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">{feed.date}</small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
