import React from "react";
import { Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import { setDefaultSide } from "../actionCreators/optionBarActions";
import { Store } from "../store";

const mapStatesToProps = (store: Store) => {
  return {
    defaultSide: store.options.defaultSide,
  };
};

const mapDispatchToProps = {
  setDefaultSide,
};


interface FlipDefaultSideInterface {
  defaultSide: boolean;
  setDefaultSide: (isLogin: boolean) => void;
}

const FlipDefaultSide: React.SFC<FlipDefaultSideInterface> = ({ defaultSide, setDefaultSide }) => {
  return (
    <Checkbox
      slider
      onClick={() => {
        setDefaultSide(!defaultSide);
      }}
    />
  );
}

const FlipDefaultSideConnected = connect(mapStatesToProps, mapDispatchToProps)(FlipDefaultSide);

const OptionBar = () => {
  return (
    <div>
      <FlipDefaultSideConnected />
    </div>
  );
};


export default OptionBar;

