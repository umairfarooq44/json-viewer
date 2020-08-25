import { connect } from 'react-redux';
import Search from './Search';
import getPathAction from '../../store/jsonpath/action';

const mapDispatchToProps = (dispatch: Function) => ({
  getPath: (data: string, json: any) => dispatch(getPathAction(data, json)),
});

export default connect(null, mapDispatchToProps)(Search);
