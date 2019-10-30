import React from 'react';
// import MainLogo from '../images/test.svg';
import MainLogo2 from '../images/mainLogo.svg';


 class MainLogo extends React.Component{
    state = {
        addClassName : 'logo'
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    
    handleScroll = (event) => {
        const pageHeight = window.innerHeight;
        let scrollTop = window.pageYOffset;
        if(scrollTop > 100){
            this.setState({
                addClassName: 'logo aside'
            });
        }
        if(scrollTop >= 3*pageHeight){
            console.log('true');
            this.setState({
                addClassName: 'logo footer'
            });
        }
        if(scrollTop <= 100){
            this.setState({
                addClassName: 'logo'
            });
        } 
    }
    render(){
        return (
            <div className={this.state.addClassName}>
                {/* <img src={MainLogo} alt="test" /> */}
                <img src={MainLogo2} alt="test" />
            </div>
        );
    }
}

export default MainLogo;

