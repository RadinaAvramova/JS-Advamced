function requestValidator(obj) {
    const methodValidate = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versionValidate = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /[^A-Za-z0-9\.\*]+/;
    let messagePattern = /[<>\\\&\'\"]+/;
 
    if ((obj.method === undefined) || !(methodValidate.includes(obj.method))) {
        throw new Error ('Invalid request header: Invalid Method');
    };
    if ((obj.uri === undefined) || obj.uri == '' || uriPattern.test(obj.uri)) {
        throw new Error ('Invalid request header: Invalid URI');
    };
    if ((obj.version === undefined) || !(versionValidate.includes(obj.version))) {
        throw new Error ('Invalid request header: Invalid Version');
    }
    if ((obj.message === undefined) || ((messagePattern.test(obj.message)) == true)) {
        throw new Error ('Invalid request header: Invalid Message');
    }
  return obj;
}



function solve(obj) {
  // local variables
  const methods = ["GET", "POST", "DELETE", "CONNECT"];
  const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const regexURI = /^[a-zA-Z.0-9]+$/gm;
  const regexMessage = /[<>&'"\\]/gm;

  // checks
  if (!obj.hasOwnProperty("method") || !methods.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (!obj.hasOwnProperty("uri") || !regexURI.test(obj.uri) || obj.uri === "") {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!obj.hasOwnProperty("version") || !versions.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  if (!obj.hasOwnProperty("message") || regexMessage.test(obj.message)) {
    throw new Error("Invalid request header: Invalid Message");
  }

  return obj;
}

const x = solve({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "",
});
/**        {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
 */

solve({
  method: "OPTIONS",
  uri: "git.master",
  version: "HTTP/1.1",
  message: "-recursive",
});
// Invalid request header: Invalid Method