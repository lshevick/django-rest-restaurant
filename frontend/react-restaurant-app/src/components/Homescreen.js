import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from '@fortawesome/free-solid-svg-icons';
// const sushi1 = require('src/images/sushi-on-wood.jpg');

const Homescreen = () => {
    // console.log(sushi1);
    return (
        <div className="home-screen" style={{
            background: `url(https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundFilter: '#3337'
        }}>
            <h1>Fujiwara Sushi <FontAwesomeIcon icon={faFish} style={{color: '#B55A2B'}} /></h1>
        </div>
    );
}

export default Homescreen;