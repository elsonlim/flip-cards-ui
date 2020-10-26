import React from "react";
import { connect } from "react-redux";
import { setDefaultSide } from "../actionCreators/optionBarActions";
import { Store } from "../store";
import ToggleButton from "./ToggleButton";
import styles from "./OptionBar.module.css";

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

const FlipDefaultSide: React.SFC<FlipDefaultSideInterface> = ({
  defaultSide,
  setDefaultSide,
}) => {
  return (
    <div className={styles.toggle}>
      <ToggleButton
        leftText="Japanese"
        rightText="English"
        isDefaultSide={defaultSide}
        setDefaultSide={setDefaultSide}
      />
    </div>
  );
};

const FlipDefaultSideConnected = connect(
  mapStatesToProps,
  mapDispatchToProps,
)(FlipDefaultSide);

const OptionBar = () => {
  return (
    <div className={styles.optionBar}>
      <FlipDefaultSideConnected />
    </div>
  );
};

export default OptionBar;
