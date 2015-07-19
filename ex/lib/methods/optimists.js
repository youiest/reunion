Meteor.methods( {
  changeTheme: function ( theme ) {
    name = 'changeTheme'
    if ( Meteor.isClient ) {
      console.log( name + ' isClient' );
      ThemeManager.setTheme(theme);
    }
    if ( Meteor.isServer ) {
      console.log( name + ' isServer' );
      return 'serverReturned'
    }
  }
} );
