import {connect} from "react-redux";
import HappinessShare from '../components/HappinessShare';

const mapStateToProps = (state)=> {
  return {
    filterHappiness: state.filterHappiness
  };
};

export default connect(mapStateToProps)(HappinessShare);