# switchboard

## basic post syntax

### when submitting

    {
      username: string, // your username. if undefined clients will show "Anonymous" or similar.
      password: string, // your password, will be converted into tripcode. if undefined, user will be unauthenticated.
      board: string, // the name of the board you're posting on
      op-id: int, // original post ID. if undefined, will be created as a new thread instead of a reply to an existing one.
      body: string, // the body of the post.
    }

### when recieving

    {
      id: int, // id of post
      username: string, // anon's username. if undefined clients will show "Anonymous" or similar.
      tripcode: string, // anon's tripcode. use this to see if they're really who they say they are.
      time: Date, // timestamp.
      body: string, // the body of the post.
      replies: [] // threads only. array of posts that reply to the OP.
    }

## to add to this readme

* other client requirements
* license info
* a rabbit in a hat
* a bat
* a '64 impala
