import React from 'react';
import './Header.scss';
import AvatarProfile from '../AvatarProfile/AvatarProfile';
import AnimationContainer from '../AnimationContainer/AnimationContainer';

export default function Header() {
  return (
    <div className="box-header">
      <AnimationContainer direction="left">
        <AvatarProfile />
      </AnimationContainer>

      <img
        className="box-header-img"
        style={{ width: '5em', height: '5em' }}
        src="./motorhome.svg"
        alt="err"
      />
      <div className="box-header-img"></div>
    </div>
  );
}
