"use server";

import { revalidatePath } from "next/cache";
import User from "./Model";

export async function Addtask(task, id) {
  const temp = await User.findOne({ email: id });
  temp.tasks.push({ taskname: task, taskstatus: true });
  // console.log(temp.tasks);
  // await temp.save();
  revalidatePath("/dashboard");
}