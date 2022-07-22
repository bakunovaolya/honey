import {Divider, Drawer, IconButton, List, ListItem, ListItemText, TextField} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

function Basket(props){
    const {
        cartOpen,
        closeCart = Function.prototype,
    } = props
    return (

        <Drawer anchor="right"
                open={cartOpen}
                onClose={closeCart}
        >
            <List sx={{width:'500px'}} >
                    <ListItem>
                     <ListItemText primary='Корзина'/>
                    </ListItem>
                <Divider/>
            </List>
        </Drawer>
    )
}
export default Basket;