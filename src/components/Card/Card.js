import React, { PureComponent, Fragment as F } from 'react'

class Card extends PureComponent {
  state = {
    opened: false,
    currentTarget: null,
    oldOffsetY: null,
    oldOffsetX: null
  }

  openCard = (event) => {
    if (this.state.opened) return;

    const { currentTarget } = event;
    const offsetY = currentTarget.offsetTop,
          offsetX = currentTarget.offsetLeft,
          height = currentTarget.offsetHeight,
          width = currentTarget.offsetWidth,
          pageY = window.pageYOffset;

    const normalizedOffsetY = offsetY - pageY;

    currentTarget.style.transform = `translate(${-offsetX - 20}px, ${-normalizedOffsetY - 20}px)`;
    window.requestAnimationFrame(() => {
      currentTarget.style.position = 'fixed';
      currentTarget.style.zIndex = '2';
      currentTarget.style.top = normalizedOffsetY + 'px';
      currentTarget.style.left = offsetX + 'px';
      window.requestAnimationFrame(() => {
        this.setState({ 
          opened: true,
          oldOffsetY: normalizedOffsetY,
          oldOffsetX: offsetX,
          currentTarget,
          placeholderWidth: width,
          placeholderHeight: height
        });
        
        currentTarget.style.height = '10000px';
        currentTarget.style.width = '100%';
        currentTarget.style.maxWidth = '100vw';
        currentTarget.style.maxHeight = window.innerHeight + 'px'
      })
    })
  }

  closeCard = (event) => {
    event.stopPropagation();

    const { 
      currentTarget,
      oldOffsetX,
      oldOffsetY
    } = this.state;

    currentTarget.style.maxWidth = 'calc(50% - 20px)';
    currentTarget.style.height = 'auto';
    currentTarget.style.maxHeight = 'auto';
    currentTarget.style.left = oldOffsetX - 20 + 'px';
    currentTarget.style.top = oldOffsetY - 20 + 'px';
    window.requestAnimationFrame(() => {
      currentTarget.style.transform = `translate(0px, 0px)`;
      window.requestAnimationFrame(() => {
        this.setState({ opened: false , currentTarget: null});
        setTimeout(() => {
          currentTarget.style.removeProperty('position');
          currentTarget.style.removeProperty('z-index');
          currentTarget.style.removeProperty('top');
          currentTarget.style.removeProperty('left');
          currentTarget.style.removeProperty('transform');
          currentTarget.style.removeProperty('width');
          currentTarget.style.removeProperty('max-width');
          currentTarget.style.removeProperty('max-height');
        }, 280)
      })
    })
  }

  render () {
    console.log('rerender', this.state);
    const { title, image, description } = this.props;
    return (
      <F>
        <div 
          className={`card ${this.state.opened ? 'opened' : ''}`}
          onClick={this.openCard}
        >
          { 
            this.state.opened && 
              <div onClick={this.closeCard} className="close">x</div>
          }
          <div className="image"><img src={image.thumb} alt="some random shit" /></div>
          <div className="content">
            <h2>{title}</h2>
            <p>{ this.state.opened ? description : description.substring(0, 100) + '...' }</p>
          </div>
        </div>
        {
          this.state.opened && <div style={{width: this.state.placeholderWidth, height: this.state.placeholderHeight}} className="placeholderCard" />
        }
      </F>
    )
  }
}

export default Card