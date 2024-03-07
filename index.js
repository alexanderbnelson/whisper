import "dotenv/config";
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({
  organization: process.env.OPEN_API_KEY,
});

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("/Users/alexnelson/Dropbox (Personal)/Department of Interest/Website/Stories/Mark Ritchie/ritchie-2.m4a"),
    model: "whisper-1",
    maxBodyLength: 25 * 1024 * 1024,
  });
  

  console.log(transcription.text);
}

main();



