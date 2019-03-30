import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';

const Articles = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardImg top width="10%" src="https://ixxidesign.azureedge.net/media/1676571/Mickey-Mouse-2.jpg?mode=max&width=562&height=613" alt="Card image cap" />
        <CardBody>
          <CardTitle>Jardin D'enfant Smart </CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Lire La Suite</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://i.ytimg.com/vi/MaSrGZM8NA0/maxresdefault.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Jardin D'enfant Rawad</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Lire La Suite</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://i.ytimg.com/vi/Rrrvy5sH8hw/maxresdefault.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Jardin D'enfant Sidi Bou Said </CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Lire La Suite</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="10%" src="https://ixxidesign.azureedge.net/media/1676571/Mickey-Mouse-2.jpg?mode=max&width=562&height=613" alt="Card image cap" />
        <CardBody>
          <CardTitle>Jardin D'enfant Smart </CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Lire La Suite</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="10%" src="https://ixxidesign.azureedge.net/media/1676571/Mickey-Mouse-2.jpg?mode=max&width=562&height=613" alt="Card image cap" />
        <CardBody>
          <CardTitle>Jardin D'enfant Smart </CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Lire La Suite</Button>
        </CardBody>
      </Card>
    </CardGroup>
    
    
  );
};

export default Articles;