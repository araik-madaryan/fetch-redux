import React from 'react';
import { Card } from 'semantic-ui-react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ListGames.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};

function ListGames(props) {
  const { games, deviceType } = props;
  return (
    <div className="ListGames">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
      >
        {games.map((games, i) => 
        <span className=".item-car" key={i}>
          <Card>
            <Card.Content>
              <Card.Header>{games.name}</Card.Header>
              <Card.Meta>
                <span>{games.releaseDate}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </span>)}
      </Carousel>
    </div>
  );
}

export default ListGames;
