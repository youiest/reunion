log = loglevel.createLogger('reunion:logLib.js', 'trace');
L = function L(argument) {
  log.trace(argument)
  Logstar.log('L',argument)
}
