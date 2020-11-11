const Database = require('./db')

Database.then(async (db) => {  
  await db.run(`
    INSERT INTO orphanages (
      lat, 
      lng,
      name,
      whatsapp,
      images,
      instructions,
      opening_hours,
      open_on_weekends
    ) VALUES (
      "-17.5674154",
      "-52.5546287",
      "Lar das meninas",
      "Presta assistência a crianças de 6 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
      "https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "Venha como se sentir a vontade e traga muito amor e paciência para dar",
      "Horário de visitas das 18h as 8h",
      "1"

    )
  `)
})