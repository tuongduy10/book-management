import { NextApiRequest, NextApiResponse } from 'next';

export const callAPI = (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
      case 'GET':
        // code here
        break;
      case 'POST':
        // handle post request
        break;
      case 'PUT':
        // handle put request
        break;
      case 'DELETE':
        // handle delete request
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };