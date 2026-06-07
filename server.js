const express = require("express");
const axios = require("axios");
const db = require("./database");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/github/:username", async (req, res) => {
    try {
        const username = req.params.username;

        const response = await axios.get(
            `https://api.github.com/users/${username}`
        );

        const user = response.data;

        db.run(
            `INSERT OR REPLACE INTO github_users
            (username, followers, following, public_repos, location)
            VALUES (?, ?, ?, ?, ?)`,
            [
                user.login,
                user.followers,
                user.following,
                user.public_repos,
                user.location
            ],
            (err) => {
                if (err) {
                    console.error("DB Insert Error:", err.message);
                } else {
                    console.log(`${user.login} saved to database`);
                }
            }
        );

        res.json(user);

    } catch (error) {
        res.status(404).json({
            message: "User not found"
        });
    }
});

app.get("/api/users", (req, res) => {

    db.all(
        "SELECT * FROM github_users",
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json(rows);
        }
    );
});

app.get("/api/users/:username", (req, res) => {

    const username = req.params.username;

    db.get(
        "SELECT * FROM github_users WHERE username = ?",
        [username],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            res.json(row);
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});