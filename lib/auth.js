import { hash, compare } from "bcryptjs";

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
