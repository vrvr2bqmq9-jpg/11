export default async function handler(req, res) {
    return res.json({ 
        message: "測試成功 - 新專案",
        status: "working",
        timestamp: new Date().toISOString()
    });
}
