import React, { Component } from 'react';
import Slide from './slide';
import RightArrow from './rightarrow';
import LeftArrow from './leftarrow';

export default class Slider extends Component {
    constructor(props) {
        super();
        this.state = {
            images: [
                'kodflix-thumbnail.jpg',
                '8daysaweek-thumbnail.jpg',
                'portfolio-thumbnail.jpg'
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if(this.state.currentIndex === 0)
        return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
          }));
        
    }

    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
          }));
          
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
     }

    render() {
        return (
        <div>
            <LeftArrow 
                 goToPrevSlide={this.goToPrevSlide}
            />
            <RightArrow 
                goToNextSlide={this.goToNextSlide}
            />
            <div className="slider">
                <div className="slider-wrapper"
            style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
            }}></div>
                {
                this.state.images.map((image, i) => (
                  <Slide key={i} image={image} />
                ))
                }

            </div>
        </div>
        )
    }
}