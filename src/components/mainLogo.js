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
        let scrollTop = window.pageYOffset;
        if(scrollTop > 100){
            this.setState({
                addClassName: 'logo aside'
            });
        }else{
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

