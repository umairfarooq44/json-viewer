import { JSONPath } from 'jsonpath-plus';
import { GET_JSON_PATH } from './types';

// converting to async from preventing main thread
const getPaths = (path: string, json: any) => {
  return new Promise((resolve, reject) => {
    try {
      let filteredPaths: any = JSONPath({
        path,
        json,
        resultType: 'pointer',
      });
      let shortest = Number.MAX_VALUE;
      // Removing child paths to prevent extra renders
      filteredPaths = filteredPaths
        .filter((val: String) => !!val)
        .map((val: any) => {
          const s = val.split('/');
          if (s.length < shortest) {
            shortest = s.length;
          }
          return s;
        })
        .filter((val: any) => val.length === shortest)
        .map((val: any) => val.join('/'));
      resolve(filteredPaths);
    } catch (err) {
      reject(err);
    }
  });
};

export default (path: string, json: any) => async (dispatch: Function) => {
  try {
    const filteredPaths: any = await getPaths(path, json);
    dispatch({
      type: GET_JSON_PATH,
      payload: filteredPaths,
    });
  } catch (err) {
    console.log(err);
  }
};
