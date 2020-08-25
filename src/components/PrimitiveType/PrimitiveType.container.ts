import { connect } from 'react-redux';
import PrimitiveType from './PrimitiveType';

type ReduxState = {
  jsonpath: string[];
};

const mapStateToProps = ({ jsonpath }: ReduxState) => ({
  jsonpath,
});

export default connect(mapStateToProps)(PrimitiveType);
