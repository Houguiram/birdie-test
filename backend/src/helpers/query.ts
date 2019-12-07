module.exports = async (conn: { query: (arg0: any, arg1: any, arg2: (error: any, result: any) => void) => void; }, q: any, params: any) => new Promise(
  (resolve, reject) => {
    const handler = (error: any, result: {} | PromiseLike<{}> | undefined) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    }
    conn.query(q, params, handler);
  });
