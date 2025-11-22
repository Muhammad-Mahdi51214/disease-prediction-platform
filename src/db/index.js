import mysql from "mysql2";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
});

export const connectToDB = async () => {
  try {
    await new Promise((resolve, reject) => {
      connection.connect(err => {
        if (err) 
          return reject(err);

        return resolve();
      });
    });

    console.log("Connected to MySQL");
  } catch (err) {
    console.error("Connection Error:", err.message);
  }
};

export default connection;
