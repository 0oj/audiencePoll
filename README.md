# Audience Poll
#### Use the Wisdom of the Crowd to beat game shows.

---

##### You see a question on your 'Who Wants to be a Millionaire' or 'KBC', and you want to know the answer, you head up to AudiencePoll, click on whichever option you think is correct and press 'LOCK', **BAM!** You see what the crowd says, displayed *beautifully* on your screen.

## Here it is, in all it's beauty!
![recording](https://user-images.githubusercontent.com/26735045/33513641-dd905f78-d76c-11e7-97c8-77fdcc8e170f.gif)

---

## The Wisdom of Crowds
I won't go much into this topic because we don't want a six page README, do we?

Notice how there are *so many* people on the streets, walking heedlessly, yet somehow, almost **no one crashes into each other**. That! And much *much* more.

---

## How does it work
###### It's actually pretty simple!

This project uses Socket.io to create a real-time polling app which displays live results on the client's browser. This, then can be used to extract the answer from the people.

##### When you choose an option and press 'LOCK', it triggers an event which then add a vote to the option at the server. Which, then send all the votes to all connected users and after some client-side JavaScript, it displays the results *beautifully* on the browsers.

---

## Try it out!
###### In your console(make sure you have git and nodejs installed on your computer)

Clone the Repo be typing- `git clone https://github.com/OojAmit/audiencePoll.git`  
Go into the project by- `cd audiencePoll`  
Install the dependencies with- `npm install`  
And, run the app with- `node app`  
It should be on `localhost:10000` .

---

## IT'S NOT COMPLETE!
It's nice, works, but that's it!

#### I would *love* to have more features(some, really basic ones) like-

1. **Question numbering!** It seems really basic but somehow, I can't do it. How would I know which users' are on which questions? How would they know? It should store the votes with the question and respond with it too. After the user attempts one question, he/she should be moved to the next.

2. **Answer names.** Currently, I just have 'A', 'B', 'C' and 'D' as placeholders. Real answers would be *way* more better.

3. **Host it** somewhere. Before KBC's next season, I want to have it on a real website people can actually go to.

#### Your contributions, however small they may be, would make me **really happy!**
