/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    "env": {
        "API_URL": process.env.API_URL,
        "OPENAI_API_TOKEN": process.env.OPENAI_API_TOKEN
    }
}

module.exports = nextConfig
