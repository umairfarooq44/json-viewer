import { JSONPath } from 'jsonpath-plus';
import { GET_JSON_PATH } from './types';

// converting to async from preventing main thread
const getPaths = (path: string, json: any) => {
  return new Promise((resolve, reject) => {
    try {
      let filteredPaths: string[] = JSONPath({
        path,
        json,
        resultType: 'pointer',
      });
      let shortest = Number.MAX_VALUE;
      // Removing child paths to prevent extra renders
      filteredPaths = filteredPaths
        .filter((val: string) => !!val)
        .map((val: string) => {
          const s = val.split('/');
          if (s.length < shortest) {
            shortest = s.length;
          }
          return s;
        })
        .filter((val: string[]) => val.length === shortest)
        .map((val: string[]) => val.join('/'));
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
