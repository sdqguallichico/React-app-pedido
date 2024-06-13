import { Flex, Menu } from "antd";
import React from "react";
import { FaLeaf } from "react-icons/fa6";
import { UserOutlined, ProfileOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined, LoginOutlined} from '@ant-design/icons';

const Sidebar = () => {
  
  return (
    <>
      <Flex align="center" justify="center" >
        <div className="logo"></div>
          
      </Flex>

      <Menu mode="inline" defaultSelectedKeys={['1']} className="menu-bar" 
      items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'Dashboard',
          
          
        },
        {
          key: '2',
          icon: <CarryOutOutlined />,
          label: 'Pedidos',
        },
        {
          key: '3',
          icon: <OrderedListOutlined />,
          label: 'Restaurantes',
        },
        {
          key: '4',
          icon: <ProfileOutlined />,
          label: 'Productos',
        },
        {
          key: '5',
          icon: <SettingOutlined />,
          label: 'Clientes',
        },
        {
          key: '6',
          icon: <LoginOutlined />,
          label: 'Cerrar Sesion',
        },
      ]}
      ></Menu>
    </>
  );
}

export default Sidebar