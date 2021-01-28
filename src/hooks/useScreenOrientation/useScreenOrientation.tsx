import React from 'react';
import { ScreenOrientation } from 'expo';

const useScreenOrientation = async (orientationLock=ScreenOrientation.OrientationLock.LANDSCAPE_LEFT) => {

  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  return [];
};

export default useScreenOrientation;