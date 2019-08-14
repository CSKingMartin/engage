// bundle.css.js
const requireAll = (context) => context.keys().map(context);

// require the rest of the components
requireAll(require.context('@components/', true, /\.css$/));

