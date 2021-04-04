import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SideBarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="aboutUs" onClick={toggle}>
            O nama
          </SidebarLink>
          <SidebarLink to="problem" onClick={toggle}>
            Problem
          </SidebarLink>
          <SidebarLink to="resenje" onClick={toggle}>
            Rešenje
          </SidebarLink>
          <SidebarLink to="isprobaj" onClick={toggle}>
            Isprobaj
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
