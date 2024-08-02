import React, {createContext} from 'react';

const {Provider, Consumer} = createContext<any>(undefined);

class ContextProvider extends React.Component<any> {
  render() {
    const {children, ...props} = this.props;

    return <Provider value={props}>{children}</Provider>;
  }
}

function withContext(WrappedComponent: any) {
  return (props: any) => (
    <Consumer>
      {(value: any) => <WrappedComponent {...value} {...props} />}
    </Consumer>
  );
}

export {ContextProvider, withContext};
