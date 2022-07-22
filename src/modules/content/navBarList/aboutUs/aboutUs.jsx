import React, {Component} from 'react';
import aboutUs from '../../../../img/aboutUs.png'
import './aboutUs.css'
import aboutUs1 from "../../../../img/aboutUs1.jpg";
import aboutUs2 from "../../../../img/aboutUs2.jpg";
import aboutUs3 from "../../../../img/aboutUs3.jpg";
import { Grid } from "@mui/material";
class AboutUs extends Component {
       render() {
        return (
            <div className='aboutUsWrapper'>
                <div className='aboutUsWrapperInside'>
                <div className='aboutUsTextWrapper'>
                    <div className='aboutUsTitle'>Как и откуда мёд попадает к нам</div>
                    <div className='aboutUsText'>Нашими поставщиками пчелопродуктов являются пчеловоды —
                        участники ярмарок мёда в Москве, Ярославле, Новосибирске и других городах.
                        У нас вы можете купить мед от лучших пасечников Алтая все 365 дней в году
                    </div>
                </div>
                <div className='aboutImgWrapper'>
                    <img src={aboutUs} alt="" className='aboutUsImg'/>
                </div>
            </div>

                <div className='aboutUsImgWrapper'>
               <img src={aboutUs1} alt="" className='imgAbout'/>
               <img src={aboutUs2} alt="" className='imgAbout'/>
               <img src={aboutUs3} alt="" className='imgAbout'/>
           </div>
                {/*} <Grid container spacing={2} sx={{padding:'0 1rem'}}>
                    <Grid item xs={4}>
                        <img src={aboutUs1} alt="" className='imgAbout'/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={aboutUs2} alt="" className='imgAbout'/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={aboutUs3} alt="" className='imgAbout'/>
                    </Grid>

                </Grid>*/}

            </div>
        );
    }
}

export default AboutUs;
