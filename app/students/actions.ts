"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/app/lib/prisma";

export async function deleteStudent(id: number) {
  await prisma.student.delete({
    where: { id },
  });

  revalidatePath("/students");
}