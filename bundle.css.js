// bundle.css.js
const requireAll = (context) => context.keys().map(context);

// require the rest of the components
requireAll(require.context('@css/', true, /\.css$/));
requireAll(require.context('@tags/', true, /\.css$/));
requireAll(require.context('@layouts/', true, /\.css$/));
requireAll(require.context('@components/', true, /\.css$/));

