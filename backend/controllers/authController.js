const db = require('../config/db');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Query PostgreSQL directly from the controller
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows.length > 0 ? result.rows[0] : null;

    if (user && user.password === password) {
      return res.status(200).json({
        message: 'Login successful',
        user: {
          email: user.email,
          role: user.role || 'admin'
        }
      });
    } else {
      return res.status(401).json({ message: 'Invalid credentials. Please try again.' });
    }
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login
};
