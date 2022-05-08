import db from "../../../lib/db";
import * as uuid from 'uuid';
import { getSession } from "next-auth/react"
export default async function handler(req, res) {
    const session = await getSession({ req })

    console.log(session, "SESSION_API_CALL")

    if (req.method === "GET") {

        // Allow a blog post to get its number of likes and views
        const params = {
          TableName: "WSB_DEV_Songs",
        };
    
         db.scan(params, function (err, data) {
            if (err) {
              console.log('Error', err);
            } else {
              // send the json response from the callback
              res.json(data.Items);
            }
          });
      }
 
  
    if (req.method === "POST") {
        // Allow a blog post to get its number of likes and views
        const params = {
            TableName: "WSB_DEV_Songs",
            Item: {
            "id": uuid.v4(),
            "userId": req.body.userId,
            "title": req.body.title,
            "artist": req.body.artist,
            "album": req.body.album,
            "year": req.body.year,
            "imageUrl": req.body.imageUrl,
            "genre": req.body.genre,
            "createAt": new Date().toISOString(),
            "updateAt": new Date().toISOString(),
            }
        };
    
        db.put(params, function (err, data) {
            if (err) {
                console.log('Error', err);
            } else {
                // send the json response from the callback
                res.json(data);
            }
            });
    }

 

    if (req.method === "DELETE") {
        // Allow a blog post to get its number of likes and views
        const params = {
            TableName: "WSB_DEV_Songs",
            Key: {
            "id": req.body.id
            }
        };
    
        db.delete(params, function (err, data) {
            if (err) {
                console.log('Error', err);
            } else {
                // send the json response from the callback
                res.json(data);
            }
            });
    }
}
