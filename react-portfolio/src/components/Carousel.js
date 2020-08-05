import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import holdUpPic from '../assets/images/holdUpPic.png';
import playPic from '../assets/images/playPic.png';
import inspirePic from '../assets/images/inspirePic.png';


class Carousel extends React.Component {
  constructor(props) {   
      super(props);
      this.state = {
        items: [
      {
          id: 0,
          title: 'HoldUp',
          subTitle: 'Line Management Tool',
          imgSrc: holdUpPic,
          link: 'https://github.com/xevanx/Project-1',
          selected: false
      },
      {
          id: 1,
          title: 'Inspire',
          subTitle: 'Search Tool',
          imgSrc: inspirePic,
          link: 'https://github.com/MylesM18/Project2',
          selected: false
      },
       {
          id: 2,
          title: '!Play',
          subTitle: 'React.js Video Game Hub',
          imgSrc: playPic,
          link: 'https://w-stacker.github.io/FinalProject3/',
          selected: false
      },
    ]
  }
 }
      handleCardClick = (id, card) => {

        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
          if(item.id !== id) {
            item.selected = false;
          }
        });
          this.setState({
            items
          });
        }
          
        
    makeItems = (items) => {
            return items.map(item => {
              return <Card item={item} cl ick={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
    }


    render() {
        return(
          <Container fluid={true}>
            <Row className="justify-content-around">
              {this.makeItems(this.state.items)}
            </Row>
          </Container>
        );
    }
  
  }   
export default Carousel;
