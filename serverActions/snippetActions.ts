"use server";

import { db } from "@/db";

export async function editSnippetAction({
  id,
  code,
}: {
  id: number;
  code: string;
}) {
  await db.snippet.update({ where: { id }, data: { code } });
}

export async function deleteSnippetAction(id: number) {
  await db.snippet.delete({ where: { id } });
}
