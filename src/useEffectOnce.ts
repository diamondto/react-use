import { EffectCallback, useEffect } from 'react';

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, []);// 只调用一次，
};

export default useEffectOnce;
