export async function loadHTML(selector, file) {
    try {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Failed to load ${file}: ${res.status}`);
        const html = await res.text();
        const el = document.querySelector(selector);
        if (!el) {
            console.warn(`loadHTML: selector "${selector}" not found`);
            return null;
        }
        el.innerHTML = html;
        return el;
    } catch (err) {
        console.error('loadHTML error:', err);
        return null;
    }
}
