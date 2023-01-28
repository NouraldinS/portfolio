export default (path) => {
	const image = new Image();
	image.src = `public/${path}`;
	return image;
};
