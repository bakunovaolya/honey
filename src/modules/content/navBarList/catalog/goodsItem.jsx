import React from 'react';
import {Card, CardMedia, Grid, CardContent, Typography, CardActions, Button} from "@mui/material";
import './goodItem.css'
function GoodsItem(props) {
   return (
        <Grid item xs={12} md={4}>
            <Card>
               <CardMedia
                   component='img'
                   image={props.card.poster}
                   alt={props.card.title}
                   title={props.card.title}
                   sx={{height:'auto'}}
               />
                <CardContent>
                    <Typography sx={{color:'primary.main',
                    lineHeight:'1'}} variant='h6'
                                component='h4'
                                >
                        {props.card.title}
                    </Typography>
                    <Typography variant='h6'
                                component='h4'
                                sx={{lineHeight:'1'}}>
                        {props.card.subtitle}
                    </Typography>
                    <Typography variant='body1' className='titlePrice'>
                        Цена {props.card.price} p
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined'>
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default GoodsItem;