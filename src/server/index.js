import Glue from 'glue';
import manifest from './manifest';
import reactRender from './utils/reactRender';

Glue.compose(manifest, {
	relativeTo: __dirname
}, (err, server) => {
	// Add a route to serve static assets
	server.route({
		method: 'GET',
		path: '/{param*}',
		handler: {
			directory: {
				path: 'public'
			}
		}
	});

	// Add dynamic router requests
	server.ext('onPreResponse', (request, reply) => {
		// Pass valid requests through
		if (request.response.statusCode) {
			return reply.continue();
		}

		// Unmatched requests fallback to react router
		reactRender(request, reply);
	});

	server.start(() => console.log(`Server running at: ${server.info.uri}`));
});
