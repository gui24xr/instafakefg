import { database } from "../../modulespaths.js";
import { DataTypes } from "sequelize";

export const PostsModel = database.define("posts",{
    postId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    textContent:{
        type: DataTypes.TEXT,
        allowNull: true
    }
    
    
},
{tableName:"posts", timestamps: false})



/*
CREATE TABLE IF NOT EXISTS "posts"(
	"postId" UUID DEFAULT uuid_generate_v4(),
	"textContent" TEXT,
	"urlImage" VARCHAR(2048),
	"likesCount" INTEGER DEFAULT 0,
	"createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	"userId" UUID NOT NULL,
	PRIMARY KEY("postId"),
	FOREIGN KEY("userId") REFERENCES "users"("userId") ON DELETE CASCADE
);
*/