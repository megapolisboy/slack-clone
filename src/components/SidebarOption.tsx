import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import styled from "styled-components";
import { addRoom } from "../firebase";

interface SidebarOptionProps {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  addChannelOption?: boolean;
  id?: string;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
  Icon,
  title,
  addChannelOption,
  id,
}) => {
  const addChannel = () => {
    const channelName = prompt("Enter the channel name");
    if (channelName) {
      addRoom(channelName);
    }
  };

  const selectChannel = () => {
    if (id) {
      //useDispatch(enterRoom({roomId: id}))
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: rgb(54, 8, 47);
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
