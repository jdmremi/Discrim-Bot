const myDiscriminator = ['0001', '0002'];
const bot = new(require("discord.js")).Client({
    fetchAllMembers: true
});

const password = "*password*";
const token = "*token*";

bot.login(token);

function changeDiscriminator() {
    try {
        if (myDiscriminator.includes(bot.user.discriminator.toString()))
            return console.log("Discriminator Loaded: " + bot.user.discriminator);
        try {
            const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
            console.log(new Date(), "Username Loaded: " + us);
            bot.user.setUsername(us, password).then((u) => {
                console.log(new Date(), "Username: " + u.username, "Discriminator: " + u.discriminator);
                setTimeout(changeDiscriminator, 864 * 2e5);
            }).catch((err) => {
                console.log(new Date(), "An error occurred. Trying again in 2 days");
                setTimeout(changeDiscriminator, 864 * 2e5);
            });
        } catch (e) {
            console.log(new Date(), `[${e}] Trying again in 2 days`);
            setTimeout(changeDiscriminator, 864 * 2e5);
        }
    } catch (err){
		console.log(err.message);
	}
}


bot.once("ready", () => {
    console.log(new Date(), "Started with " + bot.users.size + " users");
    changeDiscriminator();
    if (myDiscriminator.includes(bot.user.discriminator)) {
        console.log(`I successfully got the discrim ${bot.user.discriminator}!`)
        process.exit();
    }
});
