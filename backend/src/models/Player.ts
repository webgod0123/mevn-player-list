type Position = "Goalkeeper" | "Defender" | "Midfielder" | "Forward";

interface Player {
  id: string;
  name: string;
  position: Position;
  odds: number;
  margin: number;
  finalOdds?: string;
}

export default Player;
