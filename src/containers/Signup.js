import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { signupUser } from '../redux/signup';

function mapStateToProps({ signup }) {
  console.log('map state to props', signup);
  return {
    isSigningUp: signup.isSigningUp,
    errorMessage: signup.error
  };
}

// const mapDispatchToProps = () => ({
//   onSignupUser: ({ firstname, surname, email, password }, dispatch) => {
//     dispatch(signupUser(firstname, surname, email, password));
//   }
// });

export default connect(mapStateToProps, { signupUser })(Signup);
