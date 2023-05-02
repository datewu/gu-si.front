export async function load({ fetch }) {
    const resp = await fetch("api/paste")
    const data = await resp.json()
    return data
}

export const actions = {
    default: async ({ fetch, request }) => {
        const data = await request.formData();
        const payload = { text: data.get('paste') }
        const response = await fetch('/api/paste', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/json'
            }
        });
        const resp = await response.json();
        return resp;
    }
}