export default async function handler(req, res) {
    return res.json({ 
        message: "Bybit 端點就緒",
        status: "ready" 
    });
}
