log = loglevel.createLogger('reunion:logLib.js', 'trace');
L = function L(argument) {
  log.trace(argument)
  /// removing
  Logstar.log('L',argument)
}
