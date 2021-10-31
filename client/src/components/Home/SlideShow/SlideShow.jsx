import React from 'react';
import ReactDOM from 'react-dom';
import "./SlideShow.css"; 

class SlideShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0
    };

    const ratioWHArray = this.props.ratio.split(":");
    this.ratioWH = ratioWHArray[0] / ratioWHArray[1];

    this.setSlideIndex = this.setSlideIndex.bind(this);
    this.getNewSlideIndex = this.getNewSlideIndex.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.runAutomatic = this.runAutomatic.bind(this);
  }

  getNewSlideIndex(step) {
    const slideIndex = this.state.slideIndex;
    const numberSlide = this.props.input.length;

    let newSlideIndex = slideIndex + step;

    if (newSlideIndex >= numberSlide) newSlideIndex = 0;
    else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

    return newSlideIndex;
  }

  setSlideIndex(index) {
    this.setState({
      slideIndex: index
    });
  }

  updateDimensions() {
    this.containerElm.style.height = `${this.containerElm.offsetHeight / this.ratioWH}px`;
  }

  runAutomatic() {
    this.setState({
      slideIndex: this.getNewSlideIndex(1)
    });
  }

  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this);
    this.containerElm = this.rootElm.querySelector(".slide");

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    if (this.props.mode === "automatic") {
      const timeout = this.props.timeout || 2811;

      this.automaticInterval = setInterval(
        () => this.runAutomatic(),
        Number.parseInt(timeout)
      );
    }
  }
    
  componentWillMount() {
    window.removeEventListener("resize", this.updateDimensions);
    if (this.automaticInterval) clearInterval(this.automaticInterval);
  }


  render() {
    return (
      <div className="lp-slideshow">
        {
          this.props.input.map((image, index) => {
            return (
              <div
                key={index}
                className={`slide ${
                  this.state.slideIndex === index ? "active" : ""
                }`}
              >
                <img className="image" src={process.env.PUBLIC_URL + image.src} alt={image.caption} />
              </div>
            ); 
          })
        }
      </div>
    )
  }
}
export default SlideShow;
