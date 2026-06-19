import database from "../../../../infra/database.js";

async function status(request, response) {
  const test = await database.query("SELECT 1 + 1;")
  // console.log("test")
  console.log(test.rows)

  response.status(200).json({
    message: "são média",
  });
}

export default status;
