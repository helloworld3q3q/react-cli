let BD_ENV = process.argv.splice(2)[0] || 'dev';
module.exports = {
	NODE_ENV: '"production"',
	BD_ENV: '"' + BD_ENV + '"'
};
