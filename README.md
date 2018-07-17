# Discrim-Bot
This bot allows you change your Discord discriminator!

NOTE: I am not responsible if you get banned for running this userbot. Run at your own discretion. 

# How to Install Discrim-Bot

1. Install node.js on your system - https://nodejs.org.

2. Install git on your system - https://git-scm.com/downloads.

3. Run the following command on your command line: `git clone https://github.com/Vezqi/Discrim-Bot`. Press enter and it will begin cloning the repository.

4. Type `cd Discrim-Bot`, and hit enter. This will put you into the folder with the cloned repository.

5. Run `npm install --save discord.js`, hit enter. This will install the Discord.js modules. It may take a few moments to install depending on the speed of your computer. 

6. Once Discord.js is installed, type (If on Linux/Mac, `nano main.js`, and if on Windows, just do (notepad main.js) , and hit enter. This will let you edit the code, so that you can input your password and your token.

7. Using the arrow keys, navigate to where you see `const password = "Your password here";`. Erase the text in between the quotation marks, and put your password in there. 

8. Once you have done that, now we need to get your user token. Simply open the developer tools while on Discord using the key shortcut `CTRL + SHIFT + I`. Then, navigate accordingly: `Application => Local Storage => https://discordapp.com/etc/etc/etc.` Then, your user token will be at the bottom. Double click it and copy it, and then paste it in between the quotes. `const token = "Your token here";`.

9. If on Linux or Mac, do the following key combo on your keyboard: `CTRL + X`, then `Y`, then `Enter`. If on Windows, just go up to File>Save as>main.js. Save it.

10. Type `node main.js`, and the bot will take a moment to boot up. Then, your discrim will re-roll every 24 hours, due to Discord's username changing cooldown! Happy farming!
