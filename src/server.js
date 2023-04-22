const express = require('express');
const mysql = require('mysql');
var cors = require('cors')



// Create a new Express.js app
const app = express();
app.use(cors());
// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sourik19127#',
  database: 'Member_database'
});

// Create an API endpoint to handle requests from the QR code scanner
app.get('/members/:id', (req, res) => {
  const memberId = req.params.id;

  // Get member details from the database
  pool.query("SELECT * FROM member_database.my_table limit 0,1000", memberId, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching member details');
    } else if (rows.length === 0) {
      res.status(404).send('Member not found');
    } else {
      const member = rows[{memberId}+1];
      res.send({
        id: member.id,
        name: member.name,
        email: member.email,
        contact:member.Phn_number,
        bloodgrp:member.blood_group,
        due:member.due,
        since:member.member_since,
        status:member.Membership_status
        // add other properties as needed
      });
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
