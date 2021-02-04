const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

(async () => {
  // open the database
  const db = await sqlite.open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  await db.migrate({ force: true });

  const users = await db.all("select * from User");
  const animals = await db.all("select * from Animal");
  console.log(JSON.stringify(users, null, 2));
  console.log(JSON.stringify(animals, null, 2));
})();
