import home1 from '../../../../img/home1.jpg'
import home2 from '../../../../img/home2.jpg'
import home3 from '../../../../img/home3.jpg'
import iconHome1 from '../../../../img/homeIcon1.png'
import iconHome2 from '../../../../img/homeIcon2.png'
import iconHome3 from '../../../../img/homeIcon3.png'
import './home.css'
function Home(props){
    return (
        <div className='homeWrapper'>
            <div className='imgWrapper'>
                <img src={home1} alt="" className='imgHome'/>
                <img src={home2} alt="" className='imgHome'/>
                <img src={home3} alt="" className='imgHome'/>
            </div>
            <div className='advantagesWrapper'>
                <div className='advantagesTitle'>Алтайский горный мёд без термической обработки и сахара</div>
                <div className='advantagesSubTitle'>Наша основная цель — доставить натуральный мёд в его девственном, чистом виде
                </div>
                <div className='advantagesBox'>
                    <div className='advantage'>
                        <img src={iconHome1} alt="" className='iconHome'/>
                        <span className='advantagesText'>Проверенные пчеловоды</span>
                    </div>
                    <div className='advantage'>
                        <img src={iconHome2} alt="" className='iconHome'/>
                        <span className='advantagesText'>Гарантия качества всех товаров</span>
                    </div>
                    <div className='advantage'>
                        <img src={iconHome3} alt="" className='iconHome'/>
                        <span className='advantagesText'>Быстрая доставка по всей России</span>
                    </div>
                </div>
            </div>
        </div>)
}
export default Home;
