module.exports = {
	config: {
		name: "edit",
		version: "1.0",
		author: "Lawkey",
		role: 0,
		shortDescription: "Edit a bot's message",
		longDescription: "Edit a bot's message by replying to it with 'edit <message>'.",
		category: "user",
		guide: {
			en: "{p}{n} <message>",
		},
	},

	onStart: async function ({ api, event, args }) {
		const replyMessage = event.messageReply.body;

		if (!replyMessage || !args || args.length === 0) {
			api.sendMessage("What did I say earlier, Reply to it Boss Lawkey.", event.threadID, event.messageID);
			return;
		}

		const editedMessage = `${args.join(" ")}`;

		try {
			await api.editMessage(`${editedMessage}`, event.messageReply.messageID);
		} catch (error) {
			console.error("Error editing message", error);
			api.sendMessage("An error occurred while editing the message. Please try again later.", event.threadID);
		}
	},
};
