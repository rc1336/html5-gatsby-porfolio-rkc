module.exports = {
	siteMetadata: {
		title: 'Gatsby Starter Aerial'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Aerial',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'standalone',
				icon: 'src/assets/img/website-icon.png' // This path is relative to the root of the site.
			}
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-offline'
	]
};