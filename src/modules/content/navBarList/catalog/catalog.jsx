import {goodsList} from "../../../header/config";
import {Grid} from "@mui/material";
import GoodsItem from "./goodsItem";
import './catalog.css'
function Catalog(props){
    console.log(props)
    //const {goodsList} = props;
    return (
        <div className='catalogWrapper'>
            <div className='catalogTitleWrapper'>
                <div className='catalogTitle'>
                    <div className='catalogFirstTitle'>Мы продаем более</div>
                    <div className='catalogSecondTitle'>50 видов мёда</div>
                </div>
                <div className='catalogTitleText'>Вся наша продукция в обязательном порядке проходит исследования в специальной сертифицированной лаборатории</div>
            </div>
            <Grid container spacing={2} sx={{border:'1px solid primary.main',
                                            maxWidth: '71.25rem;',
                                            justifyContent:'center',
                                            alignContent:'center',
                                            margin:'auto'}}>
                {props.goods.map((item) => <GoodsItem key={item.id} card={item}/> )}
            </Grid>
        </div>)
}
export default Catalog;
