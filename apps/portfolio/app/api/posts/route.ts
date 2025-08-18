import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const username = url.searchParams.get("username");
    const cursor = url.searchParams.get("cursor");
    const limit = url.searchParams.get("limit");

    if (!username) {
      return NextResponse.json(
        { error: "username is required" }, 
        { status: 400 }
      );
    }

    const query = `
      query {
        posts(username: "${username}") {
          title
          short_description
          url_slug
          tags
          likes
          released_at
        }
      }
    `;

    const response = await fetch("https://v2.velog.io/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      throw new Error("Velog API 호출 실패");
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      return NextResponse.json(
        { error: "GraphQL query failed" }, 
        { status: 400 }
      );
    }

    return NextResponse.json(data.data.posts);

  } catch (error) {
    console.error("Velog API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" }, 
      { status: 500 }
    );
  }
}