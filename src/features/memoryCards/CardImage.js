import { CATS } from '../../app/shared/CATS';
import { baseCatUrl, baseDogUrl } from '../../app/shared/baseUrls';
import '../App.css';

const CardImage = (props) => {
    const catUrl = 'https://api.thecatapi.com/v1/images/';
    const dogUrl = 'https://api.thedogapi.com/v1/images/';
    console.log(catUrl, CATS[0].id);
    console.log(catUrl + CATS[0].id);

    const imgurl = 'https://cdn2.thecatapi.com/images/MTgwNjg2MQ.jpg'

    return (
        <div className='cardImage'>
            <img src={imgurl} alt='Cat or Dog Image' />
        </div>
    );
};

export default CardImage;