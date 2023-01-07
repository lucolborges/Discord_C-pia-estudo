import React from 'react';

import { 
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcons,
  HeadphoneIcon,
  SettingsIcon
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Lucas Borges</strong>
          <span>#2356</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcons/>
        <HeadphoneIcon/>
        <SettingsIcon/>
      </Icons>
    </Container>
  );
};

export default UserInfo;