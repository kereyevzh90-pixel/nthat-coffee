import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Ты — дружелюбный ассистент кофейни "Brew & Soul" в Москве.

Информация о кофейне:
- Адрес: ул. Большая Никитская, 12, Москва
- Часы работы: Пн–Пт 7:00–22:00, Сб–Вс 8:00–23:00
- Телефон: +7 (495) 123-45-67
- Email: hello@brewandsoul.ru
- Работаем с 2018 года. Specialty-кофе, свежая обжарка, бариста из ведущих школ.

Меню кофе: Эспрессо 120₽, Флэт Уайт 240₽, Капучино 220₽, Латте 250₽, Раф 280₽, Колд Брю 260₽
Меню чай: Матча Латте 270₽, Чай масала 230₽, Улун 200₽, Имбирный лимонад 210₽
Меню еда: Круассан миндаль 180₽, Авокадо тост 320₽, Чизкейк 280₽, Тирамису 300₽, Гранола 240₽, Сырники 290₽

Правила:
- Отвечай по-русски, коротко и дружелюбно
- Если спрашивают не о кофейне — мягко переводи тему на кофе и меню
- Можешь рекомендовать напитки под настроение гостя`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const stream = client.messages.stream({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } catch (streamErr: unknown) {
          const e = streamErr as { status?: number; message?: string; error?: unknown };
          console.error("Stream error:", JSON.stringify({ status: e?.status, message: e?.message, error: e?.error }, null, 2));
          throw streamErr;
        }
        controller.close();
      },
      cancel() {
        stream.abort();
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err: unknown) {
    const e = err as { status?: number; message?: string; error?: unknown };
    console.error("Chat API error:", JSON.stringify({ status: e?.status, message: e?.message, error: e?.error }, null, 2));
    return new Response(JSON.stringify({ error: e?.message || "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
