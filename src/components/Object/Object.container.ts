import { connect } from 'react-redux';
import ObjectType from './Object';

type ReduxState = {
  jsonpath: string[];
};

const mapStateToProps = ({ jsonpath }: ReduxState) => ({
  jsonpath,
});

export default connect(mapStateToProps)(ObjectType);
