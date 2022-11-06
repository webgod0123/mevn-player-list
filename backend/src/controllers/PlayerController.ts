import { Request, RequestHandler, Response } from "express";
import { Players } from "../models/Players";

export const players: RequestHandler = async (req: Request, res: Response) => {
  try {
    Players.forEach((player) => {
      player.finalOdds = calcOdds(player.odds, player.margin);
    });

    res.send(Players);
  } catch (error) {
    console.log("BFF_ERROR:", error);
  }
};

export const editMargin: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.body.id;
    const margin = req.body.value;
    Players.forEach((player) => {
      if (player.id == id) {
        player.finalOdds = calcOdds(player.odds, margin);
        player.margin = margin;
      }
    });
    res.send(Players);
  } catch (error) {
    console.log("BFF_ERROR:", error);
  }
};

const calcOdds = (odds, margin) => {
  const finalOdd = (odds / (margin + 1)).toFixed(2);
  return finalOdd;
};
