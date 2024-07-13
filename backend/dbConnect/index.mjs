import sql from "mssql";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

const Execute = async function Execute(strQuery) {
  let dataRes = null;
  await sql
    .connect(config)
    .then(async function () {
      dataRes = await sql.query(strQuery);
      dataRes = dataRes.recordset;
      sql.close();
    })
    .catch((err) => {
      console.log(err);
    });
  return dataRes;
};

export { Execute };
