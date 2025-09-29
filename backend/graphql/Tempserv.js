import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


export const Schema = buildSchema(`
    type Dustbin {
        id: ID!
        location: String!
        filllevel: String!
        last_collect: String!
        latitude: Int
        longitude: Int
    }

    type Menu {
        id: ID!
        filllevel: String!
    }

    type Query {
        getDustbin(id: ID!): Dustbin
        getAllDustbins: [Dustbin]
    }

    type Mutation {
        addDustbin(
            location: String!,
            filllevel: String!,
            last_collect: String!,
            latitude: String,
            longitude: String
        ): Dustbin

        updlocation(
            id: ID!,
            filllevel: String!
        ): Menu
    }
`)




export const root = {
    getDustbin: async ({ id }) => {
        return await prisma.dustbin.findUnique({
            where: { id: Number(id) }
        })
    },
    addDustbin: async ({ location, filllevel, last_collect, latitude, longitude }) => {
        return await prisma.dustbin.create({
            data: { location, filllevel, last_collect, latitude, longitude }
        });
    },

    updlocation: async ({ id, filllevel }) => {
        try {
            const updatedDustbin = await prisma.dustbin.update({
                where: {
                    id: Number(id), 
                },
                data: {
                    filllevel: filllevel,  // Set the new value in data field
                },
            });

            return updatedDustbin;
        } catch (error) {
            throw new Error(`Error updating dustbin: ${error.message}`);
        }
    },


} 
