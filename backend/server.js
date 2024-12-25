import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

// get a list of 5 jokes 

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "Why don’t skeletons fight each other?",
          content: "They don’t have the guts."
        },
        {
          id: 2,
          title: "What do you call cheese that isn't yours?",
          content: "Nacho cheese."
        },
        {
          id: 3,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field."
        },
        {
          id: 4,
          title: "Why don’t eggs tell jokes?",
          content: "They’d crack each other up."
        },
        {
          id: 5,
          title: "What did one wall say to the other wall?",
          content: "I'll meet you at the corner."
        }
      ];

      res.json(jokes);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at ${port}`);
});