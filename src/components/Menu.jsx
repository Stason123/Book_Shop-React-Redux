import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';

const CartComponent = ({ title, image, id, removeFromCart }) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color="red">Remove</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
      <Menu>
        <Menu.Item name='browse' >
          Books Shop
        </Menu.Item>


        <Menu.Menu position='right'>
          <Menu.Item name='signup' >
            Price total: &nbsp; <b>{totalPrice}</b> &nbsp; rub
          </Menu.Item>
      <Popup 
        trigger={
          <Menu.Item name='help' >
            Cart (<b>{count}</b>)
          </Menu.Item>   
        }
        content={items.map((book, i) => <CartComponent key={i} {...book} />)}
        on='click'
        hideOnScroll
      />
        </Menu.Menu>
      </Menu>
);

export default MenuComponent;