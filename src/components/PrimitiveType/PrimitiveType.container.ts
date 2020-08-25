import { connect } from 'react-redux';
import PrimitiveType from './PrimitiveType';
const mapStateToProps = ({ jsonpath }: any) => ({
  jsonpath,
});

export default connect(mapStateToProps)(PrimitiveType);
