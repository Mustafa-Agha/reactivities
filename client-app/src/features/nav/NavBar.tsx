import React from "react";
import { Button, Menu } from "semantic-ui-react";

interface IProps {
  openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
  return (
    <Menu fixed="top" inverted>
      <Menu.Item header>
        <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
        Reactivities
      </Menu.Item>
      <Menu.Item name="Activities" />
      <Menu.Item>
        <Button onClick={() => openCreateForm()} positive>Create Activity</Button>
      </Menu.Item>
    </Menu>
  );
};
