log = loglevel.createLogger('reunion.optimists', 'trace');
Meteor.methods( {
  changeTheme: function ( name, theme ) {
    name = name || 'changeTheme'
    if ( Meteor.isClient ) {
      log.trace( name + ' isClient' );
      try {
        ThemeManager.setTheme( eval( theme ) );
      } catch ( e ) {
        throw new Meteor.Error( "bad-theme",
          e);
      } finally {

      }

    }
    if ( Meteor.isServer ) {
      log.trace( name + ' isServer' );
      return 'serverReturned'
    }
  }
} );
