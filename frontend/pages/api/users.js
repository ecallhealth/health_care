import users from '../../backend/data/users';  // Importing user data

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users);  // Return users as JSON
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
