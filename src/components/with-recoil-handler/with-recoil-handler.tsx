import React from "react";
import { useRecoilValueLoadable, RecoilValue } from "recoil";

const withRecoilHandler = <P extends object, V extends object>(WrappedComponent: React.ComponentType<P>, selector: RecoilValue<V>) => ({...props}: P) => {
  
  const RenderRecoilStateHandler: React.FunctionComponent<P> = (props) => {

    const { state, contents } = useRecoilValueLoadable(selector);

    switch(state) {
      case "loading":
        return (<div>...loading</div>)
      case "hasError":
        return (<div>We seem to have run into an error? Try refreshing!</div>)
      case "hasValue":
        return (
          <WrappedComponent {...props} contents={contents} />
        )
    }
  }

  return <RenderRecoilStateHandler {...props}/>
}

export default withRecoilHandler;