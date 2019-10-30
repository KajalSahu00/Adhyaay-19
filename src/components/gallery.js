import React from 'react';

//images
import testImage from '../images/testImage.jpg';
import testImage0 from '../images/testImage.jpg';
import testImage1 from '../images/testImage2.jpg';
import Diya1Image from '../images/diya1.png';
import Diya2Image from '../images/diya2.png';
import FlameGIF from '../images/flame.gif'

class Gallery extends React.Component{
    state ={
        position: 50,
        id: 0,
        images: [ testImage0, testImage1, testImage0, testImage0, testImage0, testImage0, testImage0, testImage0, testImage0, testImage0]
    }

    componentDidMount(){
        this.myinterval = setInterval(() => {
        if( this.state.id< 6){
        const newPosition = 50 - ((parseInt(this.state.id)+1)*10);
        this.setState({ position: newPosition, id: this.state.id + 1});
        }
        else{
            const newPosition = 50;
            this.setState({ position: newPosition, id: 0});
        }
        }, 3000);

        window.addEventListener('keydown', this.keyPressed);
    }

    componentDidUpdate(){
        clearInterval(this.myinterval);
        this.myinterval = setInterval(() => {
            if( this.state.id< 9){
            const newPosition = 50 - ((parseInt(this.state.id)+1)*10);
            this.setState({ position: newPosition, id: this.state.id + 1});
            }
            else{
                const newPosition = 50;
                this.setState({ position: newPosition, id: 0});
            }
            }, 3000)
    }

    onClickDiv= (e) => {
        // const clickedId = this.className;

        const newPosition = 50 - (parseInt(e.target.id)*10);
        this.setState({ position: newPosition, id: parseInt(e.target.id)});
    }

    keyPressed = (event) => {
        if(event.keyCode === 39){
            if( this.state.id< 9){
                const newPosition = 50 - ((parseInt(this.state.id)+1)*10);
                this.setState({ position: newPosition, id: this.state.id + 1});
            }
            else{
                const newPosition = 50;
                this.setState({ position: newPosition, id: 0});
            }
        }
        if(event.keyCode === 37){
            if( this.state.id > 0){
                const newPosition = 50 - ((parseInt(this.state.id)-1)*10);
                this.setState({ position: newPosition, id: this.state.id - 1});
            }
        }
    }

    render(){
        return(
            <>
            <div className='section-heading'>
                Gallery
            </div>
            <div className='gallery-wrapper'>
                <div className='gallery-preview' >

                    <img src={this.state.images[this.state.id]} alt='gallery' />
                </div>
                <div className='gallery-items'>
                    <div className='gallery-items--container' style={{ left: `${this.state.position}%`, transition: '0.3s all linear'}} >
                        <div className={`gallery-items--container-item ${this.state.id === 0 ? 'selected' : null}`} onClick={this.onClickDiv} >
                        <img src={testImage} alt='gallery' id='0' />
                        </div>
                        <div className={`gallery-items--container-item ${this.state.id === 1 ? 'selected' : null}`} onClick={this.onClickDiv}>
                        <img src={testImage1} alt='gallery' id='1'/>
                        </div>
                        <div className={`gallery-items--container-item ${this.state.id === 2 ? 'selected' : null}`} onClick={this.onClickDiv}>
                        <img src={testImage} alt='gallery' id='2' />
                        </div>
                        <div className={`gallery-items--container-item ${this.state.id === 3 ? 'selected' : null}`} onClick={this.onClickDiv}>
                        <img src={testImage} alt='gallery' id='3' />
                        </div>
                        <div className={`gallery-items--container-item ${this.state.id === 4 ? 'selected' : null}`} onClick={this.onClickDiv}>
                        <img src={testImage} alt='gallery' id='4' />
                        </div>
                        <div className={`gallery-items--container-item ${this.state.id === 5 ? 'selected' : null}`} onClick={this.onClickDiv}>
                        <img src={testImage} alt='gallery' id='5' />
                        </div>
                        <div className={`gallery-items--container-item ${this.state.id === 6 ? 'selected' : null}`} onClick={this.onClickDiv}>
                        <img src={testImage} alt='gallery' id='6' />
                        </div>
                        <div className={`gallery-items--container-item ${this.state.id === 7 ? 'selected' : null}`} onClick={this.onClickDiv}>
                        <img src={testImage} alt='gallery' id='7' />
                        </div>
                        <div className={`gallery-items--container-item ${this.state.id === 8 ? 'selected' : null}`} onClick={this.onClickDiv}>
                        <img src={testImage} alt='gallery' id='8' />
                        </div>
                        <div className={`gallery-items--container-item ${this.state.id === 9 ? 'selected' : null}`} onClick={this.onClickDiv}>
                        <img src={testImage} alt='gallery' id='9' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='diya-1-image'>
                <img src={Diya1Image} alt='Diya' />
                <img src={FlameGIF} alt='flame' />
            </div>
            <div className='diya-2-image'>
                <img src={Diya2Image} alt='Diya' />
                <img src={FlameGIF} alt='flame' />
            </div>
            </>
        );
    }
}

export default Gallery;