const Database = require('./db')

Database.then(async (db) => {  
  await db.run()

  
})