/* eslint-disable */
import * as React from 'react';

export interface RouterProviderProps {
  route: string;   
  fullRoute?: string;
  parent?: any;
}

const createRouter = () => {
  const context = React.createContext<RouterProviderProps>({
    route: '',   // 父子传旨
  });

  // not sure if this supposed to be unused, ignoring ts error for now
  // @ts-ignore
  const Router: React.SFC<RouterProviderProps> = props => {
    const { route, fullRoute, parent, children } = props;  // 解构出路由参数信息

    if (process.env.NODE_ENV !== 'production') {
      if (typeof route !== 'string') {
        throw new TypeError('Router route must be a string.');
      }
    }

    return React.createElement(context.Provider as any, {
      value: {
        fullRoute: fullRoute || route,
        route,
        parent,  // 与接口定义参数一致
      },
      children,  
    });
  };
};

export default createRouter;
