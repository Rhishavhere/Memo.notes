"use server"

import mongoose from "mongoose";
import User from "./Model";
export async function Connection(id) {

  let uri = `mongodb+srv://rhishav:${process.env.PASS}@memo.3bryx.mongodb.net/Memo?retryWrites=true&w=majority&appName=MEMO`;
  try {

    await mongoose.connect(uri);
    console.log("connection established!");
    const user = await User.findOne({ email: id });
    if (!user) {
      await User.create({ email: id, name: "Tasks", tasks: [{}] });
    }
  }
  catch (err) {
    console.log(err);
  }

};