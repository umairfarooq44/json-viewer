import { connect } from 'react-redux';
import ObjectType from './Object';

const mapStateToProps = ({ jsonpath }: any) => ({
  jsonpath,
});

export default connect(mapStateToProps)(ObjectType);
