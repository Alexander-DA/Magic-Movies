
import routes from './routes.js';

import handlebarsInit from './config/handlebarsInit.js';
import expressInit from './config/expressInit.js';

const app = express();

handlebarsInit(app);
expressInit(app);

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');



app.use(routes);

app.listen(5000, console.log('Server is listening on http://localhost:5000'));