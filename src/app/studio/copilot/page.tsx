import React from "react";
import { getSessions, getSession } from "@/actions/copilot";
import CopilotClient from "./CopilotClient";

export const dynamic = "force-dynamic";

export default async function CopilotPage({
  searchParams,
}: {
  searchParams: Promise<{ session?: string }>;
}) {
  const { session: sessionId } = await searchParams;

  const sessionsResult = await getSessions();
  const sessions = sessionsResult.success ? sessionsResult.data : [];

  let currentSessionData = null;
  if (sessionId) {
    const detailResult = await getSession(sessionId);
    if (detailResult.success && detailResult.data) {
      currentSessionData = detailResult.data;
    }
  }

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col">
      <CopilotClient 
        sessions={sessions || []} 
        currentSession={currentSessionData} 
      />
    </div>
  );
}
