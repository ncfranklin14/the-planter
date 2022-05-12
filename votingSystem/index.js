const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const dataFile = path.join(__dirname, '.db/data.json');

app.use(express.urlencoded ({ extended: true}));    

app.get('/poll', async (req, res) => {
    let vote = JSON.parse(await fs.readFile(dataFile, 'utf-8'));
    const aggVotes = Object.values(vote).reduce((total, n) => total += n, 0);

    vote = Object.entries(vote).map(([name, votes])=> {
        return {
            name,
            percentage: (((100 * votes) / aggVotes) || 0).toFixed(0)
        }
    });
    // console.log(vote)

    // console.log(aggVotes);
    
    res.json(vote);
});


app.post('/poll', async (req, res) => {
    const vote = JSON.parse(await fs.readFile(dataFile, 'utf-8'));

    vote[req.body.add]++;

    await fs.writeFile(dataFile, JSON.stringify(vote));

    res.end("Thank you for voting!");
})

app.listen(3000, () => console.log("server is online")); 