import { connect } from 'react-redux';
import { updateUser } from '../../actions';
import Form from '../../components/user/Form';

const mapStateToProps = state => {
  return Object.assign({}, state.user);
};

const mapDispatchToProps = dispatch => {
  return {
    handleFieldChange: e => {
      const { name, value } = e.target;
      const change = { [name]: value };

      dispatch(updateUser(change));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
