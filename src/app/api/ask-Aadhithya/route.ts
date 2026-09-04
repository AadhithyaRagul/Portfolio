import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

import {
  profile,
  experience,
  projects,
  skills,
  achievements
} from "@/data/portfolioData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function buildPortfolioContext(): string {
  return [
    `PROFILE:
Name: ${profile.name}
Headline: ${profile.headline}
Summary: ${profile.summary}
Location: ${profile.location}`,

    `EDUCATION:
Degree: ${profile.education.degree}
Institution: ${profile.education.institution}
University affiliation: ${profile.education.affiliation}
CGPA: ${profile.education.cgpa}
Graduation: ${profile.education.graduation}`,

    `EXPERIENCE:
${experience
  .map(
    (item) =>
      `- ${item.role} at ${item.organization} (${item.period}, ${item.mode}). ${item.points.join(
        ". "
      )}.${item.project ? ` Project: ${item.project} (${item.projectStatus}).` : ""}`
  )
  .join("\n")}`,

    `PROJECTS:
${projects
  .map(
    (project) =>
      `- ${project.name} [${project.status}] (${project.category}): ${
        project.purpose
      } Tech: ${project.stack.join(", ")}. Facts: ${project.facts.join(", ")}.${
        project.github ? ` GitHub: ${project.github}` : ""
      }${project.demo ? ` Demo: ${project.demo}` : ""}${
        project.limitations ? ` Limitation: ${project.limitations}` : ""
      }`
  )
  .join("\n")}`,

    `SKILLS:
${skills
  .map((skill) => `- ${skill.category}: ${skill.items.join(", ")}`)
  .join("\n")}`,

    `ACHIEVEMENTS:
${achievements
  .map(
    (achievement) =>
      `- ${achievement.title}${
        achievement.organization ? ` (${achievement.organization})` : ""
      }${achievement.track ? ` — ${achievement.track}` : ""}${
        achievement.location ? ` — ${achievement.location}` : ""
      }${achievement.team ? ` — Team: ${achievement.team}` : ""}${
        achievement.scale ? ` — Scale: ${achievement.scale}` : ""
      }`
  )
  .join("\n")}`,

    `CONTACT:
Email: ${profile.email}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}`,

    `RESUME:
Aadhithya's resume is available as a PDF document in the portfolio.
If the visitor asks to see/download the resume, use [OPEN_RESUME].`,
  ].join("\n\n");
}

function generateLocalResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("hire") || q.includes("why should") || q.includes("why hire")) {
    return "Here is why Aadhithya stands out:\n\n• Hands-On Builder: 5+ real projects across full-stack web, AI/ML, and cloud APIs.\n• Proven Tech Stack: Python, React, Java, JavaScript and SQL.\n• Driven & Versatile: Loves tackling complex problems and writing clean, scalable code.\n\nCheck out her work to see what she can do! [OPEN_PROJECTS] [OPEN_ABOUT]";
  }

  if (q.includes("project") || q.includes("built") || q.includes("work")) {
    return "Aadhithya has built 5+ public projects across AI security, web apps, and backend tools: [OPEN_PROJECTS]";
  }



  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("technology") ||
    q.includes("languages")
  ) {
    return "Here is a quick look at Aadhithya's tech stack:\n\n• Frontend: React, JavaScript, Tailwind CSS, HTML, CSS\n• Backend & DevOps:  Node.js, Git, GitHub, SQL, MongoDB, PostgreSQL\n• Languages: Python, Java, JavaScript\n\nExplore her full skills breakdown! [OPEN_SKILLS]";
  }

  if (
    q.includes("experience") ||
    q.includes("internship") ||
    q.includes("role")
  ) {
    return "Aadhithya has worked on full-stack web applications, AI integrations, and containerized backend microservices through hands-on projects and internships. [OPEN_EXPERIENCE]";
  }

  if (q.includes("resume") || q.includes("cv") || q.includes("pdf")) {
    return "You can view and download Aadhithya's updated resume right here in the portfolio! [OPEN_RESUME]";
  }

  if (
    q.includes("achievement") ||
    q.includes("hackathon") ||
    q.includes("award") ||
    q.includes("win")
  ) {
    return "Aadhithya loves coding challenges, placing as a finalist and winner in competitive tech events. [OPEN_ACHIEVEMENTS]";
  }

  if (
    q.includes("certif") ||
    q.includes("course") ||
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("university") ||
    q.includes("college")
  ) {
    return "Aadhithya is completed his B.E in CSE at DSEC. he holds verified certificates in Python, and Java. [OPEN_CERTIFICATIONS]";
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("github") ||
    q.includes("linkedin")
  ) {
    return "Let's connect! You can reach Aadhithya here:\n\n• Email: Aadhithyaragul@gmail.com\n• GitHub: github.com/AadhithyaRagul\n• LinkedIn: Aadhithya A\n\nClick below to open her contact panel! [OPEN_CONTACT]";
  }

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey") ||
    q.includes("who are you")
  ) {
    return "Hey there! I'm Ask Aadhithya, his portfolio assistant. Feel free to ask about his 5+ projects, Frontend / Full Stack skills, or why he'd be a great fit for your team! [OPEN_ABOUT]";
  }

  return `Aadhithya A is an Software student at DSEC and Full-Stack Developer with 5+ projects in web apps, and APIs.\n\nFeel free to ask about his work or view his resume! [OPEN_PROJECTS]`;
}

