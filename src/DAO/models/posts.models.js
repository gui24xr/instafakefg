import { database } from "../../modulespaths.js";
import { DataTypes, UUID } from "sequelize";
import { UsersModel } from "./users.models.js";

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
    },
    likesCount:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    urlImage: {
        type: DataTypes.STRING(300),
        allowNull: true,
    },
    userId:{
        type: UUID,
        allowNull: false,
        references:{
            model: UsersModel,
            key: 'userId'
        }
    }

    
    
},
{tableName:"posts", timestamps: false})


PostsModel.belongsTo(UsersModel, {
    foreignKey: 'userId',
    onDelete: 'CASCADE', 
  });

  UsersModel.hasMany(PostsModel, { 
    foreignKey: 'userId' });

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