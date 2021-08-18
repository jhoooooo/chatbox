Each file can be open with notepad (right click > open with > notepad).

-------------------------------------
 Pastel Hearts

 If you enabled the 'hide chatter option' in Streamlabs, use hide-chatter.js file.
 But you must enable both 'Hide Common Chat Bots' & 'Hide commands starting with `!`'
 If you enable only one of them, manualy edit the js code. Look for

--------------

 if (botNames.indexOf(obj.detail.from) == -1 && isCommand != "!"){

--------------

remove one of those according to what you enable, including &&. Example:

'Hide Common Chat Bots' = ticked
'Hide commands starting with `!`' = unticked

code:

--------------

if (botNames.indexOf(obj.detail.from) == -1){

--------------.

If you doesnt understand, dm me on twitter or something, I dont want to create another two files just for these stuff.