const systemInstruction = `
You are Ask Aadhithya, an intelligent conversational AI assistant for Aadhithya A's professional portfolio.

Your purpose is to answer visitors naturally, intelligently, and conversationally.

CORE BEHAVIOR:
1. Use the portfolio data supplied with the request as your factual source about Aadhithya.
2. Do NOT behave like a fixed FAQ bot.
3. Generate a fresh response for every visitor question.
4. Answer the visitor's actual question directly.
5. Keep normal answers concise but complete (2-5 sentences).
6. Do not use Markdown formatting (** or ##).
7. Never invent facts.
8. When relevant, append ONE UI action marker like [OPEN_PROJECTS], [OPEN_ABOUT], [OPEN_RESUME], [OPEN_SKILLS], [OPEN_EXPERIENCE], [OPEN_CONTACT].
`;

interface HistoryMessage {
  role: "user" | "assistant";
  content: string;
}

function getHistory(value: unknown): HistoryMessage[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (message): message is HistoryMessage =>
        typeof message === "object" &&
        message !== null &&
        ((message as HistoryMessage).role === "user" ||
          (message as HistoryMessage).role === "assistant") &&
        typeof (message as HistoryMessage).content === "string"
    )
    .slice(-6);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const question =
      typeof body.question === "string" ? body.question.trim() : "";

    if (!question) {
      return new Response(JSON.stringify({ error: "Question is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && apiKey !== "your_gemini_api_key_here") {
      try {
        const portfolioContext = buildPortfolioContext();
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction,
        });

        const history = getHistory(body.history).map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        }));

        const chat = model.startChat({
          history,
          generationConfig: { maxOutputTokens: 700 },
        });

        const userMessage = `PORTFOLIO DATA:\n\n${portfolioContext}\n\nVISITOR QUESTION:\n\n${question}`;
        const result = await chat.sendMessageStream(userMessage);

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of result.stream) {
                const text = chunk.text();
                if (text) {
                  controller.enqueue(encoder.encode(text));
                }
              }
              controller.close();
            } catch (error) {
              console.error("Ask Aadhithya streaming error:", error);
              controller.error(error);
            }
          },
        });

        return new Response(stream, {
          status: 200,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "X-Accel-Buffering": "no",
          },
        });
      } catch (geminiErr) {
        console.warn(
          "Gemini API failed, falling back to local QA engine:",
          geminiErr
        );
      }
    }

    // Fallback local response stream when API key is missing or Gemini API fails
    const localAnswer = generateLocalResponse(question);
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(localAnswer));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("Ask Aadhithya error:", error);

    const fallback = generateLocalResponse("general");
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(fallback));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}