import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const username = url.searchParams.get("username");
    const cursor = url.searchParams.get("cursor");

    if (!username) {
      return NextResponse.json(
        { error: "username is required" }, 
        { status: 400 }
      );
    }

    const query = `
      query {
        posts(username: "${username}") {
          id
          title
          short_description
          body
          url_slug
          tags
          released_at
        }
      }
    `;

    const response = await fetch("https://v2.velog.io/graphql", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "User-Agent": "Portfolio-App/1.0",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        query,
      })
    });

    if (!response.ok) {
      console.error(`Velog API error: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { error: "Failed to fetch from Velog API" }, 
        { status: response.status }
      );
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      return NextResponse.json(
        { error: "GraphQL query failed", details: data.errors }, 
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