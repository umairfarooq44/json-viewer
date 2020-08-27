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
      console.log(filteredPaths);
      filteredPaths = filteredPaths
        .filter((val: string) => !!val)
        .reduce((shortests: any, string) => {
          const keys = string.slice(1).split('/');
          const subset = shortests.filter((shortest: any) =>
            keys.some((key, i) => key !== shortest[i])
          );

          if (subset.length !== shortests.length) return [...subset, keys];
          if (
            !shortests.some((shortest: any) => {
              return shortest.every((val: any, i: any) => val === keys[i]);
            })
          ) {
            shortests.push(keys);
          }
          return shortests;
        }, [])
        .map((keys: any) => `/${keys.join('/')}`);
      console.log(filteredPaths);
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
