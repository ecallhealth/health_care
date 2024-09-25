import products from '../../../backend/data/products'; // Adjust the path if needed

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(products); // Return product data as JSON
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
