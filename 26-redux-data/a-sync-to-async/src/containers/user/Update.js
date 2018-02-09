import { connect } from 'react-redux';
import { loadUser, updateUser } from '../../actions';
import Form from '../../components/user/Form';

const mapStateToProps = state => Object.assign({}, state.user);

const mapDispatchToProps = dispatch => ({
  loadUser: id => dispatch(loadUser(id)),

  onFieldChange: e => {
    const { name, value } = e.target;
    const change = { [name]: value };

    dispatch(updateUser(change));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
