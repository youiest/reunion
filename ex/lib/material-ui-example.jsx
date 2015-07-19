ThemeManager = new mui.Styles.ThemeManager();
log = loglevel.createLogger('reunion.material-ui', 'trace');

//ThemeManager.setTheme(ThemeManager.types.DARK);
//ThemeManager.setTheme(LighterTheme);
// in console..
var {
  AppBar,
  DatePicker,
  TextField
} = mui;

React.initializeTouchEvents(true)

var App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div>
        <DatePicker hintText="Landscape Dialog" mode="landscape"/>
        <TextField hintText="Hint Text" />
      </div>
    );
  }
});
function call(name, payload) {
  Meteor.call( name, name, payload, function ( error, result ) {
    if ( error ) {
      log.error( "error", error );
    }
    if ( result ) {
      return(result)
    }
  } );
}
if (Meteor.isClient) {
  Meteor.startup(function () {
    var WebFontConfig = {
      google: { families: [ 'Roboto:400,300,500:latin' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();

    injectTapEventPlugin();

    $(document.body).html("<div id='container'></div>");
    React.render(<App />, document.getElementById("container"));
    name = "changeTheme"
    payload = "LighterTheme"
    L(call(name,payload));
    //Logstar.critical('Logstar.isLocal',Logstar.isLocal,call(name,payload))
  });
}
