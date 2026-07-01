test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();
  const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdateAt);

  const databaseVersion = responseBody.dependencies.database.database_version;

  const databaseMaxConnections =
    responseBody.dependencies.database.database_max_connections;

  const databaseActiveConnections =
    responseBody.dependencies.database.database_active_connections;

  //Valor
  expect(databaseVersion).toContain("16.0");
  expect(databaseMaxConnections).toEqual(100);
  expect(databaseActiveConnections).toBe(1);

  //Tipos
  expect(typeof databaseActiveConnections).toBe("number");
  expect(typeof databaseMaxConnections).toBe("number");
  expect(typeof databaseVersion).toBe("string");
});

// test.only("Teste de SQL Injection", async () => {
//   const response = await fetch(
//     "http://localhost:3000/api/v1/status?databaseName='; SELECT pg_sleep(4); --",
//   );
// });
