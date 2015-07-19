Meteor.methods( {
  changeTheme: function ( name, theme ) {
    name = name || 'changeTheme'
    if ( Meteor.isClient ) {
      console.log( name + ' isClient' );
      try {
        ThemeManager.setTheme( eval( theme ) );
      } catch ( e ) {
        throw new Meteor.Error( "bad-theme",
          e);
      } finally {

      }

    }
    if ( Meteor.isServer ) {
      console.log( name + ' isServer' );
      return 'serverReturned'
    }
  }
} );
