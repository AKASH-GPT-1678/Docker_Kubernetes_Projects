import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Data = 
  [
    {
      location: "Park Avenue, Sector 10",
      filllevel: "Full",
      last_collect: "2025-03-10 14:30",
      latitude: 28.7041,
      longitude: 77.1025
    },
    {
      location: "Main Market, Sector 5",
      filllevel: "MiddleAbove",
      last_collect: "2025-03-11 09:15",
      latitude: 28.7045,
      longitude: 77.1030
    },
    {
      location: "Green Park, Near Metro Station",
      filllevel: "Low",
      last_collect: "2025-03-12 18:00",
      latitude: 28.7038,
      longitude: 77.1018
    },
    {
      location: "Residential Area, Block A",
      filllevel: "Middle",
      last_collect: "2025-03-09 16:45",
      latitude: 28.7050,
      longitude: 77.1050
    },
    {
      location: "City Center Mall Entrance",
      filllevel: "Overflow",
      last_collect: "2025-03-12 11:20",
      latitude: 28.7062,
      longitude: 77.1065
    },
    {
      location: "Railway Station Exit Gate",
      filllevel: "Full",
      last_collect: "2025-03-11 20:10",
      latitude: 28.7071,
      longitude: 77.1080
    },
    {
      location: "Hospital Parking Area",
      filllevel: "LowAbove",
      last_collect: "2025-03-10 13:05",
      latitude: 28.7080,
      longitude: 77.1095
    },
    {
      location: "Bus Stand, Sector 12",
      filllevel: "Middle",
      last_collect: "2025-03-12 07:50",
      latitude: 28.7092,
      longitude: 77.1108
    },
    {
      location: "Tech Park, Tower B",
      filllevel: "Low",
      last_collect: "2025-03-11 22:30",
      latitude: 28.7105,
      longitude: 77.1120
    },
    {
      location: "Residential Area, Block C",
      filllevel: "Full",
      last_collect: "2025-03-12 05:40",
      latitude: 28.7110,
      longitude: 77.1135
    }
  ]
  



  async function Main() {
    try {
      const Seed = await prisma.dustbin.createMany({
        data: Data, // Directly passing the array
        skipDuplicates: true, // Prevents duplicate inserts
      });
  
      console.log("Data seeded:", Seed);
    } catch (error) {
      console.error("Error seeding data:", error);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  Main();