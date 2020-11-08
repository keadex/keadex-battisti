export const getArg = (argName) => {
  for (var index in process.argv) { 
    if (process.argv[index].indexOf(argName) !== -1){
      return process.argv[index].substr(process.argv[index].indexOf("=")+1, process.argv[index].length);
    }
  }
  return undefined;
}