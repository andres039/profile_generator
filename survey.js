const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What's your name? Nicknames are also acceptable :)? ", (name) => {
  rl.question("What's an activity you like doing?", (act) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        (foods) => {
          rl.question(
            "What's your favourite thing to eat for that meal?",
            (morefoods) => {
              rl.question(
                "Which sport is your absolute favourite?",
                (sports) => {
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!",
                    (superpower) => {
                      console.log(`${name} loves listening to ${music} while ${act}, devouring ${morefoods} for ${foods}, prefers ${sports} over any other sport, and is amazing at ${superpower}.`);
                      rl.close();
                    }
                  )
                }
              )
            }
          );
        }
      );
    });
  });
});


