import { json } from '@sveltejs/kit';
let text = 'lol'
export function GET() {
    return json({ text })
}

export async function POST({ request }) {
    const data = await request.json();
    text = data.text;
    const ok = true
    return json({ ok });
}
