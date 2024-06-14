import { Flex, Menu } from "antd";
import React from "react";
import { FaLeaf } from "react-icons/fa6";
import { UserOutlined, ProfileOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined, LoginOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate()
  
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
          onClick:() => navigate('/dashboard')
        
          
          
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
          onClick:() => navigate('/productos')
        },
        {
          key: '5',
          icon: <SettingOutlined />,
          label: 'Clientes',
          onClick:() => navigate('/clientes')
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