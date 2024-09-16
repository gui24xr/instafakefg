
//import { database, connectToDatabase } from "./config/databaselocal.js";

import { database, connectToDatabase } from "./config/databasefromrailway.js";


import { routerSessions, routerUsers, routerComments,routerPosts} from "./routes.js"


import {UsersController, JUANCITO }from "./controllers/users.controllers.js";
import SessionsController from "./controllers/sessions.controllers.js";
import PostsController from "./controllers/posts.controllers.js";
import CommentsController from "./controllers/comments.controllers.js";

import UsersRepositories from "./repositories/users.repositories.js";
import SessionsRepositories from "./repositories/sessions.repositories.js";
import PostsRepositories from "./repositories/posts.repositories.js";
import CommentsRepositories from "./repositories/comments.repositories.js";



export { 

    database,
    connectToDatabase,

    routerSessions,
    routerUsers,
    routerComments,
    routerPosts,
    JUANCITO,


    UsersController, 
    SessionsController, 
    PostsController, 
    CommentsController,

    UsersRepositories,
    SessionsRepositories,
    PostsRepositories,
    CommentsRepositories,

}