var express = require('express'),
 app = express();	
app.use(express.static('static'))
app.set('port', 3000);
app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});