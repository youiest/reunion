Logstar.allow( {
  trace: function ( userId ) {
    // Allow all clients to log
    return true;
  },
  log: function ( userId ) {
    // Allow all clients to log
    return true;
  }
} );
Logstar.isLocal = false;
Logstar.info('Logstar.isLocal',Logstar.isLocal)
