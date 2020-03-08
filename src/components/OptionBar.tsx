import React from "react";
import { Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import { setDefaultSide } from "../actionCreators/optionBarActions";
import { Store } from "../store";
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
      <span className={styles.toggleText}>Toggle All Cards:</span>
      <Checkbox
        slider
        onClick={() => {
          setDefaultSide(!defaultSide);
        }}
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
