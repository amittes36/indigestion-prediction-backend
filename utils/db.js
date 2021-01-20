const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const url = `mongodb+srv://team13:${process.env.DB_PASS}@cluster0.4j71r.mongodb.net/indigestionDB?retryWrites=true&w=majority`;
		await mongoose.connect(process.env.MONGODB_URI || url, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log('MongoDB Connected');
	} catch (err) {
		console.error(err);
		process.exit(err);
	}
};
module.exports = connectDB;
