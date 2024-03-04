import "dotenv/config";
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({
  organization: process.env.OPEN_API_KEY,
});

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("/Users/alexnelson/Sites/whisper/source/New Recording 7.m4a"),
    model: "whisper-1",
  });

  console.log(transcription.text);
}

main();



