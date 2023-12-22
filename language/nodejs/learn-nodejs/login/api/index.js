import express from 'express'
import mongoose from 'mongoose'
mongoose.connect('mongodb://0.0.0.0:27017/prLogin').then(()=>{
    console.log("mongoDB is connected successfully")
}).catch((error)=>{
    console.log("some error occue  "+error)
})


const app = express();
const port = process.env.PORT || 5000;



app.get('/api/jokes',(req,res)=>{
    const joke = [
        {
            id:1,
            title:"joke 1",
            Que:'1. What do you call a boomerang that won’t come back?',
            Ans:'A stick.',
        },
        {
            id:2,
            title:'joke 2',
            Que:'2. What does a cloud wear under his raincoat?',
            Ans:'Thunderwear.',
        },
        {
            id:3,
            title:'joke 3',
            Que:'3. Two pickles fell out of a jar onto the floor. What did one say to the other?',
            Ans:'Dill with it.',
        },
        {
            id:4,
            title:'joke 4',
            Que:'4. What time is it when the clock strikes 1',
            Ans:'Time to get a new clock.',
        },
        {
            id:5,
            title:'joke 5',
            Que:'5. How does a cucumber become a pickle?',
            Ans:'It goes through a jarring experience.',
        },
        {
            id:6,
            title:'joke 6',
            Que:'6. What did one toilet say to the other?',
            Ans:'You look a bit flushed',
        },
        {
            id:7,
            title:'joke 7',
            Que:'7. What do you think of that new diner on the moon?',
            Ans:'Food was good, but there really wasn’t much atmosphere.',
        },
        {
            id:8,
            title:'joke 8',
            Que:'8. Why did the dinosaur cross the road?',
            Ans:'Because the chicken wasn’t born yet.',
        },
        {
            id:9,
            title:'joke 9',
            Que:'9. Why can’t Elsa from Frozen have a balloon?',
            Ans:'Because she will "let it go, let it go."',
        },
        {
            id:10,
            title:'joke 10',
            Que:'10. What musical instrument is found in the bathroom?',
            Ans:'A tuba toothpaste.',
        },
        {
            id:11,
            title:'joke 11',
            Que:'11. Why did the kid bring a ladder to school?',
            Ans:'Because she wanted to go to high school.',
        },
        {
            id:12,
            title:'joke 12',
            Que:'12. What do you call a dog magician?',
            Ans:'A labracadabrador.',
        },
        {
            id:13,
            title:'joke 13',
            Que:'13. Where would you find an elephant?',
            Ans:'The same place you lost her.',
        },
        {
            id:14,
            title:'joke 14',
            Que:'14. How do you get a squirrel to like you?',
            Ans:'Act like a nut.',
        },
        {
            id:15,
            title:'joke 15',
            Que:'15. What do you call two birds in love?',
            Ans:'Tweethearts',
        },
        {
            id:16,
            title:'joke 16',
            Que:'16. How does a scientist freshen her breath?',
            Ans:'With experi-mints.',
        },
        {
            id:17,
            title:'joke 17',
            Que:'17. How are false teeth like stars?',
            Ans:'They come out at night.',
        },
        {
            id:18,
            title:'joke 18',
            Que:'18. What building in your town has the most stories?',
            Ans:'The public library.',
        },
        {
            id:19,
            title:'joke 19',
            Que:'19. What’s worse than finding a worm in your apple?',
            Ans:'Finding half a worm.',
        },
        {
            id:20,
            title:'joke 20',
            Que:"20. What is a computer 's favorite snack?",
            Ans:'Computer chips.',
        },
        {
            id:21,
            title:'joke 21',
            Que:'21. What did one volcano say to the other?',
            Ans:'I lava you.',
        },
        {
            id:22,
            title:'joke 22',
            Que:'22. How do we know that the ocean is friendly?',
            Ans:'It waves.',
        },
        {
            id:23,
            title:'joke 23',
            Que:'23. What is a tornado’s favorite game to play?',
            Ans:'Twister.',
        },
        {
            id:24,
            title:'joke 24',
            Que:'24. How does the moon cut his hair?',
            Ans:'Eclipse it.',
        },
        {
            id:25,
            title:'joke 25',
            Que:'25. How do you talk to a giant?',
            Ans:'Use big words.',
        },
        {
            id:26,
            title:'joke 26',
            Que:'26. What animal is always at a baseball game?',
            Ans:'A bat.',
        },
        {
            id:27,
            title:'joke 27',
            Que:'27. What falls in winter but never gets hurt?',
            Ans:'Snow.',
        },
        {
            id:28,
            title:'joke 28',
            Que:'28. What did the Dalmatian say after lunch?',
            Ans:'That hit the spot.',
        },
        {
            id:29,
            title:'joke 29',
            Que:'29. Why did the kid cross the playground?',
            Ans:'To get to the other slide.',
        },
        {
            id:30,
            title:'joke 30',
            Que:'30. What do you call a droid that takes the long way around?',
            Ans:'R2 detour.',
        },
        {
            id:31,
            title:'joke 31',
            Que:'31. Why did the cookie go to the hospital?',
            Ans:'Because he felt crummy.',
        },
        {
            id:32,
            title:'joke 32',
            Que:'32. Why was the baby strawberry crying?',
            Ans:'Because her mom and dad were in a jam.',
        },
        {
            id:33,
            title:'joke 33',
            Que:'33. What did the little corn say to the mama corn?',
            Ans:'Where is pop corn?',
        },
        {
            id:34,
            title:'joke 34',
            Que:'34. How do you make a lemon drop?',
            Ans:'Just let it fall.',
        },
        {
            id:35,
            title:'joke 35',
            Que:'35. What did the limestone say to the geologist?',
            Ans:'Don’t take me for granite.',
        },
        {
            id:36,
            title:'joke 36',
            Que:'36. Why does a seagull fly over the sea?',
            Ans:'Because if it flew over the bay, it would be a baygull.',
        },
        {
            id:37,
            title:'joke 37',
            Que:'37. What kind of water can’t freeze?',
            Ans:'Hot water.',
        },
        {
            id:38,
            title:'joke 38',
            Que:'38. What kind of tree fits in your hand?',
            Ans:'A palm tree.',
        },
        {
            id:39,
            title:'joke 39',
            Que:'39. What do you call a dinosaur that is sleeping?',
            Ans:'A dino-snore.',
        },
        {
            id:40,
            title:'joke 40',
            Que:'40. What is fast, loud and crunchy?',
            Ans:'A rocket chip.',
        },
        {
            id:41,
            title:'joke 41',
            Que:'41. Why did the teddy bear say no to dessert?',
            Ans:'Because she was stuffed.',
        },
        {
            id:42,
            title:'joke 42',
            Que:'42. What has ears but cannot hear?',
            Ans:'A cornfield.',
        },
        {
            id:43,
            title:'joke 43',
            Que:'43. What did the left eye say to the right eye?',
            Ans:'Between us, something smells.',
        },
        {
            id:44,
            title:'joke 44',
            Que:'44. What did one plate say to the other plate?',
            Ans:'Dinner is on me.',
        },
        {
            id:45,
            title:'joke 45',
            Que:'45. Why did the student eat his homework?',
            Ans:'Because the teacher told him it was a piece of cake.',
        },
        {
            id:46,
            title:'joke 46',
            Que:'46. When you look for something, why is it always in the last place you look?Because when you find it, you stop looking.',
            Ans:'place you look?Because when you find it, you stop looking.',
        },
        {
            id:47,
            title:'joke 47',
            Que:'47. What is brown, hairy and wears sunglasses?',
            Ans:'A coconut on vacation.',
        },
        {
            id:48,
            title:'joke 49',
            Que:'48. What do you say to a rabbit on its birthda',
            Ans:'Hoppy Birthday.',
        },
        {
            id:49,
            title:'joke 49',
            Que:'49. What’s the one thing will you get every year on your birthday, guaranteed?',
            Ans:'A year older.',
        },
        {
            id:50,
            title:'joke 50',
            Que:'50. Why do candles always go on the top of cakes?',
            Ans:"Because it's hard to light them from the bottom.",
        },
        {
            id:51,
            title:'joke 51',
            Que:'51. What do cakes and baseball teams have in common?',
            Ans:'They both need a good batter.',
        },
        {
            id:52,
            title:'joke 52',
            Que:'52. What goes up but never comes down?',
            Ans:'Your age.',
        },
        {
            id:53,
            title:'joke 53',
            Que:'53. What does every birthday end with?',
            Ans:'The letter Y.',
        },
        {
            id:54,
            title:'joke 54',
            Que:'54. What did the tiger say to her cub on his birthday?',
            Ans:"It's roar birthday.",
        },
        {
            id:55,
            title:'joke 55',
            Que:'55. Why did the girl put her cake in the freezer?',
            Ans:'She wanted to ice it.',
        },
    ];
    res.send(joke)
})




app.get('/',(req,res)=>{
    res.send("This is working")
})



app.listen(port,(req,res)=>{
    console.log(`server is successfully open in ${port} port `);
})