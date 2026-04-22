import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Must return a Response. Returning undefined breaks _next/static and can cause an infinite reload loop in dev.
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}
