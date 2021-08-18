Each file can be open with notepad (right click > open with > notepad).

Themes
==========
- Themes i made are more of an example. They are made to showcase features i learned and super generalised.
- You are meant to modified it to fit your own style.
- They are not made specificly for you, i don't know what you setup is, please test properly.
- Streamlabs have options that may effect animation or options i included.
- Recomended test:
  -> Your own message/emotes.
  -> Commands (!commands) & bot messages.
  -> Spams quick messages, ensure animation is smooth, not jumping around.
  -> You can add ?simulate=1 after your widget url to simulate users.
  ---> Example: https://streamlabs.com/widgets/chat-box/v1/XXXCODEXXXXX?simulate=1

! Warning
==========
- If you enabled the 'hide chatter option' in Streamlabs, use themename-hide-chatter.js file instead of the normal themename.js file.
- If theres no hide-chatter.js file, it is not supported yet.
- But you must enable both 'Hide Common Chat Bots' & 'Hide commands starting with `!`'.
- If you only use one of them, you have to edit the themename-hide-chatter.js file manually.
- I did not want include two more files just for it. Look for:

        if (botNames.indexOf(obj.detail.from) == -1 && isCommand != "!"){

- Next, remove one of those according to what you enable, including &&. Example:
-- 'Hide Common Chat Bots' = ticked
-- 'Hide commands starting with `!`' = unticked

- And the code will be:

        if (botNames.indexOf(obj.detail.from) == -1){

Disclaimer
==========
- Lastly, i'm not a profesional dev, i learn stuff by myself and still learning at a beginner stage.
- Stuff i made are scuff. There are probably so many mistakes and bad noob codes here.
- I will not make announcement about updates nor fixes. Please check the repo yourself for updates or ask me on Twitter.
- If you need help from me, contact me on Twitter @ https://twitter.com/JHOOOOOOOOOOOOQ
- If you want, you can tip me @ kofi if you want to help me as i'm trying to upgrade from my really slow laptop to a proper desktop pc.
- But it's not a big deal, i'm already happy if more people use my scuff overlay.

Support me @ https://ko-fi.com/jhooo

