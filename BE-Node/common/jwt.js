import jwt from "jsonwebtoken";

const generateToken = async () => {
  return await jwt.sign(
    {
      data: "foobar",
    },
    process.env.SECRET,
    { expiresIn: "1h" }
  );
};

const verifToken = async (req, res, next) => {
  if (!req.get("authorization")) res.status(401).json("token is required");
  let token = req.get("authorization").split(" ")[1];
  await jwt.verify(token, process.env.SECRET, (err, data) => {
    if (data) next();
    else res.status(403).json("token expired");
  });
};

export { generateToken, verifToken };
