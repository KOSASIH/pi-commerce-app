// controllers/auth.js
import { authenticate } from '../services/auth';

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await authenticate(username, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await createUser(username, password);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

export { login, register };
