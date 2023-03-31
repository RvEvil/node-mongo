const User = require("../models/user")

const getallUser = async (req, res) => {
	try {
		const users = await User.find()
		res.json(users)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id)
		if (!user) {
			return res.status(404).json({ message: "User not found" })
		}
		res.json(user)
	} catch (err) {
		return res.status(500).json({ message: err.message })
	}
}

const addUser = async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	})
	try {
		const newUser = await user.save()
		res.status(201).json(newUser)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

const updateUser = async (req, res) => {
	const user = await User.findById(req.params.id)

	if (!user) {
		return res.status(404).json({ message: "User not found" })
	}

	if (req.body.name != null) {
		user.name = req.body.name
	}
	if (req.body.email != null) {
		user.email = req.body.email
	}
	if (req.body.password != null) {
		user.password = req.body.password
	}
	try {
		const updatedUser = await user.save()
		res.json(updatedUser)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
}

const removeUser = async (req, res) => {
	try {
		const result = await User.deleteOne({ _id: req.params.id })
		if (result.deletedCount === 0) {
			return res.status(404).json({ message: "User not found" })
		}
		res.json({ message: "User deleted" })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

module.exports = {
	getallUser,
	getUser,
	addUser,
	updateUser,
	removeUser,
}
